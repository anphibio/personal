const express = require("express");
const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");

const app = express();
const port = Number(process.env.PORT || 3000);
const appStateId = "main";
const staticDir = __dirname;
const seedPath = path.join(__dirname, "seed-data.json");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT || 5432),
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  ssl: process.env.POSTGRES_SSL === "true" ? { rejectUnauthorized: false } : false
});

app.use(express.json({ limit: "5mb" }));

async function withRetry(task, attempts = 20) {
  let lastError;
  for (let index = 1; index <= attempts; index += 1) {
    try {
      return await task();
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, Math.min(index * 500, 5000)));
    }
  }
  throw lastError;
}

function readSeedData() {
  return JSON.parse(fs.readFileSync(seedPath, "utf8"));
}

async function initDatabase() {
  await withRetry(async () => {
    await pool.query("SELECT 1");
  });

  await pool.query(`
    CREATE TABLE IF NOT EXISTS app_state (
      id TEXT PRIMARY KEY,
      data JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  const existing = await pool.query("SELECT id FROM app_state WHERE id = $1", [appStateId]);
  if (existing.rowCount === 0) {
    await pool.query(
      "INSERT INTO app_state (id, data) VALUES ($1, $2::jsonb)",
      [appStateId, JSON.stringify(readSeedData())]
    );
  }
}

app.get("/api/health", async (_request, response) => {
  try {
    await pool.query("SELECT 1");
    response.json({ ok: true, database: "connected" });
  } catch (error) {
    response.status(503).json({ ok: false, database: "unavailable" });
  }
});

app.get("/api/state", async (_request, response) => {
  const result = await pool.query("SELECT data, updated_at FROM app_state WHERE id = $1", [appStateId]);
  response.json(result.rows[0] || { data: null, updated_at: null });
});

app.put("/api/state", async (request, response) => {
  if (!request.body?.data || typeof request.body.data !== "object") {
    response.status(400).json({ ok: false, error: "Payload invalido." });
    return;
  }

  await pool.query(
    `
      INSERT INTO app_state (id, data, updated_at)
      VALUES ($1, $2::jsonb, NOW())
      ON CONFLICT (id)
      DO UPDATE SET data = EXCLUDED.data, updated_at = NOW()
    `,
    [appStateId, JSON.stringify(request.body.data)]
  );

  response.json({ ok: true });
});

app.use(express.static(staticDir, {
  extensions: ["html"],
  setHeaders(response, filePath) {
    if (filePath.endsWith(".html")) {
      response.setHeader("Cache-Control", "no-store");
    }
  }
}));

app.get("*", (_request, response) => {
  response.sendFile(path.join(staticDir, "index.html"));
});

initDatabase()
  .then(() => {
    app.listen(port, "0.0.0.0", () => {
      console.log(`Paulo Hilário Trainer rodando na porta ${port}`);
    });
  })
  .catch((error) => {
    console.error("Nao foi possivel iniciar o servidor.", error);
    process.exit(1);
  });

process.on("SIGTERM", async () => {
  await pool.end();
  process.exit(0);
});
