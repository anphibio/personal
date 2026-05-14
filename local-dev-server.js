const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";
const rootDir = __dirname;
const seedPath = path.join(rootDir, "seed-data.json");
const statePath = path.join(rootDir, ".local-app-state.json");
const uploadsDir = process.env.MEDIA_UPLOAD_DIR || path.join(rootDir, "uploads");
const maxUploadBytes = Number(process.env.MEDIA_UPLOAD_LIMIT_BYTES || 25 * 1024 * 1024);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".webm": "video/webm"
};

function ensureStateFile() {
  if (fs.existsSync(statePath)) return;
  fs.copyFileSync(seedPath, statePath);
}

function ensureUploadsDir() {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

function readState() {
  ensureStateFile();
  return JSON.parse(fs.readFileSync(statePath, "utf8"));
}

function writeState(data) {
  fs.writeFileSync(statePath, JSON.stringify(data, null, 2));
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { "Content-Type": mimeTypes[".json"] });
  response.end(JSON.stringify(payload));
}

function extensionFromMimeType(mimeType = "") {
  const value = String(mimeType).toLowerCase();
  if (value.includes("jpeg")) return ".jpg";
  if (value.includes("png")) return ".png";
  if (value.includes("gif")) return ".gif";
  if (value.includes("webp")) return ".webp";
  if (value.includes("svg")) return ".svg";
  if (value.includes("mp4")) return ".mp4";
  if (value.includes("webm")) return ".webm";
  if (value.includes("ogg")) return ".ogg";
  if (value.includes("quicktime")) return ".mov";
  return "";
}

function sanitizeFileName(name = "") {
  return String(name)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase() || "arquivo";
}

function publicUploadUrl(fileName) {
  return `/uploads/${fileName}`;
}

function serveFile(response, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";
  response.writeHead(200, {
    "Content-Type": contentType,
    "Cache-Control": ext === ".html" ? "no-store" : "public, max-age=300"
  });
  fs.createReadStream(filePath).pipe(response);
}

function resolveStaticPath(urlPath) {
  const safePath = path.normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, "");
  const directPath = path.join(rootDir, safePath);
  if (fs.existsSync(directPath) && fs.statSync(directPath).isFile()) return directPath;
  if (!path.extname(directPath)) {
    const htmlPath = `${directPath}.html`;
    if (fs.existsSync(htmlPath)) return htmlPath;
  }
  return path.join(rootDir, "index.html");
}

const server = http.createServer((request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);

  if (request.method === "GET" && requestUrl.pathname === "/api/health") {
    sendJson(response, 200, { ok: true, database: "local-file" });
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/state") {
    sendJson(response, 200, { data: readState(), updated_at: new Date().toISOString() });
    return;
  }

  if (request.method === "PUT" && requestUrl.pathname === "/api/state") {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString("utf8");
    });
    request.on("end", () => {
      try {
        const payload = JSON.parse(body || "{}");
        if (!payload.data || typeof payload.data !== "object") {
          sendJson(response, 400, { ok: false, error: "Payload invalido." });
          return;
        }
        writeState(payload.data);
        sendJson(response, 200, { ok: true });
      } catch (error) {
        sendJson(response, 400, { ok: false, error: "JSON invalido." });
      }
    });
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/upload-media") {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString("utf8");
    });
    request.on("end", async () => {
      try {
        const payload = JSON.parse(body || "{}");
        const buffer = Buffer.from(String(payload.base64 || ""), "base64");
        if (!buffer.length || buffer.length > maxUploadBytes) {
          sendJson(response, 400, { ok: false, error: "Arquivo vazio ou acima do limite permitido." });
          return;
        }
        ensureUploadsDir();
        const safeBaseName = sanitizeFileName(path.parse(String(payload.fileName || "arquivo")).name);
        const ext = path.extname(String(payload.fileName || "")).toLowerCase() || extensionFromMimeType(payload.mimeType);
        const finalName = `${Date.now()}-${safeBaseName}${ext}`;
        await fs.promises.writeFile(path.join(uploadsDir, finalName), buffer);
        sendJson(response, 200, { ok: true, url: publicUploadUrl(finalName), fileName: finalName });
      } catch (error) {
        sendJson(response, 400, { ok: false, error: "Nao foi possivel processar o upload." });
      }
    });
    return;
  }

  if (request.method !== "GET") {
    sendJson(response, 405, { ok: false, error: "Metodo nao permitido." });
    return;
  }

  const filePath = resolveStaticPath(requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname);
  serveFile(response, filePath);
});

server.listen(port, host, () => {
  ensureUploadsDir();
  console.log(`Servidor local de contingencia rodando em http://${host}:${port}`);
});
