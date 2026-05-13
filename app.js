const STORAGE_KEY = "pulsefit-coach-data";
const API_STATE_ENDPOINT = "/api/state";

const seedData = {
  users: [
    { id: "trainer-1", role: "trainer", name: "Paulo Hilário", email: "personal@paulohilario.com", password: "123456", mustChangePassword: true },
    { id: "stu-1", role: "student", name: "Ana Ribeiro", email: "ana@aluno.com", password: "123456", studentId: "stu-1", mustChangePassword: true },
    { id: "stu-2", role: "student", name: "Marcos Lima", email: "marcos@aluno.com", password: "123456", studentId: "stu-2", mustChangePassword: true }
  ],
  students: [
    {
      id: "stu-1",
      name: "Ana Ribeiro",
      email: "ana@aluno.com",
      goal: "Hipertrofia",
      plan: "Premium",
      phone: "(82) 99912-3311",
      status: "active",
      adherence: 92,
      weight: 62,
      measurements: {
        height: 166,
        weight: 62,
        chest: 88,
        waist: 69,
        abdomen: 74,
        hip: 96,
        rightArm: 29,
        leftArm: 28.5,
        rightThigh: 56,
        leftThigh: 55,
        calf: 36,
        bodyFat: 21
      },
      measurementHistory: [
        { date: "2026-03-12", weight: 65, waist: 74, hip: 97, bodyFat: 24 },
        { date: "2026-04-12", weight: 63.4, waist: 71, hip: 96.5, bodyFat: 22.5 },
        { date: "2026-05-12", weight: 62, waist: 69, hip: 96, bodyFat: 21 }
      ],
      lastCheckin: "2026-05-12",
      notes: "Boa evolução em membros inferiores."
    },
    {
      id: "stu-2",
      name: "Marcos Lima",
      email: "marcos@aluno.com",
      goal: "Emagrecimento",
      plan: "Essencial",
      phone: "(82) 98845-7710",
      status: "attention",
      adherence: 68,
      weight: 91,
      measurements: {
        height: 178,
        weight: 91,
        chest: 106,
        waist: 101,
        abdomen: 107,
        hip: 108,
        rightArm: 36,
        leftArm: 35.5,
        rightThigh: 64,
        leftThigh: 63,
        calf: 41,
        bodyFat: 29
      },
      measurementHistory: [
        { date: "2026-03-09", weight: 96, waist: 108, hip: 110, bodyFat: 32 },
        { date: "2026-04-09", weight: 93.5, waist: 104, hip: 109, bodyFat: 30.5 },
        { date: "2026-05-09", weight: 91, waist: 101, hip: 108, bodyFat: 29 }
      ],
      lastCheckin: "2026-05-09",
      notes: "Ajustar rotina por viagens a trabalho."
    },
    {
      id: "stu-3",
      name: "Julia Santos",
      email: "julia@aluno.com",
      goal: "Condicionamento",
      plan: "Premium",
      phone: "(82) 98720-1108",
      status: "active",
      adherence: 84,
      weight: 58,
      measurements: {
        height: 162,
        weight: 58,
        chest: 84,
        waist: 66,
        abdomen: 71,
        hip: 92,
        rightArm: 27,
        leftArm: 27,
        rightThigh: 53,
        leftThigh: 53,
        calf: 34,
        bodyFat: 19
      },
      measurementHistory: [
        { date: "2026-03-11", weight: 57,
          waist: 68, hip: 90, bodyFat: 21 },
        { date: "2026-04-11", weight: 57.6, waist: 67, hip: 91, bodyFat: 20 },
        { date: "2026-05-11", weight: 58, waist: 66, hip: 92, bodyFat: 19 }
      ],
      lastCheckin: "2026-05-11",
      notes: "Manter corrida leve nos dias sem treino."
    }
  ],
  workouts: [
    {
      id: "work-1",
      studentId: "stu-1",
      name: "Treino A - Inferiores",
      focus: "Forca e hipertrofia",
      frequency: "3x por semana",
      createdAt: "2026-05-10",
      exercises: [
        { name: "Agachamento livre", sets: "4", reps: "8-10", load: "42 kg" },
        { name: "Leg press", sets: "4", reps: "10", load: "120 kg" },
        { name: "Cadeira extensora", sets: "3", reps: "12", load: "35 kg" }
      ]
    },
    {
      id: "work-2",
      studentId: "stu-2",
      name: "Circuito Metabolico",
      focus: "Gasto calorico",
      frequency: "4x por semana",
      createdAt: "2026-05-08",
      exercises: [
        { name: "Remada baixa", sets: "3", reps: "12", load: "40 kg" },
        { name: "Esteira inclinada", sets: "1", reps: "18 min", load: "Zona 2" },
        { name: "Prancha", sets: "4", reps: "35 s", load: "Peso corporal" }
      ]
    }
  ],
  workoutTemplates: [
    {
      id: "tpl-1",
      name: "Modelo Hipertrofia - Inferiores",
      focus: "Hipertrofia",
      frequency: "3x por semana",
      exercises: [
        { name: "Agachamento livre", sets: "4", reps: "", load: "" },
        { name: "Leg press", sets: "4", reps: "", load: "" },
        { name: "Cadeira extensora", sets: "3", reps: "", load: "" },
        { name: "Mesa flexora", sets: "3", reps: "", load: "" }
      ]
    }
  ],
  checkins: [
    { id: "chk-1", studentId: "stu-1", date: "2026-05-12", mood: "Alta energia", message: "Completei todos os treinos da semana." },
    { id: "chk-2", studentId: "stu-2", date: "2026-05-09", mood: "Cansado", message: "Consegui treinar duas vezes, mas viajei no fim da semana." }
  ],
  trainingLogs: [
    { id: "log-1", studentId: "stu-1", workoutId: "work-1", date: "2026-05-10", completedExercises: [0, 1, 2] },
    { id: "log-2", studentId: "stu-1", workoutId: "work-1", date: "2026-05-12", completedExercises: [0, 1] },
    { id: "log-3", studentId: "stu-2", workoutId: "work-2", date: "2026-05-09", completedExercises: [0, 1, 2] }
  ]
};

let state = loadData();
let session = JSON.parse(localStorage.getItem("pulsefit-session") || "null");
let currentView = "dashboard";
let reportStudentId = null;
let selectedTrainingDate = new Date().toISOString().slice(0, 10);
let editingStudentId = null;
let remoteSaveTimer = null;
let remoteSyncAvailable = false;

function loadData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
    return structuredClone(seedData);
  }
  const parsed = normalizeData(JSON.parse(stored));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
  return parsed;
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  scheduleRemoteSave();
}

function saveLocalDataOnly() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function scheduleRemoteSave() {
  if (!remoteSyncAvailable) return;
  clearTimeout(remoteSaveTimer);
  remoteSaveTimer = setTimeout(persistStateRemote, 250);
}

async function persistStateRemote() {
  if (!remoteSyncAvailable) return;
  try {
    await fetch(API_STATE_ENDPOINT, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: state })
    });
  } catch (error) {
    console.warn("Nao foi possivel salvar no servidor.", error);
  }
}

async function syncFromServer() {
  try {
    const response = await fetch(API_STATE_ENDPOINT, { cache: "no-store" });
    if (!response.ok) return;
    remoteSyncAvailable = true;
    const payload = await response.json();
    if (payload?.data) {
      state = normalizeData(payload.data);
      saveLocalDataOnly();
      render();
    } else {
      await persistStateRemote();
    }
  } catch (error) {
    remoteSyncAvailable = false;
  }
}

function normalizeData(data) {
  data.users = (data.users || []).map((user) => {
    const normalizedUser = {
      ...user,
      mustChangePassword: user.mustChangePassword ?? user.password === "123456"
    };
    if (user.id !== "trainer-1") return normalizedUser;
    return { ...normalizedUser, name: "Paulo Hilário", email: "personal@paulohilario.com" };
  });
  data.students = (data.students || []).map((student) => {
    const seededStudent = seedData.students.find((item) => item.id === student.id);
    const fallbackWeight = Number(student.weight || 0);
    const hasUsefulMeasurements = student.measurements && ["waist", "hip", "bodyFat", "chest"].some((key) => Number(student.measurements[key]) > 0);
    const measurements = {
      height: 0,
      weight: fallbackWeight,
      chest: 0,
      waist: 0,
      abdomen: 0,
      hip: 0,
      rightArm: 0,
      leftArm: 0,
      rightThigh: 0,
      leftThigh: 0,
      calf: 0,
      bodyFat: 0,
      ...(!hasUsefulMeasurements && seededStudent ? seededStudent.measurements : {}),
      ...(hasUsefulMeasurements ? student.measurements : {})
    };
    const hasUsefulHistory = student.measurementHistory?.length > 1 && student.measurementHistory.some((entry) => Number(entry.waist || entry.bodyFat || 0) > 0);
    const measurementHistory = hasUsefulHistory
      ? student.measurementHistory
      : seededStudent?.measurementHistory
        ? seededStudent.measurementHistory
      : [{
        date: student.lastCheckin || new Date().toISOString().slice(0, 10),
        weight: measurements.weight,
        waist: measurements.waist,
        hip: measurements.hip,
        bodyFat: measurements.bodyFat
      }];
    return { ...student, weight: measurements.weight, measurements, measurementHistory };
  });
  data.workouts = data.workouts || [];
  data.workoutTemplates = data.workoutTemplates || seedData.workoutTemplates || [];
  data.checkins = data.checkins || [];
  data.trainingLogs = data.trainingLogs || [];
  return data;
}

function setSession(user) {
  session = user ? { id: user.id, role: user.role } : null;
  localStorage.setItem("pulsefit-session", JSON.stringify(session));
  currentView = "dashboard";
  render();
}

function currentUser() {
  return state.users.find((user) => user.id === session?.id);
}

function initials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function todayBR(date = new Date()) {
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function formatDateBR(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("pt-BR");
}

function statusLabel(status) {
  return { active: "Ativo", attention: "Atencao", paused: "Pausado" }[status] || "Ativo";
}

function measurement(student, key) {
  return Number(student.measurements?.[key] ?? student[key] ?? 0);
}

function measurementDelta(student, key) {
  const history = student.measurementHistory || [];
  if (history.length < 2) return 0;
  const first = Number(history[0][key] || 0);
  const last = Number(history[history.length - 1][key] || 0);
  return Number((last - first).toFixed(1));
}

function formatDelta(value, unit = "") {
  if (!value) return `0${unit}`;
  return `${value > 0 ? "+" : ""}${value}${unit}`;
}

function studentById(id) {
  return state.students.find((student) => student.id === id);
}

function workoutsByStudent(studentId) {
  return state.workouts.filter((workout) => workout.studentId === studentId);
}

function workoutById(workoutId) {
  return state.workouts.find((workout) => workout.id === workoutId);
}

function workoutForDate(studentId, date) {
  const workouts = workoutsByStudent(studentId);
  if (!workouts.length) return null;
  const dayIndex = new Date(`${date}T12:00:00`).getDay();
  return workouts[dayIndex % workouts.length];
}

function trainingLogFor(studentId, date, workoutId) {
  return state.trainingLogs.find((log) => log.studentId === studentId && log.date === date && log.workoutId === workoutId);
}

function ensureTrainingLog(studentId, date, workoutId) {
  let log = trainingLogFor(studentId, date, workoutId);
  if (!log) {
    log = { id: `log-${Date.now()}`, studentId, workoutId, date, completedExercises: [] };
    state.trainingLogs.push(log);
  }
  return log;
}

function toast(message) {
  const current = document.querySelector(".toast");
  if (current) current.remove();
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add("show"));
  setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => el.remove(), 260);
  }, 2600);
}

function render() {
  if (!session || !currentUser()) {
    renderLogin();
    return;
  }

  const user = currentUser();
  if (user.mustChangePassword) {
    renderFirstAccessPassword(user);
    return;
  }

  document.querySelector("#app").innerHTML = `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand-mark">
          <div class="brand-logo">PH</div>
          <div>
            <div>Paulo Hilário Trainer</div>
            <small>${user.role === "trainer" ? "Painel do personal" : "Area do aluno"}</small>
          </div>
        </div>
        <nav class="nav">
          ${navButton("dashboard", "Dashboard")}
          ${user.role === "trainer" ? navButton("students", "Alunos") : ""}
          ${navButton("workouts", user.role === "trainer" ? "Treinos" : "Meu treino")}
          ${user.role === "trainer" ? navButton("checkins", "Check-ins") : navButton("progress", "Progresso")}
          ${navButton("profile", "Perfil")}
        </nav>
        <div class="sidebar-footer">
          <button class="ghost-button" data-action="logout">Sair</button>
        </div>
      </aside>
      <main class="main">
        <header class="topbar">
          <div class="section-title">
            <h2>${viewTitle(user.role)}</h2>
            <p>${viewSubtitle(user.role)}</p>
          </div>
          <div class="profile-pill">
            ${user.role === "trainer" ? `<img class="avatar photo-avatar" src="assets/paulo-portrait.jpeg" alt="Paulo Hilário" />` : `<div class="avatar">${initials(user.name)}</div>`}
            <div>
              <strong>${user.name}</strong><br />
              <small>${todayBR()}</small>
            </div>
          </div>
        </header>
        <section class="view">${renderView(user)}</section>
      </main>
    </div>
  `;
}

function navButton(view, label) {
  const icon = { dashboard: "◧", students: "+", workouts: "▤", checkins: "✓", progress: "↗", profile: "⚙" }[view];
  return `<button class="${currentView === view ? "active" : ""}" data-view="${view}"><span>${icon}</span>${label}</button>`;
}

function viewTitle(role) {
  if (currentView === "report") return "Relatorio de evolucao";
  if (currentView === "profile") return "Meu perfil";
  if (role === "student") {
    return { dashboard: "Meu painel", workouts: "Meu treino", progress: "Meu progresso" }[currentView] || "Meu painel";
  }
  return { dashboard: "Dashboard", students: "Cadastro de alunos", workouts: "Cadastro de treinos", checkins: "Check-ins dos alunos" }[currentView] || "Dashboard";
}

function viewSubtitle(role) {
  if (currentView === "report") return "Revise o relatorio e salve em PDF pela janela de impressao.";
  if (currentView === "profile") return "Gerencie seus dados de acesso, email e senha.";
  if (role === "student") return "Acompanhe seus treinos, metas e retorno do personal.";
  return "Acompanhe adesao, evolucao e rotinas dos seus alunos em um lugar so.";
}

function renderView(user) {
  if (currentView === "report") return renderEvolutionReportView(reportStudentId || user.studentId);
  if (currentView === "profile") return renderProfile(user);
  if (user.role === "student") return renderStudentView(user);
  if (currentView === "students") return renderStudents();
  if (currentView === "workouts") return renderWorkoutManager();
  if (currentView === "checkins") return renderCheckins();
  return renderTrainerDashboard();
}

function renderLogin() {
  document.querySelector("#app").innerHTML = `
    <div class="login-page">
      <section class="login-visual">
        <div class="brand-mark">
          <div class="brand-logo">PH</div>
          <span>Paulo Hilário Trainer</span>
        </div>
        <div class="login-copy">
          <h1>Treino, evolução e acompanhamento com Paulo Hilário.</h1>
          <p>Dashboard de alunos, cadastro de treinos, check-ins e área autenticada para acompanhar cada evolução com método e presença.</p>
        </div>
      </section>
      <section class="login-panel">
        <div class="auth-box">
          <div class="trainer-card">
            <img src="assets/paulo-portrait.jpeg" alt="Paulo Hilário" />
            <div>
              <strong>Paulo Hilário</strong>
              <span>Personal trainer</span>
            </div>
          </div>
          <h2>Entrar</h2>
          <p>Informe seu email e senha para acessar.</p>
          <form id="login-form" class="form-grid" autocomplete="off">
            <label class="wide">Email
              <input name="email" type="email" autocomplete="off" required />
            </label>
            <label class="wide">Senha
              <input name="password" type="password" autocomplete="new-password" required />
            </label>
            <p class="error-text wide" id="login-error"></p>
            <button class="primary-button wide" type="submit">Entrar no sistema</button>
          </form>
          <p class="demo-note">Senha inicial: 123456. No primeiro acesso, o sistema solicita a troca da senha.</p>
        </div>
      </section>
    </div>
  `;
}

function renderFirstAccessPassword(user) {
  document.querySelector("#app").innerHTML = `
    <div class="login-page">
      <section class="login-visual">
        <div class="brand-mark">
          <div class="brand-logo">PH</div>
          <span>Paulo Hilário Trainer</span>
        </div>
        <div class="login-copy">
          <h1>Antes de começar, crie sua senha.</h1>
          <p>Este é o primeiro acesso de ${user.name}. Troque a senha inicial para proteger a conta.</p>
        </div>
      </section>
      <section class="login-panel">
        <div class="auth-box">
          <div class="trainer-card">
            ${user.role === "trainer" ? `<img src="assets/paulo-portrait.jpeg" alt="Paulo Hilário" />` : `<div class="profile-initials">${initials(user.name)}</div>`}
            <div>
              <strong>${user.name}</strong>
              <span>${user.email}</span>
            </div>
          </div>
          <h2>Alterar senha</h2>
          <p>Escolha uma nova senha para liberar o acesso ao sistema.</p>
          <form id="first-access-form" class="form-grid">
            <label class="wide">Nova senha
              <input name="newPassword" type="password" autocomplete="new-password" minlength="6" required placeholder="Minimo 6 caracteres" />
            </label>
            <label class="wide">Confirmar nova senha
              <input name="confirmPassword" type="password" autocomplete="new-password" minlength="6" required placeholder="Repita a nova senha" />
            </label>
            <p class="error-text wide" id="first-access-error"></p>
            <button class="primary-button wide" type="submit">Salvar nova senha</button>
          </form>
        </div>
      </section>
    </div>
  `;
}

function renderTrainerDashboard() {
  const total = state.students.length;
  const active = state.students.filter((student) => student.status === "active").length;
  const adherence = Math.round(state.students.reduce((sum, student) => sum + student.adherence, 0) / total);
  const workouts = state.workouts.length;
  const sortedStudents = [...state.students].sort((a, b) => b.adherence - a.adherence);
  const waistEvolution = Math.round(state.students.reduce((sum, student) => sum + measurementDelta(student, "waist"), 0) / total);
  const fatEvolution = (state.students.reduce((sum, student) => sum + measurementDelta(student, "bodyFat"), 0) / total).toFixed(1);
  return `
    <div class="stats-grid">
      ${stat("Alunos ativos", active, `${total} cadastrados`)}
      ${stat("Adesao media", `${adherence}%`, "+6% no mes")}
      ${stat("Cintura media", `${formatDelta(waistEvolution, " cm")}`, "Evolucao desde marco")}
      ${stat("Gordura corporal", `${formatDelta(fatEvolution, "%")}`, "Media da carteira")}
    </div>
    <section class="coach-banner">
      <img src="assets/paulo-profile.jpeg" alt="Paulo Hilário" />
      <div>
        <span>Personal trainer</span>
        <h3>Paulo Hilário</h3>
        <p>Acompanhamento próximo para transformar treino, medidas e consistência em evolução visível.</p>
      </div>
    </section>
    <div class="content-grid">
      <div class="panel">
        <div class="panel-header">
          <h3>Alunos em acompanhamento</h3>
          <button class="primary-button" data-view="students">Novo aluno</button>
        </div>
        <div class="table-wrap">
          ${studentsTable(sortedStudents.slice(0, 5))}
        </div>
      </div>
      <div class="panel">
        <div class="panel-header"><h3>Adesao semanal</h3></div>
        <div class="panel-body chart">
          ${state.students.map((student) => chartRow(student.name.split(" ")[0], student.adherence)).join("")}
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-header">
        <h3>Evolucao corporal</h3>
        <button class="ghost-button" data-view="students">Atualizar medidas</button>
      </div>
      <div class="panel-body cards-grid">
        ${state.students.map((student) => evolutionCard(student)).join("")}
      </div>
    </div>
  `;
}

function stat(label, value, detail) {
  return `<div class="stat"><span>${label}</span><strong>${value}</strong><small>${detail}</small></div>`;
}

function chartRow(label, value) {
  return `
    <div class="chart-row">
      <span>${label}</span>
      <div class="chart-track"><span style="--value:${value}%"></span></div>
      <strong>${value}%</strong>
    </div>
  `;
}

function evolutionCard(student) {
  const weightDelta = measurementDelta(student, "weight");
  const waistDelta = measurementDelta(student, "waist");
  const fatDelta = measurementDelta(student, "bodyFat");
  return `
    <article class="item-card evolution-card">
      <div class="card-title-row">
        <div class="student-cell"><div class="avatar">${initials(student.name)}</div>${student.name}</div>
        <button class="icon-button" type="button" title="Exportar PDF" data-action="export-evolution-pdf" data-student-id="${student.id}">PDF</button>
      </div>
      <div class="measure-grid">
        <div><span>Peso</span><strong>${measurement(student, "weight")} kg</strong><small>${formatDelta(weightDelta, " kg")}</small></div>
        <div><span>Cintura</span><strong>${measurement(student, "waist")} cm</strong><small>${formatDelta(waistDelta, " cm")}</small></div>
        <div><span>Gordura</span><strong>${measurement(student, "bodyFat")}%</strong><small>${formatDelta(fatDelta, "%")}</small></div>
      </div>
      <div class="mini-trend">
        ${(student.measurementHistory || []).map((entry) => `<span style="height:${Math.max(18, Math.min(62, 118 - Number(entry.waist || 90)))}px" title="${entry.date}"></span>`).join("")}
      </div>
    </article>
  `;
}

function studentsTable(students) {
  return `
    <table>
      <thead>
        <tr>
          <th>Aluno</th>
          <th>Objetivo</th>
          <th>Plano</th>
          <th>Adesao</th>
          <th>Status</th>
          <th>Ultimo check-in</th>
          <th>Acoes</th>
        </tr>
      </thead>
      <tbody>
        ${students.map((student) => `
          <tr>
            <td><div class="student-cell"><div class="avatar">${initials(student.name)}</div>${student.name}</div></td>
            <td>${student.goal}</td>
            <td>${student.plan}</td>
            <td><div class="progress-bar"><span style="--value:${student.adherence}%"></span></div></td>
            <td><span class="status ${student.status}">${statusLabel(student.status)}</span></td>
            <td>${new Date(`${student.lastCheckin}T12:00:00`).toLocaleDateString("pt-BR")}</td>
            <td><button class="ghost-button" type="button" data-action="edit-student" data-student-id="${student.id}">Editar</button></td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function measurementInputs(student = {}) {
  const current = student.measurements || {};
  return `
    <label>Altura (cm)<input name="height" type="number" min="0" step="0.1" value="${current.height || ""}" placeholder="175" /></label>
    <label>Peso (kg)<input name="weight" type="number" min="0" step="0.1" value="${current.weight || student.weight || ""}" placeholder="72.5" /></label>
    <label>Peitoral (cm)<input name="chest" type="number" min="0" step="0.1" value="${current.chest || ""}" placeholder="98" /></label>
    <label>Cintura (cm)<input name="waist" type="number" min="0" step="0.1" value="${current.waist || ""}" placeholder="82" /></label>
    <label>Abdomen (cm)<input name="abdomen" type="number" min="0" step="0.1" value="${current.abdomen || ""}" placeholder="86" /></label>
    <label>Quadril (cm)<input name="hip" type="number" min="0" step="0.1" value="${current.hip || ""}" placeholder="101" /></label>
    <label>Braco direito (cm)<input name="rightArm" type="number" min="0" step="0.1" value="${current.rightArm || ""}" placeholder="34" /></label>
    <label>Braco esquerdo (cm)<input name="leftArm" type="number" min="0" step="0.1" value="${current.leftArm || ""}" placeholder="33.5" /></label>
    <label>Coxa direita (cm)<input name="rightThigh" type="number" min="0" step="0.1" value="${current.rightThigh || ""}" placeholder="58" /></label>
    <label>Coxa esquerda (cm)<input name="leftThigh" type="number" min="0" step="0.1" value="${current.leftThigh || ""}" placeholder="57.5" /></label>
    <label>Panturrilha (cm)<input name="calf" type="number" min="0" step="0.1" value="${current.calf || ""}" placeholder="38" /></label>
    <label>Gordura corporal (%)<input name="bodyFat" type="number" min="0" step="0.1" value="${current.bodyFat || ""}" placeholder="22" /></label>
  `;
}

function readMeasurements(form) {
  return {
    height: Number(form.get("height")) || 0,
    weight: Number(form.get("weight")) || 0,
    chest: Number(form.get("chest")) || 0,
    waist: Number(form.get("waist")) || 0,
    abdomen: Number(form.get("abdomen")) || 0,
    hip: Number(form.get("hip")) || 0,
    rightArm: Number(form.get("rightArm")) || 0,
    leftArm: Number(form.get("leftArm")) || 0,
    rightThigh: Number(form.get("rightThigh")) || 0,
    leftThigh: Number(form.get("leftThigh")) || 0,
    calf: Number(form.get("calf")) || 0,
    bodyFat: Number(form.get("bodyFat")) || 0
  };
}

function renderEditStudentPanel() {
  const student = studentById(editingStudentId);
  if (!student) return "";
  return `
    <div class="panel">
      <div class="panel-header">
        <h3>Editar aluno e registrar avaliacao</h3>
        <button class="ghost-button" type="button" data-action="cancel-edit-student">Cancelar</button>
      </div>
      <div class="panel-body">
        <form id="edit-student-form" class="form-grid">
          <input type="hidden" name="studentId" value="${student.id}" />
          <label>Nome<input name="name" required value="${student.name}" /></label>
          <label>Email<input name="email" type="email" required value="${student.email}" /></label>
          <label>Telefone<input name="phone" value="${student.phone || ""}" /></label>
          <label>Objetivo<input name="goal" required value="${student.goal}" /></label>
          <label>Plano
            <select name="plan">
              ${["Essencial", "Premium", "Consultoria"].map((plan) => `<option ${student.plan === plan ? "selected" : ""}>${plan}</option>`).join("")}
            </select>
          </label>
          <label>Status
            <select name="status">
              <option value="active" ${student.status === "active" ? "selected" : ""}>Ativo</option>
              <option value="attention" ${student.status === "attention" ? "selected" : ""}>Atencao</option>
              <option value="paused" ${student.status === "paused" ? "selected" : ""}>Pausado</option>
            </select>
          </label>
          <label>Adesao (%)<input name="adherence" type="number" min="0" max="100" step="1" value="${student.adherence || 0}" /></label>
          <label>Data da avaliacao<input name="assessmentDate" type="date" value="${todayISO()}" /></label>
          <div class="wide form-section-title">
            <strong>Nova avaliacao fisica</strong>
            <span>Ao salvar, estas medidas viram as medidas atuais e entram no historico de evolucao.</span>
          </div>
          ${measurementInputs(student)}
          <label class="wide">Observacoes<textarea name="notes">${student.notes || ""}</textarea></label>
          <button class="primary-button wide" type="submit">Salvar avaliacao</button>
        </form>
      </div>
    </div>
  `;
}

function renderStudents() {
  return `
    <div class="content-grid">
      <div class="panel">
        <div class="panel-header"><h3>Novo aluno</h3></div>
        <div class="panel-body">
          <form id="student-form" class="form-grid">
            <label>Nome<input name="name" required placeholder="Nome completo" /></label>
            <label>Email<input name="email" type="email" required placeholder="aluno@email.com" /></label>
            <label>Telefone<input name="phone" placeholder="(82) 99999-9999" /></label>
            <label>Objetivo<input name="goal" required placeholder="Hipertrofia, emagrecimento..." /></label>
            <label>Plano
              <select name="plan"><option>Essencial</option><option>Premium</option><option>Consultoria</option></select>
            </label>
            <label>Status
              <select name="status"><option value="active">Ativo</option><option value="attention">Atencao</option><option value="paused">Pausado</option></select>
            </label>
            <div class="wide form-section-title">
              <strong>Medidas corporais</strong>
              <span>Preencha em centimetros, quilos e percentual quando aplicavel.</span>
            </div>
            ${measurementInputs()}
            <label class="wide">Observacoes<textarea name="notes" placeholder="Restricoes, preferencias e pontos de atencao"></textarea></label>
            <button class="primary-button wide" type="submit">Cadastrar aluno</button>
          </form>
        </div>
      </div>
      <div class="panel">
        <div class="panel-header"><h3>Resumo da carteira</h3></div>
        <div class="panel-body chart">
          ${state.students.map((student) => chartRow(student.name.split(" ")[0], student.adherence)).join("")}
        </div>
      </div>
    </div>
    ${renderEditStudentPanel()}
    <div class="panel">
      <div class="panel-header">
        <h3>Alunos cadastrados</h3>
        <input id="student-search" placeholder="Buscar aluno" />
      </div>
      <div class="table-wrap" id="students-table">${studentsTable(state.students)}</div>
    </div>
  `;
}

function renderWorkoutManager() {
  return `
    <div class="panel">
      <div class="panel-header"><h3>Novo treino</h3></div>
      <div class="panel-body">
        <form id="workout-form" class="form-grid">
          <label>Aluno
            <select name="studentId" required>
              ${state.students.map((student) => `<option value="${student.id}">${student.name}</option>`).join("")}
            </select>
          </label>
          <label>Nome do treino<input name="name" required placeholder="Treino A - Superiores" /></label>
          <label>Foco<input name="focus" required placeholder="Forca, hipertrofia, mobilidade..." /></label>
          <label>Frequencia<input name="frequency" required placeholder="3x por semana" /></label>
          <div class="wide exercise-builder">
            <div class="toolbar">
              <strong>Exercicios</strong>
              <button class="ghost-button" type="button" data-action="add-exercise">Adicionar exercicio</button>
            </div>
            <div id="exercise-rows">
              ${exerciseRow()}
              ${exerciseRow()}
            </div>
          </div>
          <button class="primary-button wide" type="submit">Salvar treino</button>
        </form>
      </div>
    </div>
    <div class="panel">
      <div class="panel-header"><h3>Treinos publicados</h3></div>
      <div class="panel-body cards-grid">
        ${renderWorkoutCards(state.workouts)}
      </div>
    </div>
  `;
}

function exerciseRow() {
  return `
    <div class="exercise-row">
      <label>Exercicio<input name="exerciseName" placeholder="Supino reto" /></label>
      <label>Series<input name="sets" placeholder="4" /></label>
      <label>Reps<input name="reps" placeholder="8-10" /></label>
      <label>Carga/obs.<input name="load" placeholder="60 kg" /></label>
      <button class="icon-button" type="button" title="Remover exercicio" data-action="remove-exercise">×</button>
    </div>
  `;
}

function renderWorkoutCards(workouts) {
  if (!workouts.length) return `<div class="empty-state">Nenhum treino cadastrado ainda.</div>`;
  return workouts.map((workout) => {
    const student = studentById(workout.studentId);
    return `
      <article class="item-card">
        <div>
          <h4>${workout.name}</h4>
          <p>${student?.name || "Aluno removido"}</p>
        </div>
        <div class="meta-list">
          <span>${workout.focus}</span>
          <span>${workout.frequency}</span>
        </div>
        <ul class="exercise-list">
          ${workout.exercises.map((exercise) => `<li><span>${exercise.name}</span><strong>${exerciseSummary(exercise)}</strong></li>`).join("")}
        </ul>
      </article>
    `;
  }).join("");
}

function exerciseSummary(exercise) {
  const parts = [];
  if (exercise.sets) parts.push(`${exercise.sets} series`);
  if (exercise.reps) parts.push(`${exercise.reps} reps`);
  if (exercise.load) parts.push(exercise.load);
  return parts.length ? parts.join(" • ") : "A definir";
}

function renderCheckins() {
  return `
    <div class="panel">
      <div class="panel-header"><h3>Ultimos retornos</h3></div>
      <div class="panel-body cards-grid">
        ${state.checkins.map((checkin) => {
          const student = studentById(checkin.studentId);
          return `
            <article class="item-card">
              <div class="student-cell"><div class="avatar">${initials(student?.name || "Aluno")}</div>${student?.name || "Aluno"}</div>
              <div class="meta-list"><span>${new Date(`${checkin.date}T12:00:00`).toLocaleDateString("pt-BR")}</span><span>${checkin.mood}</span></div>
              <p>${checkin.message}</p>
            </article>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function renderProfile(user) {
  const linkedStudent = user.studentId ? studentById(user.studentId) : null;
  return `
    <div class="content-grid">
      <div class="panel">
        <div class="panel-header"><h3>Dados do perfil</h3></div>
        <div class="panel-body">
          <form id="profile-form" class="form-grid">
            <label>Nome
              <input name="name" required value="${user.name}" />
            </label>
            <label>Email
              <input name="email" type="email" required value="${user.email}" />
            </label>
            <div class="wide form-section-title">
              <strong>Seguranca</strong>
              <span>Informe a senha atual para confirmar alteracoes. Para manter a senha, deixe os novos campos em branco.</span>
            </div>
            <label class="wide">Senha atual
              <input name="currentPassword" type="password" autocomplete="current-password" required />
            </label>
            <label>Nova senha
              <input name="newPassword" type="password" autocomplete="new-password" minlength="6" placeholder="Minimo 6 caracteres" />
            </label>
            <label>Confirmar nova senha
              <input name="confirmPassword" type="password" autocomplete="new-password" minlength="6" placeholder="Repita a nova senha" />
            </label>
            <p class="error-text wide" id="profile-error"></p>
            <button class="primary-button wide" type="submit">Salvar alteracoes</button>
          </form>
        </div>
      </div>
      <div class="panel">
        <div class="panel-header"><h3>Resumo da conta</h3></div>
        <div class="panel-body profile-summary">
          ${user.role === "trainer" ? `<img src="assets/paulo-portrait.jpeg" alt="Paulo Hilário" />` : `<div class="profile-initials">${initials(user.name)}</div>`}
          <div>
            <h4>${user.name}</h4>
            <p>${user.email}</p>
          </div>
          <div class="meta-list">
            <span>${user.role === "trainer" ? "Personal" : "Aluno"}</span>
            ${linkedStudent ? `<span>${linkedStudent.plan}</span><span>${linkedStudent.goal}</span>` : `<span>Administrador</span>`}
          </div>
        </div>
      </div>
    </div>
    ${user.role === "trainer" ? renderTrainerTemplateHub() : ""}
    ${linkedStudent ? renderStudentTrainingHub(linkedStudent) : ""}
  `;
}

function renderTrainerTemplateHub() {
  return `
    <div class="content-grid">
      <div class="panel">
        <div class="panel-header"><h3>Biblioteca de treinos modelo</h3></div>
        <div class="panel-body">
          <form id="template-form" class="form-grid">
            <label>Nome do modelo<input name="templateName" required placeholder="Modelo Hipertrofia - Superiores" /></label>
            <label>Foco<input name="templateFocus" required placeholder="Hipertrofia, forca, emagrecimento..." /></label>
            <label class="wide">Frequencia sugerida<input name="templateFrequency" required placeholder="3x por semana" /></label>
            <div class="wide exercise-builder">
              <div class="toolbar">
                <strong>Exercicios do modelo</strong>
                <button class="ghost-button" type="button" data-action="add-template-exercise">Adicionar exercicio</button>
              </div>
              <div id="template-exercise-rows">
                ${templateExerciseRow()}
                ${templateExerciseRow()}
              </div>
            </div>
            <button class="primary-button wide" type="submit">Salvar modelo de treino</button>
          </form>
        </div>
      </div>
      <div class="panel">
        <div class="panel-header"><h3>Atribuir modelo ao aluno</h3></div>
        <div class="panel-body">
          <form id="assign-template-form" class="form-grid">
            <label class="wide">Modelo
              <select name="templateId" required>
                ${state.workoutTemplates.map((template) => `<option value="${template.id}">${template.name}</option>`).join("")}
              </select>
            </label>
            <label class="wide">Aluno
              <select name="studentId" required>
                ${state.students.map((student) => `<option value="${student.id}">${student.name}</option>`).join("")}
              </select>
            </label>
            <button class="primary-button wide" type="submit">Atribuir treino ao aluno</button>
          </form>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-header"><h3>Modelos cadastrados</h3></div>
      <div class="panel-body cards-grid">
        ${renderTemplateCards()}
      </div>
    </div>
  `;
}

function templateExerciseRow() {
  return `
    <div class="template-row">
      <label>Exercicio<input name="templateExerciseName" placeholder="Supino reto" /></label>
      <label>Series<input name="templateSets" placeholder="4" /></label>
      <button class="icon-button" type="button" title="Remover exercicio" data-action="remove-template-exercise">×</button>
    </div>
  `;
}

function renderTemplateCards() {
  if (!state.workoutTemplates.length) return `<div class="empty-state">Nenhum modelo cadastrado ainda.</div>`;
  return state.workoutTemplates.map((template) => `
    <article class="item-card">
      <div>
        <h4>${template.name}</h4>
        <p>${template.focus}</p>
      </div>
      <div class="meta-list">
        <span>${template.frequency}</span>
        <span>${template.exercises.length} exercicios</span>
      </div>
      <ul class="exercise-list">
        ${template.exercises.map((exercise) => `<li><span>${exercise.name}</span><strong>${exercise.sets || "-"} series</strong></li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function renderStudentTrainingHub(student) {
  const today = todayISO();
  const workout = workoutForDate(student.id, today);
  const selectedLog = state.trainingLogs.find((log) => log.studentId === student.id && log.date === selectedTrainingDate && log.completedExercises?.length);
  const selectedWorkout = selectedLog ? workoutById(selectedLog.workoutId) : workoutForDate(student.id, selectedTrainingDate);
  return `
    <div class="content-grid">
      <div class="panel">
        <div class="panel-header">
          <h3>Treino do dia</h3>
          <button class="primary-button" type="button" data-action="open-today-workout">Abrir treino do dia</button>
        </div>
        <div class="panel-body">
          ${workout ? renderDailyWorkoutChecklist(student, workout, today) : `<div class="empty-state">Nenhum treino publicado para hoje.</div>`}
        </div>
      </div>
      <div class="panel">
        <div class="panel-header"><h3>Calendario de treinos</h3></div>
        <div class="panel-body">
          ${renderTrainingCalendar(student)}
          <div class="training-day-detail">
            <h4>${formatDateBR(selectedTrainingDate)}</h4>
            ${selectedWorkout && selectedLog?.completedExercises?.length
              ? `<p>${selectedWorkout.name}</p><span>${selectedLog.completedExercises.length} exercicio(s) concluidos</span>`
              : `<p>Nenhum treino registrado neste dia.</p>`}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDailyWorkoutChecklist(student, workout, date) {
  const log = trainingLogFor(student.id, date, workout.id);
  const completed = log?.completedExercises || [];
  const total = workout.exercises.length;
  return `
    <div class="daily-workout">
      <div>
        <h4>${workout.name}</h4>
        <p>${workout.focus} • ${workout.frequency}</p>
      </div>
      <div class="progress-bar daily-progress"><span style="--value:${total ? Math.round((completed.length / total) * 100) : 0}%"></span></div>
      <div class="check-list">
        ${workout.exercises.map((exercise, index) => `
          <label class="check-item">
            <input
              type="checkbox"
              class="exercise-check"
              data-student-id="${student.id}"
              data-workout-id="${workout.id}"
              data-date="${date}"
              data-exercise-index="${index}"
              ${completed.includes(index) ? "checked" : ""}
            />
            <span><strong>${exercise.name}</strong><small>${exerciseSummary(exercise)}</small></span>
          </label>
        `).join("")}
      </div>
    </div>
  `;
}

function renderTrainingCalendar(student) {
  const baseDate = new Date(`${selectedTrainingDate}T12:00:00`);
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const trainedDates = new Set(
    state.trainingLogs
      .filter((log) => log.studentId === student.id && log.completedExercises?.length)
      .map((log) => log.date)
  );
  const blanks = Array.from({ length: firstDay.getDay() }, () => `<span class="calendar-empty"></span>`);
  const days = Array.from({ length: lastDay.getDate() }, (_, index) => {
    const day = index + 1;
    const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return `
      <button
        type="button"
        class="${date === selectedTrainingDate ? "selected" : ""} ${trainedDates.has(date) ? "trained" : ""}"
        data-action="select-training-day"
        data-date="${date}"
      >${day}</button>
    `;
  });
  return `
    <div class="calendar-head">
      <button type="button" class="icon-button" data-action="select-training-day" data-date="${calendarMonthDate(year, month - 1)}">‹</button>
      <strong>${baseDate.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}</strong>
      <button type="button" class="icon-button" data-action="select-training-day" data-date="${calendarMonthDate(year, month + 1)}">›</button>
    </div>
    <div class="training-calendar">
      ${["D", "S", "T", "Q", "Q", "S", "S"].map((day) => `<b>${day}</b>`).join("")}
      ${blanks.join("")}
      ${days.join("")}
    </div>
  `;
}

function calendarMonthDate(year, monthIndex) {
  const date = new Date(year, monthIndex, 1);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-01`;
}

function renderStudentView(user) {
  const student = studentById(user.studentId);
  const workouts = state.workouts.filter((workout) => workout.studentId === student.id);
  if (currentView === "workouts") return renderStudentWorkouts(workouts);
  if (currentView === "progress") return renderStudentProgress(student);
  return `
    <div class="student-hero">
      <h2>${student.name}, seu proximo treino esta pronto.</h2>
      <p>Meta atual: ${student.goal}. Adesao registrada em ${student.adherence}%.</p>
    </div>
    <div class="stats-grid">
      ${stat("Adesao", `${student.adherence}%`, "Ultimos 7 dias")}
      ${stat("Peso atual", `${student.weight} kg`, "Registrado no check-in")}
      ${stat("Treinos ativos", workouts.length, "Publicados pelo personal")}
      ${stat("Plano", student.plan, "Acompanhamento ativo")}
    </div>
    <div class="content-grid">
      <div class="panel">
        <div class="panel-header"><h3>Treino de hoje</h3></div>
        <div class="panel-body cards-grid">${renderWorkoutCards(workouts.slice(0, 1))}</div>
      </div>
      <div class="panel">
        <div class="panel-header"><h3>Enviar check-in</h3></div>
        <div class="panel-body">${checkinForm()}</div>
      </div>
    </div>
  `;
}

function renderStudentWorkouts(workouts) {
  return `
    <div class="panel">
      <div class="panel-header"><h3>Meus treinos</h3></div>
      <div class="panel-body cards-grid">${renderWorkoutCards(workouts)}</div>
    </div>
  `;
}

function renderStudentProgress(student) {
  return `
    <div class="content-grid">
      <div class="panel">
        <div class="panel-header"><h3>Progresso</h3></div>
        <div class="panel-body chart">
          ${chartRow("Adesao", student.adherence)}
          ${chartRow("Sono", 78)}
          ${chartRow("Energia", 86)}
          ${chartRow("Carga", 74)}
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <h3>Minhas medidas</h3>
          <button class="ghost-button" type="button" data-action="export-evolution-pdf" data-student-id="${student.id}">Exportar PDF</button>
        </div>
        <div class="panel-body">
          ${measurementsPanel(student)}
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-header"><h3>Checklist da semana</h3></div>
      <div class="panel-body check-list">
        ${["Completar treinos prescritos", "Registrar cargas principais", "Enviar check-in", "Beber agua conforme meta"].map((item, index) => `
          <label class="check-item"><input type="checkbox" ${index < 2 ? "checked" : ""} /><span>${item}</span></label>
        `).join("")}
      </div>
    </div>
  `;
}

function measurementsPanel(student) {
  const labels = [
    ["height", "Altura", "cm"],
    ["weight", "Peso", "kg"],
    ["chest", "Peitoral", "cm"],
    ["waist", "Cintura", "cm"],
    ["abdomen", "Abdomen", "cm"],
    ["hip", "Quadril", "cm"],
    ["rightArm", "Braco dir.", "cm"],
    ["leftArm", "Braco esq.", "cm"],
    ["rightThigh", "Coxa dir.", "cm"],
    ["leftThigh", "Coxa esq.", "cm"],
    ["calf", "Panturrilha", "cm"],
    ["bodyFat", "Gordura", "%"]
  ];
  return `
    <div class="measure-grid full">
      ${labels.map(([key, label, unit]) => `
        <div><span>${label}</span><strong>${measurement(student, key) || "-"}${measurement(student, key) ? ` ${unit}` : ""}</strong></div>
      `).join("")}
    </div>
  `;
}

function checkinForm() {
  return `
    <form id="checkin-form" class="form-grid">
      <label class="wide">Como voce esta?
        <select name="mood"><option>Alta energia</option><option>Normal</option><option>Cansado</option><option>Com dor</option></select>
      </label>
      <label class="wide">Mensagem para o personal
        <textarea name="message" required placeholder="Conte como foram os treinos, cargas e dificuldades"></textarea>
      </label>
      <button class="primary-button wide" type="submit">Enviar check-in</button>
    </form>
  `;
}

function evolutionSummary(student) {
  return [
    ["Peso", `${measurement(student, "weight")} kg`, formatDelta(measurementDelta(student, "weight"), " kg")],
    ["Cintura", `${measurement(student, "waist")} cm`, formatDelta(measurementDelta(student, "waist"), " cm")],
    ["Quadril", `${measurement(student, "hip")} cm`, formatDelta(measurementDelta(student, "hip"), " cm")],
    ["Gordura corporal", `${measurement(student, "bodyFat")}%`, formatDelta(measurementDelta(student, "bodyFat"), "%")]
  ];
}

function reportMeasureRows(student) {
  const labels = [
    ["height", "Altura", "cm"],
    ["weight", "Peso", "kg"],
    ["chest", "Peitoral", "cm"],
    ["waist", "Cintura", "cm"],
    ["abdomen", "Abdomen", "cm"],
    ["hip", "Quadril", "cm"],
    ["rightArm", "Braco direito", "cm"],
    ["leftArm", "Braco esquerdo", "cm"],
    ["rightThigh", "Coxa direita", "cm"],
    ["leftThigh", "Coxa esquerda", "cm"],
    ["calf", "Panturrilha", "cm"],
    ["bodyFat", "Gordura corporal", "%"]
  ];
  return labels.map(([key, label, unit]) => {
    const value = measurement(student, key);
    return `<tr><td>${label}</td><td>${value ? `${value} ${unit}` : "-"}</td></tr>`;
  }).join("");
}

function buildEvolutionReport(student) {
  const history = student.measurementHistory || [];
  return `
    <!doctype html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <title>Evolucao - ${student.name}</title>
        <style>
          * { box-sizing: border-box; }
          body { margin: 0; padding: 34px; color: #18211f; font-family: Arial, sans-serif; background: #f6f3ee; }
          .page { max-width: 920px; margin: 0 auto; background: #fffdf8; padding: 34px; border: 1px solid #ddd8cf; }
          header { display: flex; justify-content: space-between; gap: 24px; border-bottom: 3px solid #0d7c66; padding-bottom: 22px; }
          h1 { margin: 0; font-size: 32px; }
          h2 { margin: 28px 0 12px; font-size: 18px; }
          p { color: #66736f; line-height: 1.5; }
          .badge { display: inline-block; padding: 8px 10px; border-radius: 6px; background: #e7f1ee; color: #085745; font-weight: 700; }
          .summary { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 24px; }
          .metric { border: 1px solid #ddd8cf; padding: 14px; border-radius: 8px; background: #f0eee7; }
          .metric span { display: block; color: #66736f; font-size: 12px; font-weight: 700; text-transform: uppercase; }
          .metric strong { display: block; margin: 8px 0 4px; font-size: 24px; }
          .metric small { color: #085745; font-weight: 700; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          th, td { border-bottom: 1px solid #ddd8cf; padding: 10px; text-align: left; }
          th { background: #f0eee7; color: #66736f; font-size: 12px; text-transform: uppercase; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
          .footer { margin-top: 28px; color: #66736f; font-size: 12px; }
          .actions { margin: 0 auto 18px; max-width: 920px; display: flex; justify-content: flex-end; gap: 10px; }
          button { border: 0; border-radius: 8px; padding: 12px 16px; background: #0d7c66; color: white; font-weight: 700; cursor: pointer; }
          @media print {
            body { background: white; padding: 0; }
            .page { border: 0; max-width: none; }
            .actions { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="actions"><button onclick="window.print()">Salvar como PDF</button></div>
        <main class="page">
          <header>
            <div>
              <span class="badge">Paulo Hilário Trainer</span>
              <h1>Relatorio de evolucao</h1>
              <p>${student.name} • ${student.goal} • Plano ${student.plan}</p>
            </div>
            <div>
              <p><strong>Gerado em</strong><br>${todayBR()}</p>
              <p><strong>Ultimo check-in</strong><br>${formatDateBR(student.lastCheckin)}</p>
            </div>
          </header>
          <section class="summary">
            ${evolutionSummary(student).map(([label, value, delta]) => `
              <div class="metric"><span>${label}</span><strong>${value}</strong><small>${delta}</small></div>
            `).join("")}
          </section>
          <section class="grid">
            <div>
              <h2>Medidas atuais</h2>
              <table><tbody>${reportMeasureRows(student)}</tbody></table>
            </div>
            <div>
              <h2>Historico principal</h2>
              <table>
                <thead><tr><th>Data</th><th>Peso</th><th>Cintura</th><th>Gordura</th></tr></thead>
                <tbody>
                  ${history.map((entry) => `
                    <tr>
                      <td>${formatDateBR(entry.date)}</td>
                      <td>${entry.weight || "-"} kg</td>
                      <td>${entry.waist || "-"} cm</td>
                      <td>${entry.bodyFat || "-"}%</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
              <h2>Observacoes</h2>
              <p>${student.notes || "Sem observacoes registradas."}</p>
            </div>
          </section>
          <p class="footer">Relatorio gerado a partir dos dados cadastrados no sistema. Use a janela de impressao para escolher "Salvar como PDF".</p>
        </main>
      </body>
    </html>
  `;
}

function renderEvolutionReportView(studentId) {
  const student = studentById(studentId);
  if (!student) return `<div class="empty-state">Aluno nao encontrado.</div>`;
  const history = student.measurementHistory || [];
  return `
    <div class="report-actions no-print">
      <button class="ghost-button" type="button" data-action="back-from-report">Voltar</button>
      <button class="primary-button" type="button" data-action="print-report">Salvar PDF</button>
    </div>
    <article class="print-report">
      <header class="report-header">
        <div>
          <span class="report-badge">Paulo Hilário Trainer</span>
          <h1>Relatorio de evolucao</h1>
          <p>${student.name} • ${student.goal} • Plano ${student.plan}</p>
        </div>
        <div class="report-coach">
          <img src="assets/paulo-portrait.jpeg" alt="Paulo Hilário" />
          <p><strong>Gerado em</strong><br>${todayBR()}</p>
          <p><strong>Ultimo check-in</strong><br>${formatDateBR(student.lastCheckin)}</p>
        </div>
      </header>
      <section class="report-summary">
        ${evolutionSummary(student).map(([label, value, delta]) => `
          <div class="metric"><span>${label}</span><strong>${value}</strong><small>${delta}</small></div>
        `).join("")}
      </section>
      <section class="report-grid">
        <div>
          <h2>Medidas atuais</h2>
          <table><tbody>${reportMeasureRows(student)}</tbody></table>
        </div>
        <div>
          <h2>Historico principal</h2>
          <table>
            <thead><tr><th>Data</th><th>Peso</th><th>Cintura</th><th>Gordura</th></tr></thead>
            <tbody>
              ${history.map((entry) => `
                <tr>
                  <td>${formatDateBR(entry.date)}</td>
                  <td>${entry.weight || "-"} kg</td>
                  <td>${entry.waist || "-"} cm</td>
                  <td>${entry.bodyFat || "-"}%</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
          <h2>Observacoes</h2>
          <p>${student.notes || "Sem observacoes registradas."}</p>
        </div>
      </section>
      <p class="report-footer">Relatorio gerado a partir dos dados cadastrados no sistema.</p>
    </article>
  `;
}

function exportEvolutionPdf(studentId) {
  const student = studentById(studentId);
  if (!student) {
    toast("Aluno nao encontrado para exportacao.");
    return;
  }
  reportStudentId = student.id;
  currentView = "report";
  render();
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.dataset.view) {
    currentView = target.dataset.view;
    render();
  }

  if (target.dataset.demo) {
    const user = state.users.find((item) => item.email === target.dataset.demo);
    setSession(user);
  }

  if (target.dataset.action === "logout") {
    localStorage.removeItem("pulsefit-session");
    session = null;
    render();
  }

  if (target.dataset.action === "edit-student") {
    editingStudentId = target.dataset.studentId;
    render();
  }

  if (target.dataset.action === "cancel-edit-student") {
    editingStudentId = null;
    render();
  }

  if (target.dataset.action === "add-exercise") {
    document.querySelector("#exercise-rows").insertAdjacentHTML("beforeend", exerciseRow());
  }

  if (target.dataset.action === "add-template-exercise") {
    document.querySelector("#template-exercise-rows").insertAdjacentHTML("beforeend", templateExerciseRow());
  }

  if (target.dataset.action === "remove-exercise") {
    const rows = document.querySelectorAll(".exercise-row");
    if (rows.length > 1) target.closest(".exercise-row").remove();
  }

  if (target.dataset.action === "remove-template-exercise") {
    const rows = document.querySelectorAll(".template-row");
    if (rows.length > 1) target.closest(".template-row").remove();
  }

  if (target.dataset.action === "export-evolution-pdf") {
    exportEvolutionPdf(target.dataset.studentId);
  }

  if (target.dataset.action === "print-report") {
    window.print();
  }

  if (target.dataset.action === "back-from-report") {
    currentView = currentUser()?.role === "student" ? "progress" : "dashboard";
    render();
  }

  if (target.dataset.action === "open-today-workout") {
    selectedTrainingDate = todayISO();
    render();
  }

  if (target.dataset.action === "select-training-day") {
    selectedTrainingDate = target.dataset.date;
    render();
  }
});

document.addEventListener("submit", (event) => {
  event.preventDefault();

  if (event.target.id === "login-form") {
    const form = new FormData(event.target);
    const email = form.get("email").trim().toLowerCase();
    const password = form.get("password");
    const user = state.users.find((item) => item.email.toLowerCase() === email && item.password === password);
    if (!user) {
      document.querySelector("#login-error").textContent = "Email ou senha invalidos.";
      return;
    }
    setSession(user);
  }

  if (event.target.id === "student-form") {
    const form = new FormData(event.target);
    const id = `stu-${Date.now()}`;
    const measurements = readMeasurements(form);
    const student = {
      id,
      name: form.get("name").trim(),
      email: form.get("email").trim(),
      phone: form.get("phone").trim(),
      goal: form.get("goal").trim(),
      plan: form.get("plan"),
      status: form.get("status"),
      adherence: 0,
      weight: measurements.weight,
      measurements,
      measurementHistory: [
        {
          date: new Date().toISOString().slice(0, 10),
          weight: measurements.weight,
          waist: measurements.waist,
          hip: measurements.hip,
          bodyFat: measurements.bodyFat
        }
      ],
      lastCheckin: new Date().toISOString().slice(0, 10),
      notes: form.get("notes").trim()
    };
    state.students.push(student);
    state.users.push({ id: `user-${id}`, role: "student", name: student.name, email: student.email, password: "123456", studentId: id, mustChangePassword: true });
    saveData();
    toast("Aluno cadastrado. Login criado com senha 123456.");
    render();
  }

  if (event.target.id === "edit-student-form") {
    const form = new FormData(event.target);
    const student = studentById(form.get("studentId"));
    if (!student) {
      toast("Aluno nao encontrado.");
      return;
    }

    const email = form.get("email").trim().toLowerCase();
    const linkedUser = state.users.find((user) => user.studentId === student.id);
    if (state.users.some((user) => user.id !== linkedUser?.id && user.email.toLowerCase() === email)) {
      toast("Este email ja esta em uso por outra conta.");
      return;
    }

    const measurements = readMeasurements(form);
    const assessmentDate = form.get("assessmentDate") || todayISO();
    student.name = form.get("name").trim();
    student.email = email;
    student.phone = form.get("phone").trim();
    student.goal = form.get("goal").trim();
    student.plan = form.get("plan");
    student.status = form.get("status");
    student.adherence = Number(form.get("adherence")) || 0;
    student.weight = measurements.weight;
    student.measurements = measurements;
    student.notes = form.get("notes").trim();
    student.lastCheckin = assessmentDate;
    student.measurementHistory = student.measurementHistory || [];
    student.measurementHistory.push({
      date: assessmentDate,
      weight: measurements.weight,
      waist: measurements.waist,
      hip: measurements.hip,
      bodyFat: measurements.bodyFat
    });

    if (linkedUser) {
      linkedUser.name = student.name;
      linkedUser.email = student.email;
    }

    editingStudentId = null;
    saveData();
    toast("Aluno atualizado e avaliacao registrada.");
    render();
  }

  if (event.target.id === "workout-form") {
    const form = new FormData(event.target);
    const names = form.getAll("exerciseName");
    const sets = form.getAll("sets");
    const reps = form.getAll("reps");
    const loads = form.getAll("load");
    const exercises = names
      .map((name, index) => ({ name: name.trim(), sets: sets[index].trim(), reps: reps[index].trim(), load: loads[index].trim() }))
      .filter((exercise) => exercise.name);
    if (!exercises.length) {
      toast("Adicione pelo menos um exercicio.");
      return;
    }
    state.workouts.unshift({
      id: `work-${Date.now()}`,
      studentId: form.get("studentId"),
      name: form.get("name").trim(),
      focus: form.get("focus").trim(),
      frequency: form.get("frequency").trim(),
      createdAt: new Date().toISOString().slice(0, 10),
      exercises
    });
    saveData();
    toast("Treino salvo e publicado para o aluno.");
    render();
  }

  if (event.target.id === "template-form") {
    const form = new FormData(event.target);
    const names = form.getAll("templateExerciseName");
    const sets = form.getAll("templateSets");
    const exercises = names
      .map((name, index) => ({ name: name.trim(), sets: sets[index].trim(), reps: "", load: "" }))
      .filter((exercise) => exercise.name);

    if (!exercises.length) {
      toast("Adicione pelo menos um exercicio ao modelo.");
      return;
    }

    state.workoutTemplates.unshift({
      id: `tpl-${Date.now()}`,
      name: form.get("templateName").trim(),
      focus: form.get("templateFocus").trim(),
      frequency: form.get("templateFrequency").trim(),
      exercises
    });
    saveData();
    toast("Modelo de treino salvo.");
    render();
  }

  if (event.target.id === "assign-template-form") {
    const form = new FormData(event.target);
    const template = state.workoutTemplates.find((item) => item.id === form.get("templateId"));
    const student = studentById(form.get("studentId"));
    if (!template || !student) {
      toast("Modelo ou aluno nao encontrado.");
      return;
    }

    state.workouts.unshift({
      id: `work-${Date.now()}`,
      studentId: student.id,
      name: template.name,
      focus: template.focus,
      frequency: template.frequency,
      createdAt: new Date().toISOString().slice(0, 10),
      templateId: template.id,
      exercises: template.exercises.map((exercise) => ({
        name: exercise.name,
        sets: exercise.sets || "",
        reps: "",
        load: ""
      }))
    });
    saveData();
    toast(`Treino atribuido para ${student.name}.`);
    render();
  }

  if (event.target.id === "first-access-form") {
    const user = currentUser();
    const form = new FormData(event.target);
    const newPassword = form.get("newPassword");
    const confirmPassword = form.get("confirmPassword");
    const error = document.querySelector("#first-access-error");

    if (newPassword.length < 6) {
      error.textContent = "A nova senha precisa ter pelo menos 6 caracteres.";
      return;
    }

    if (newPassword === "123456") {
      error.textContent = "Escolha uma senha diferente da senha inicial.";
      return;
    }

    if (newPassword !== confirmPassword) {
      error.textContent = "A confirmacao da nova senha nao confere.";
      return;
    }

    user.password = newPassword;
    user.mustChangePassword = false;
    saveData();
    toast("Senha alterada com sucesso.");
    render();
  }

  if (event.target.id === "checkin-form") {
    const user = currentUser();
    const form = new FormData(event.target);
    state.checkins.unshift({
      id: `chk-${Date.now()}`,
      studentId: user.studentId,
      date: new Date().toISOString().slice(0, 10),
      mood: form.get("mood"),
      message: form.get("message").trim()
    });
    const student = studentById(user.studentId);
    student.lastCheckin = new Date().toISOString().slice(0, 10);
    saveData();
    toast("Check-in enviado ao personal.");
    render();
  }

  if (event.target.id === "profile-form") {
    const user = currentUser();
    const form = new FormData(event.target);
    const name = form.get("name").trim();
    const email = form.get("email").trim().toLowerCase();
    const currentPassword = form.get("currentPassword");
    const newPassword = form.get("newPassword");
    const confirmPassword = form.get("confirmPassword");
    const error = document.querySelector("#profile-error");

    if (currentPassword !== user.password) {
      error.textContent = "Senha atual incorreta.";
      return;
    }

    if (state.users.some((item) => item.id !== user.id && item.email.toLowerCase() === email)) {
      error.textContent = "Este email ja esta em uso por outra conta.";
      return;
    }

    if (newPassword || confirmPassword) {
      if (newPassword.length < 6) {
        error.textContent = "A nova senha precisa ter pelo menos 6 caracteres.";
        return;
      }
      if (newPassword !== confirmPassword) {
        error.textContent = "A confirmacao da nova senha nao confere.";
        return;
      }
      user.password = newPassword;
      user.mustChangePassword = false;
    }

    user.name = name;
    user.email = email;

    if (user.studentId) {
      const student = studentById(user.studentId);
      if (student) {
        student.name = name;
        student.email = email;
      }
    }

    saveData();
    toast("Perfil atualizado com sucesso.");
    render();
  }
});

document.addEventListener("input", (event) => {
  if (event.target.id !== "student-search") return;
  const term = event.target.value.trim().toLowerCase();
  const filtered = state.students.filter((student) =>
    [student.name, student.email, student.goal, student.plan].some((value) => value.toLowerCase().includes(term))
  );
  document.querySelector("#students-table").innerHTML = studentsTable(filtered);
});

document.addEventListener("change", (event) => {
  if (!event.target.classList.contains("exercise-check")) return;
  const input = event.target;
  const exerciseIndex = Number(input.dataset.exerciseIndex);
  const log = ensureTrainingLog(input.dataset.studentId, input.dataset.date, input.dataset.workoutId);
  const completed = new Set(log.completedExercises || []);
  if (input.checked) {
    completed.add(exerciseIndex);
  } else {
    completed.delete(exerciseIndex);
  }
  log.completedExercises = [...completed].sort((a, b) => a - b);
  selectedTrainingDate = input.dataset.date;
  saveData();
  render();
});

render();
syncFromServer();
