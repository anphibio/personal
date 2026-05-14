const STORAGE_KEY = "pulsefit-coach-data";
const API_STATE_ENDPOINT = "/api/state";
const API_MEDIA_UPLOAD_ENDPOINT = "/api/upload-media";

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
      habits: ["Beber 2,5L de agua", "Dormir 7h+", "Bater proteina", "Alongamento pos-treino"],
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
      habits: ["Caminhada 20 min", "Beber 3L de agua", "Evitar ultraprocessados", "Dormir antes das 23h"],
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
      habits: ["Mobilidade 10 min", "Beber 2L de agua", "Registrar energia diaria", "Cardio leve 2x/semana"],
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
  weeklyCheckins: [
    {
      id: "wck-1",
      studentId: "stu-1",
      weekOf: "2026-05-11",
      energy: 5,
      recovery: 4,
      nutrition: 4,
      pain: 1,
      note: "Semana muito boa, aumentei carga no leg press."
    },
    {
      id: "wck-2",
      studentId: "stu-2",
      weekOf: "2026-05-05",
      energy: 3,
      recovery: 3,
      nutrition: 2,
      pain: 2,
      note: "Viajei e perdi ritmo no meio da semana."
    }
  ],
  habitLogs: [
    { id: "habit-1", studentId: "stu-1", date: "2026-05-11", completed: [0, 1, 2] },
    { id: "habit-2", studentId: "stu-1", date: "2026-05-12", completed: [0, 1, 2, 3] },
    { id: "habit-3", studentId: "stu-2", date: "2026-05-09", completed: [0, 1] }
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
let selectedTrainingWorkoutId = "";
let editingStudentId = null;
let editingWorkoutId = null;
let comparisonStudentId = null;
let comparisonMetric = "weight";
let comparisonFromDate = "";
let comparisonToDate = "";
let assessmentDashboardTab = "assessments";
let loadComparisonFromDate = "";
let loadComparisonToDate = "";
let loadExerciseFilter = "all";
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
    const rawHistory = hasUsefulHistory
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
    const measurementHistory = rawHistory.map((entry, index) => normalizeAssessmentEntry(entry, measurements, index));
    const habits = (student.habits && student.habits.length ? student.habits : seededStudent?.habits || defaultHabitsForGoal(student.goal)).slice(0, 6);
    return { ...student, weight: measurements.weight, measurements, measurementHistory, habits };
  });
  data.workouts = data.workouts || [];
  data.workoutTemplates = data.workoutTemplates || seedData.workoutTemplates || [];
  data.checkins = data.checkins || [];
  data.weeklyCheckins = data.weeklyCheckins || seedData.weeklyCheckins || [];
  data.habitLogs = data.habitLogs || seedData.habitLogs || [];
  data.trainingLogs = data.trainingLogs || [];
  return data;
}

function defaultHabitsForGoal(goal = "") {
  const normalized = goal.toLowerCase();
  if (normalized.includes("emag")) return ["Beber 3L de agua", "Caminhada 20 min", "Bater proteina", "Dormir 7h+"];
  if (normalized.includes("hiper")) return ["Bater proteina", "Dormir 7h+", "Beber 2,5L de agua", "Registrar cargas"];
  return ["Beber 2L de agua", "Dormir 7h+", "Mobilidade 10 min", "Registrar energia"];
}

function normalizeAssessmentEntry(entry, fallback = {}, index = 0) {
  return {
    date: entry.date || todayISO(),
    assessmentType: entry.assessmentType || defaultAssessmentType(index),
    height: Number(entry.height ?? fallback.height ?? 0),
    weight: Number(entry.weight ?? fallback.weight ?? 0),
    chest: Number(entry.chest ?? fallback.chest ?? 0),
    waist: Number(entry.waist ?? fallback.waist ?? 0),
    abdomen: Number(entry.abdomen ?? fallback.abdomen ?? 0),
    hip: Number(entry.hip ?? fallback.hip ?? 0),
    rightArm: Number(entry.rightArm ?? fallback.rightArm ?? 0),
    leftArm: Number(entry.leftArm ?? fallback.leftArm ?? 0),
    rightThigh: Number(entry.rightThigh ?? fallback.rightThigh ?? 0),
    leftThigh: Number(entry.leftThigh ?? fallback.leftThigh ?? 0),
    calf: Number(entry.calf ?? fallback.calf ?? 0),
    bodyFat: Number(entry.bodyFat ?? fallback.bodyFat ?? 0)
  };
}

function defaultAssessmentType(index = 0) {
  return index === 0 ? "Avaliacao fisica" : "Reavaliacao";
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

const metricOptions = [
  ["weight", "Peso", "kg"],
  ["waist", "Cintura", "cm"],
  ["abdomen", "Abdomen", "cm"],
  ["hip", "Quadril", "cm"],
  ["chest", "Peitoral", "cm"],
  ["rightArm", "Braco direito", "cm"],
  ["leftArm", "Braco esquerdo", "cm"],
  ["rightThigh", "Coxa direita", "cm"],
  ["leftThigh", "Coxa esquerda", "cm"],
  ["calf", "Panturrilha", "cm"],
  ["bodyFat", "Gordura corporal", "%"]
];

const assessmentTypeOptions = [
  "Avaliacao fisica",
  "Reavaliacao",
  "Checkpoint corporal",
  "Retorno mensal"
];

const assessmentChartMetricMap = {
  weight: ["Peso corporal", "kg"],
  bodyFat: ["% Gordura", "%"],
  leanMass: ["Massa magra", "kg"],
  fatMass: ["Massa gorda", "kg"],
  bmi: ["IMC", ""],
  rcq: ["RCQ", ""],
  chest: ["Torax", "cm"],
  waist: ["Cintura", "cm"],
  abdomen: ["Abdomen", "cm"],
  hip: ["Quadril", "cm"],
  rightArm: ["Braco direito", "cm"],
  leftArm: ["Braco esquerdo", "cm"],
  rightThigh: ["Coxa direita", "cm"],
  leftThigh: ["Coxa esquerda", "cm"],
  calf: ["Panturrilha", "cm"]
};

const assessmentChartSections = [
  {
    title: "Composicao corporal",
    metrics: ["weight", "bodyFat", "leanMass", "fatMass", "bmi", "rcq"]
  },
  {
    title: "Perimetria",
    metrics: ["chest", "waist", "abdomen", "hip", "rightArm", "leftArm", "rightThigh", "leftThigh", "calf"]
  }
];

function metricInfo(key) {
  return metricOptions.find(([value]) => value === key) || metricOptions[0];
}

function assessmentMetricInfo(key) {
  const mapped = assessmentChartMetricMap[key];
  if (mapped) return [key, mapped[0], mapped[1]];
  return metricInfo(key);
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

function selectedWorkoutForStudent(studentId, date = selectedTrainingDate) {
  const workouts = workoutsByStudent(studentId);
  if (!workouts.length) return null;
  const selected = workouts.find((workout) => workout.id === selectedTrainingWorkoutId);
  if (selected) return selected;
  const suggested = workoutForDate(studentId, date);
  if (suggested) {
    selectedTrainingWorkoutId = suggested.id;
    return suggested;
  }
  selectedTrainingWorkoutId = workouts[0].id;
  return workouts[0];
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

function habitLogFor(studentId, date) {
  return state.habitLogs.find((log) => log.studentId === studentId && log.date === date);
}

function ensureHabitLog(studentId, date) {
  let log = habitLogFor(studentId, date);
  if (!log) {
    log = { id: `habit-${Date.now()}`, studentId, date, completed: [] };
    state.habitLogs.push(log);
  }
  return log;
}

function weekStartISO(date = todayISO()) {
  const base = new Date(`${date}T12:00:00`);
  const day = base.getDay();
  const offset = day === 0 ? -6 : 1 - day;
  base.setDate(base.getDate() + offset);
  return `${base.getFullYear()}-${String(base.getMonth() + 1).padStart(2, "0")}-${String(base.getDate()).padStart(2, "0")}`;
}

function weeklyCheckinFor(studentId, weekOf = weekStartISO()) {
  return state.weeklyCheckins.find((checkin) => checkin.studentId === studentId && checkin.weekOf === weekOf);
}

function habitCompletionRate(student, days = 7) {
  const logs = state.habitLogs.filter((log) => log.studentId === student.id);
  if (!student.habits?.length || !logs.length) return 0;
  const recent = logs
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, days);
  const completed = recent.reduce((sum, log) => sum + (log.completed?.length || 0), 0);
  return Math.min(100, Math.round((completed / (recent.length * student.habits.length)) * 100));
}

function latestWeeklyCheckin(studentId) {
  return [...(state.weeklyCheckins || [])]
    .filter((checkin) => checkin.studentId === studentId)
    .sort((a, b) => b.weekOf.localeCompare(a.weekOf))[0];
}

function deleteStudentCascade(studentId) {
  const removedWorkoutIds = state.workouts.filter((workout) => workout.studentId === studentId).map((workout) => workout.id);
  state.students = state.students.filter((student) => student.id !== studentId);
  state.users = state.users.filter((user) => user.studentId !== studentId);
  state.workouts = state.workouts.filter((workout) => workout.studentId !== studentId);
  state.checkins = state.checkins.filter((checkin) => checkin.studentId !== studentId);
  state.weeklyCheckins = state.weeklyCheckins.filter((checkin) => checkin.studentId !== studentId);
  state.habitLogs = state.habitLogs.filter((log) => log.studentId !== studentId);
  state.trainingLogs = state.trainingLogs.filter((log) => log.studentId !== studentId);
  if (comparisonStudentId === studentId) comparisonStudentId = null;
  if (editingStudentId === studentId) editingStudentId = null;
  if (reportStudentId === studentId) reportStudentId = null;
  if (editingWorkoutId && removedWorkoutIds.includes(editingWorkoutId)) editingWorkoutId = null;
  if (selectedTrainingWorkoutId && removedWorkoutIds.includes(selectedTrainingWorkoutId)) selectedTrainingWorkoutId = "";
}

function resetStudentPassword(studentId) {
  const user = state.users.find((item) => item.studentId === studentId);
  if (!user) return false;
  user.password = "123456";
  user.mustChangePassword = true;
  return true;
}

function studentRiskLevel(student) {
  const habitRate = habitCompletionRate(student);
  const weekly = latestWeeklyCheckin(student.id);
  const lowRecovery = weekly && (Number(weekly.energy || 0) <= 2 || Number(weekly.recovery || 0) <= 2 || Number(weekly.nutrition || 0) <= 2);
  if (student.adherence < 65 || habitRate < 45 || lowRecovery) return { label: "Atencao", tone: "risk" };
  if (student.adherence < 80 || habitRate < 70) return { label: "Monitorar", tone: "watch" };
  return { label: "Estavel", tone: "good" };
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
          <form id="login-form" class="form-grid">
            <label class="wide">Email
              <input name="email" type="email" value="personal@paulohilario.com" autocomplete="email" required />
            </label>
            <label class="wide">Senha
              <input name="password" type="password" value="123456" autocomplete="current-password" required />
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
  const sortedStudents = [...state.students].sort((a, b) => b.adherence - a.adherence);
  const waistEvolution = Math.round(state.students.reduce((sum, student) => sum + measurementDelta(student, "waist"), 0) / total);
  const fatEvolution = (state.students.reduce((sum, student) => sum + measurementDelta(student, "bodyFat"), 0) / total).toFixed(1);
  const habitsRate = Math.round(state.students.reduce((sum, student) => sum + habitCompletionRate(student), 0) / total);
  const weeklyPending = state.students.filter((student) => !weeklyCheckinFor(student.id, weekStartISO())).length;
  return `
    <div class="stats-grid">
      ${stat("Alunos ativos", active, `${total} cadastrados`)}
      ${stat("Adesao media", `${adherence}%`, "+6% no mes")}
      ${stat("Habitos concluidos", `${habitsRate}%`, "Media dos ultimos dias")}
      ${stat("Check-ins pendentes", weeklyPending, "Semana atual")}
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
        <div class="panel-header"><h3>Adesao e habitos</h3></div>
        <div class="panel-body chart">
          ${state.students.map((student) => chartRow(student.name.split(" ")[0], Math.round((student.adherence + habitCompletionRate(student)) / 2))).join("")}
        </div>
      </div>
    </div>
    <div class="content-grid">
      <div class="panel">
        <div class="panel-header"><h3>Atencao da semana</h3></div>
        <div class="panel-body cards-grid">
          ${renderStudentRiskCards()}
        </div>
      </div>
      <div class="panel">
        <div class="panel-header"><h3>Panorama corporal</h3></div>
        <div class="panel-body chart">
          ${chartRow("Cintura media", Math.max(0, 100 + waistEvolution))}
          ${chartRow("Gordura corporal", Math.max(0, 100 + Number(fatEvolution)))}
          ${chartRow("Habitos", habitsRate)}
          ${chartRow("Check-ins da semana", Math.max(0, Math.round(((total - weeklyPending) / Math.max(total, 1)) * 100)))}
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
    ${renderPhysicalAssessmentDashboard()}
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

function renderAssessmentComparison() {
  const student = studentById(comparisonStudentId) || state.students[0];
  if (!student) return "";
  comparisonStudentId = student.id;
  const history = [...(student.measurementHistory || [])].sort((a, b) => a.date.localeCompare(b.date));
  const metric = metricInfo(comparisonMetric);
  if (!comparisonFromDate || !history.some((entry) => entry.date === comparisonFromDate)) {
    comparisonFromDate = history[0]?.date || "";
  }
  if (!comparisonToDate || !history.some((entry) => entry.date === comparisonToDate)) {
    comparisonToDate = history[history.length - 1]?.date || "";
  }
  const from = history.find((entry) => entry.date === comparisonFromDate);
  const to = history.find((entry) => entry.date === comparisonToDate);
  const fromValue = Number(from?.[comparisonMetric] || 0);
  const toValue = Number(to?.[comparisonMetric] || 0);
  const delta = Number((toValue - fromValue).toFixed(1));
  return `
    <div class="panel">
      <div class="panel-header"><h3>Comparativo entre avaliacoes</h3></div>
      <div class="panel-body">
        <div class="comparison-controls">
          <label>Aluno
            <select id="comparison-student">
              ${state.students.map((item) => `<option value="${item.id}" ${item.id === student.id ? "selected" : ""}>${item.name}</option>`).join("")}
            </select>
          </label>
          <label>Metrica
            <select id="comparison-metric">
              ${metricOptions.map(([key, label]) => `<option value="${key}" ${key === comparisonMetric ? "selected" : ""}>${label}</option>`).join("")}
            </select>
          </label>
          <label>De
            <select id="comparison-from">
              ${history.map((entry) => `<option value="${entry.date}" ${entry.date === comparisonFromDate ? "selected" : ""}>${formatDateBR(entry.date)}</option>`).join("")}
            </select>
          </label>
          <label>Para
            <select id="comparison-to">
              ${history.map((entry) => `<option value="${entry.date}" ${entry.date === comparisonToDate ? "selected" : ""}>${formatDateBR(entry.date)}</option>`).join("")}
            </select>
          </label>
        </div>
        ${history.length ? `
          <div class="comparison-grid">
            <div class="comparison-chart">
              ${renderEvolutionLineChart(history, comparisonMetric)}
            </div>
            <div class="comparison-summary">
              <span>${metric[1]}</span>
              <strong>${formatDelta(delta, ` ${metric[2]}`)}</strong>
              <p>${from ? formatDateBR(from.date) : "-"}: ${fromValue || "-"} ${metric[2]}<br>${to ? formatDateBR(to.date) : "-"}: ${toValue || "-"} ${metric[2]}</p>
            </div>
          </div>
        ` : `<div class="empty-state">Nenhuma avaliacao registrada para este aluno.</div>`}
      </div>
    </div>
  `;
}

function renderPhysicalAssessmentDashboard() {
  const student = studentById(comparisonStudentId) || state.students[0];
  if (!student) return "";
  return renderAssessmentDashboard(student, {
    showStudentSelect: true,
    title: "Fisica",
    eyebrow: "Avaliacao fisica",
    description: "Historico, graficos e comparativos corporais por aluno."
  });
}

function renderStudentAssessmentDashboard(student) {
  return renderAssessmentDashboard(student, {
    showStudentSelect: false,
    title: "Minha evolucao",
    eyebrow: "Avaliacao fisica",
    description: "Acompanhe suas avaliacoes, compare datas e veja sua mudanca corporal."
  });
}

function renderAssessmentDashboard(student, options = {}) {
  const {
    showStudentSelect = true,
    title = "Fisica",
    eyebrow = "Avaliacao fisica",
    description = "Historico, graficos e comparativos corporais por aluno."
  } = options;
  comparisonStudentId = student.id;
  const history = [...(student.measurementHistory || [])].sort((a, b) => a.date.localeCompare(b.date));
  if (!comparisonFromDate || !history.some((entry) => entry.date === comparisonFromDate)) {
    comparisonFromDate = history[0]?.date || "";
  }
  if (!comparisonToDate || !history.some((entry) => entry.date === comparisonToDate)) {
    comparisonToDate = history[history.length - 1]?.date || "";
  }

  return `
    <section class="assessment-dashboard">
      <div class="assessment-shell-header">
        <div>
          <span>${eyebrow}</span>
          <h3>${title}</h3>
          <p>${description}</p>
        </div>
        ${showStudentSelect ? `
          <label>Aluno
            <select id="comparison-student">
              ${state.students.map((item) => `<option value="${item.id}" ${item.id === student.id ? "selected" : ""}>${item.name}</option>`).join("")}
            </select>
          </label>
        ` : `
          <div class="assessment-student-badge">
            <strong>${student.name}</strong>
            <span>${student.goal}</span>
          </div>
        `}
      </div>
      <div class="assessment-tabs" role="tablist" aria-label="Avaliacao fisica">
        <button type="button" class="${assessmentDashboardTab === "assessments" ? "active" : ""}" data-action="set-assessment-tab" data-tab="assessments">Avaliacoes</button>
        <button type="button" class="${assessmentDashboardTab === "charts" ? "active" : ""}" data-action="set-assessment-tab" data-tab="charts">Graficos</button>
      </div>
      <div class="assessment-content">
        ${history.length ? (
          assessmentDashboardTab === "assessments"
            ? renderAssessmentCards(student, history)
            : renderAssessmentCharts(student, history)
        ) : `<div class="empty-state">Nenhuma avaliacao registrada para este aluno.</div>`}
      </div>
    </section>
  `;
}

function renderAssessmentCards(student, history) {
  return `
    <div class="assessment-card-list">
      ${history.slice().reverse().map((entry, index) => `
        <article class="assessment-card">
          <div>
            <strong>${assessmentProtocolName(entry, history.length - index)}</strong>
            <span>Realizada em: ${formatDateBR(entry.date)}</span>
          </div>
          <button class="icon-button" type="button" title="Comparar avaliacao" data-action="compare-assessment-date" data-date="${entry.date}">›</button>
          <button class="link-button" type="button" data-action="compare-assessment-date" data-date="${entry.date}">Comparar</button>
        </article>
      `).join("")}
    </div>
  `;
}

function renderAssessmentCharts(student, history) {
  const metric = metricInfo(comparisonMetric);
  const from = history.find((entry) => entry.date === comparisonFromDate);
  const to = history.find((entry) => entry.date === comparisonToDate);
  const fromValue = Number(from ? assessmentMetricValue(from, comparisonMetric) : 0);
  const toValue = Number(to ? assessmentMetricValue(to, comparisonMetric) : 0);
  const delta = Number((toValue - fromValue).toFixed(1));

  return `
    <div class="comparison-controls compact">
      <label>Metrica
        <select id="comparison-metric">
          ${metricOptions.map(([key, label]) => `<option value="${key}" ${key === comparisonMetric ? "selected" : ""}>${label}</option>`).join("")}
        </select>
      </label>
      <label>De
        <select id="comparison-from">
          ${history.map((entry) => `<option value="${entry.date}" ${entry.date === comparisonFromDate ? "selected" : ""}>${formatDateBR(entry.date)}</option>`).join("")}
        </select>
      </label>
      <label>Para
        <select id="comparison-to">
          ${history.map((entry) => `<option value="${entry.date}" ${entry.date === comparisonToDate ? "selected" : ""}>${formatDateBR(entry.date)}</option>`).join("")}
        </select>
      </label>
    </div>
    <div class="comparison-grid">
      <div class="comparison-chart">
        ${renderEvolutionLineChart(history, comparisonMetric)}
      </div>
      <div class="comparison-summary">
        <span>${metric[1]}</span>
        <strong>${formatDelta(delta, ` ${metric[2]}`)}</strong>
        <p>${from ? formatDateBR(from.date) : "-"}: ${fromValue || "-"} ${metric[2]}<br>${to ? formatDateBR(to.date) : "-"}: ${toValue || "-"} ${metric[2]}</p>
      </div>
    </div>
    <div class="assessment-graph-gallery">
      ${renderAssessmentGraphGallery(history)}
    </div>
    <div class="assessment-table-panel">
      <div class="assessment-table-wrap">
        ${renderAssessmentComparisonTable(history)}
      </div>
      <div class="assessment-info">Arraste a tabela para o lado e veja todos os valores.</div>
      <button class="primary-button wide" type="button" data-action="compare-assessment-date" data-date="${comparisonFromDate || history[0]?.date || ""}">Comparacao</button>
      <div class="assessment-date-buttons">
        ${history.map((entry) => `
          <button type="button" data-action="compare-assessment-date" data-date="${entry.date}">${formatDateBR(entry.date)}</button>
        `).join("")}
      </div>
    </div>
  `;
}

function renderAssessmentGraphGallery(history) {
  return assessmentChartSections.map((section) => {
    const cards = section.metrics
      .map((metricKey) => renderAssessmentMetricCard(history, metricKey))
      .filter(Boolean)
      .join("");

    if (!cards) return "";

    return `
      <section class="assessment-graph-section">
        <div class="assessment-graph-section-title">${section.title}</div>
        <div class="assessment-graph-stack">
          ${cards}
        </div>
      </section>
    `;
  }).join("");
}

function renderAssessmentMetricCard(history, metricKey) {
  const info = assessmentMetricInfo(metricKey);
  const values = history.map((entry) => Number(assessmentMetricValue(entry, metricKey) || 0));
  const hasData = values.some((value) => value > 0);
  if (!hasData) return "";

  const latest = values[values.length - 1];
  return `
    <article class="assessment-metric-card">
      <h4>${info[1]}</h4>
      <span class="assessment-unit-pill">${info[2] || "indice"}</span>
      <div class="comparison-chart metric-mini-chart">
        ${renderEvolutionLineChart(history, metricKey)}
      </div>
      <div class="assessment-metric-footer">
        <strong>${formatAssessmentValue(latest, info[2], metricKey)}</strong>
        <span>Ultima avaliacao</span>
      </div>
    </article>
  `;
}

function renderAssessmentComparisonTable(history) {
  const rows = [
    ["weight", "Peso", "kg"],
    ["bodyFat", "% Gordura", "%"],
    ["leanMass", "Massa Magra", "kg"],
    ["fatMass", "Massa Gorda", "kg"],
    ["bmi", "IMC", ""],
    ["perimetry", "Perimetria", "cm"],
    ["anthropometry", "Antropometria", "mm"],
    ["rcq", "RCQ", ""]
  ];
  return `
    <table class="assessment-compare-table">
      <thead>
        <tr>
          <th></th>
          ${history.map((entry) => `<th>${formatDateBR(entry.date)}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${rows.map(([key, label, unit]) => `
          <tr>
            <th>${label}</th>
            ${history.map((entry) => `<td>${formatAssessmentValue(assessmentMetricValue(entry, key), unit, key)}</td>`).join("")}
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function assessmentProtocolName(entry, index) {
  if (entry.assessmentType) return entry.assessmentType;
  return defaultAssessmentType(index);
}

function assessmentMetricValue(entry, key) {
  const weight = Number(entry.weight || 0);
  const height = Number(entry.height || 0);
  const bodyFat = Number(entry.bodyFat || 0);
  const waist = Number(entry.waist || 0);
  const hip = Number(entry.hip || 0);
  if (key === "leanMass") return weight && bodyFat ? weight * (1 - bodyFat / 100) : 0;
  if (key === "fatMass") return weight && bodyFat ? weight * (bodyFat / 100) : 0;
  if (key === "bmi") return weight && height ? weight / ((height / 100) ** 2) : 0;
  if (key === "perimetry") {
    return ["chest", "waist", "abdomen", "hip", "rightArm", "leftArm", "rightThigh", "leftThigh", "calf"]
      .reduce((sum, measureKey) => sum + Number(entry[measureKey] || 0), 0);
  }
  if (key === "anthropometry") return bodyFat ? bodyFat * 6 : 0;
  if (key === "rcq") return waist && hip ? waist / hip : 0;
  return Number(entry[key] || 0);
}

function formatAssessmentValue(value, unit, key) {
  if (!value) return "-";
  const decimals = key === "rcq" || key === "bmi" || key === "anthropometry" || key === "perimetry" ? 2 : 1;
  return `${Number(value).toFixed(decimals)}${unit ? unit : ""}`;
}

function renderEvolutionLineChart(history, metricKey) {
  const metric = assessmentMetricInfo(metricKey);
  const values = history.map((entry) => Number(assessmentMetricValue(entry, metricKey) || 0));
  const max = Math.max(...values, 1);
  const min = Math.min(...values, 0);
  const range = Math.max(max - min, 1);
  const chartLeft = 12;
  const chartRight = 96;
  const chartTop = 12;
  const chartBottom = 92;
  const chartWidth = chartRight - chartLeft;
  const chartHeight = chartBottom - chartTop;
  const tickCount = 5;
  const step = range / (tickCount - 1);
  const tickValues = Array.from({ length: tickCount }, (_, index) => Number((max - step * index).toFixed(2)));
  const points = history.map((entry, index) => {
    const x = history.length === 1 ? chartLeft + chartWidth / 2 : chartLeft + (index / (history.length - 1)) * chartWidth;
    const value = Number(assessmentMetricValue(entry, metricKey) || 0);
    const y = chartBottom - ((value - min) / range) * chartHeight;
    return { x, y, entry, value };
  });
  const pointString = points.map((point) => `${point.x},${point.y}`).join(" ");
  const areaString = `${chartLeft},${chartBottom} ${pointString} ${chartRight},${chartBottom}`;
  const latestPoint = points[points.length - 1];
  return `
    <svg viewBox="0 0 100 112" role="img" aria-label="Grafico de evolucao de ${metric[1]}" preserveAspectRatio="none">
      ${tickValues.map((tickValue, index) => {
        const y = chartTop + (index / (tickCount - 1)) * chartHeight;
        const formatted = formatAssessmentValue(tickValue, "", metricKey).replace(".", ",");
        return `
          <line x1="${chartLeft}" y1="${y}" x2="${chartRight}" y2="${y}" stroke="rgba(18, 38, 61, 0.14)" stroke-width="0.8" />
          <text x="${chartLeft - 1.5}" y="${y + 1.5}" text-anchor="end" font-size="3.2" fill="rgba(24, 33, 31, 0.72)" font-weight="700">${formatted}</text>
        `;
      }).join("")}
      <line x1="${chartLeft}" y1="${chartTop}" x2="${chartLeft}" y2="${chartBottom}" stroke="rgba(18, 38, 61, 0.2)" stroke-width="1" />
      <line x1="${chartLeft}" y1="${chartBottom}" x2="${chartRight}" y2="${chartBottom}" stroke="rgba(18, 38, 61, 0.2)" stroke-width="1" />
      <polygon points="${areaString}" fill="rgba(22, 137, 232, 0.22)" />
      <polyline points="${pointString}" fill="none" stroke="var(--brand)" stroke-width="3" vector-effect="non-scaling-stroke" />
      ${points.map((point) => `<line x1="${point.x}" y1="${chartBottom}" x2="${point.x}" y2="${point.y}" stroke="rgba(18, 38, 61, 0.08)" stroke-width="1" />`).join("")}
      ${points.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="2.6" fill="var(--brand-dark)" />`).join("")}
      ${latestPoint ? `<circle cx="${latestPoint.x}" cy="${latestPoint.y}" r="3.6" fill="#ffffff" stroke="var(--brand-dark)" stroke-width="1.6" />` : ""}
    </svg>
    <div class="chart-labels">
      ${history.map((entry) => `<span>${formatDateBR(entry.date)}<strong>${formatAssessmentValue(assessmentMetricValue(entry, metricKey), metric[2], metricKey)}</strong></span>`).join("")}
    </div>
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
            <td>
              <div class="table-actions">
                <button class="ghost-button" type="button" data-action="edit-student" data-student-id="${student.id}">Editar</button>
                <button class="ghost-button" type="button" data-action="reset-student-password" data-student-id="${student.id}" data-student-name="${student.name}">Resetar senha</button>
                <button class="ghost-button" type="button" data-action="delete-student" data-student-id="${student.id}" data-student-name="${student.name}">Excluir</button>
              </div>
            </td>
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

function habitInputs(habits = []) {
  const source = habits.length ? habits : ["", "", "", ""];
  return `
    <div class="wide form-section-title">
      <strong>Habitos acompanhados</strong>
      <span>Defina ate 6 habitos para o aluno marcar no dia a dia.</span>
    </div>
    ${source.slice(0, 6).map((habit, index) => `
      <label>Habito ${index + 1}<input name="habitName" value="${habit || ""}" placeholder="Ex: Beber 2,5L de agua" /></label>
    `).join("")}
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

function readHabits(form) {
  return form.getAll("habitName").map((item) => item.trim()).filter(Boolean).slice(0, 6);
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
          <label>Tipo da avaliacao
            <select name="assessmentType">
              ${assessmentTypeOptions.map((type) => `<option value="${type}" ${type === "Reavaliacao" ? "selected" : ""}>${type}</option>`).join("")}
            </select>
          </label>
          <div class="wide form-section-title">
            <strong>Nova avaliacao fisica</strong>
            <span>Ao salvar, estas medidas viram as medidas atuais e entram no historico de evolucao.</span>
          </div>
          ${measurementInputs(student)}
          ${habitInputs(student.habits || defaultHabitsForGoal(student.goal))}
          <label class="wide">Observacoes<textarea name="notes">${student.notes || ""}</textarea></label>
          <div class="wide form-actions">
            <button class="primary-button" type="submit">Salvar avaliacao</button>
            <button class="ghost-button" type="button" data-action="reset-student-password" data-student-id="${student.id}" data-student-name="${student.name}">Resetar senha</button>
            <button class="ghost-button" type="button" data-action="delete-student" data-student-id="${student.id}" data-student-name="${student.name}">Excluir aluno</button>
          </div>
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
            ${habitInputs()}
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
  const workout = editingWorkoutId ? workoutById(editingWorkoutId) : null;
  const exercises = workout?.exercises?.length ? workout.exercises : [{}, {}];
  return `
    <div class="panel">
      <div class="panel-header">
        <h3>${workout ? "Editar treino" : "Novo treino"}</h3>
        ${workout ? `<button class="ghost-button" type="button" data-action="cancel-edit-workout">Cancelar edicao</button>` : ""}
      </div>
      <div class="panel-body">
        <form id="workout-form" class="form-grid">
          <label>Aluno
            <select name="studentId" required>
              ${state.students.map((student) => `<option value="${student.id}" ${student.id === workout?.studentId ? "selected" : ""}>${student.name}</option>`).join("")}
            </select>
          </label>
          <label>Nome do treino<input name="name" required placeholder="Treino A - Superiores" value="${workout?.name || ""}" /></label>
          <label>Foco<input name="focus" required placeholder="Forca, hipertrofia, mobilidade..." value="${workout?.focus || ""}" /></label>
          <label>Frequencia<input name="frequency" required placeholder="3x por semana" value="${workout?.frequency || ""}" /></label>
          <div class="wide exercise-builder">
            <div class="toolbar">
              <strong>Exercicios</strong>
              <button class="ghost-button" type="button" data-action="add-exercise">Adicionar exercicio</button>
            </div>
            <div id="exercise-rows">
              ${exercises.map((exercise) => exerciseRow(exercise)).join("")}
            </div>
          </div>
          <button class="primary-button wide" type="submit">${workout ? "Salvar alteracoes do treino" : "Salvar treino"}</button>
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

function exerciseRow(exercise = {}) {
  return `
    <div class="exercise-row">
      <label>Exercicio<input name="exerciseName" placeholder="Supino reto" value="${exercise.name || ""}" /></label>
      <label>Series<input name="sets" placeholder="4" value="${exercise.sets || ""}" /></label>
      <label>Reps<input name="reps" placeholder="8-10" value="${exercise.reps || ""}" /></label>
      <label>Carga/obs.<input name="load" placeholder="60 kg" value="${exercise.load || ""}" /></label>
      <label>Link externo<input name="mediaUrl" placeholder="https://..." value="${exercise.mediaUrl || ""}" /></label>
      <label>Upload de imagem/video<input name="mediaFile" type="file" accept="image/*,video/*" /></label>
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
        <div class="table-actions">
          <button class="ghost-button" type="button" data-action="edit-workout" data-workout-id="${workout.id}">Editar</button>
          <button class="ghost-button" type="button" data-action="delete-workout" data-workout-id="${workout.id}" data-workout-name="${workout.name}">Excluir</button>
        </div>
        <ul class="exercise-list">
          ${workout.exercises.map((exercise) => `
            <li>
              <div>
                <span>${exercise.name}</span>
                <strong>${exerciseSummary(exercise)}</strong>
                ${renderExerciseMedia(exercise, true)}
              </div>
            </li>
          `).join("")}
        </ul>
      </article>
    `;
  }).join("");
}

function renderStudentWorkoutEditorCards(workouts) {
  if (!workouts.length) return `<div class="empty-state">Nenhum treino cadastrado ainda.</div>`;
  return workouts.map((workout) => `
    <article class="item-card">
      <div>
        <h4>${workout.name}</h4>
        <p>${workout.focus} • ${workout.frequency}</p>
      </div>
      <ul class="exercise-list editable-exercise-list">
        ${workout.exercises.map((exercise, index) => `
          <li class="editable-exercise-row">
            <div>
              <span>${exercise.name}</span>
              <strong>${exercise.sets || "-"} series • ${exercise.reps || "reps a definir"}</strong>
              ${renderExerciseMedia(exercise, true)}
            </div>
            <label class="student-load-editor">
              <small>Carga do treino</small>
              <input
                type="text"
                class="student-workout-load-input"
                data-workout-id="${workout.id}"
                data-exercise-index="${index}"
                value="${exercise.load || ""}"
                placeholder="Ex: 40 kg"
              />
            </label>
          </li>
        `).join("")}
      </ul>
    </article>
  `).join("");
}

function mediaKindFromUrl(url = "") {
  const value = String(url).toLowerCase();
  if (!value) return "";
  if (value.includes("youtube.com") || value.includes("youtu.be") || value.match(/\.(mp4|webm|ogg|mov)(\?|#|$)/)) return "video";
  if (value.match(/\.(jpg|jpeg|png|gif|webp|avif)(\?|#|$)/)) return "image";
  return "link";
}

function renderExerciseMedia(exercise, compact = false) {
  if (!exercise?.mediaUrl) return "";
  const kind = mediaKindFromUrl(exercise.mediaUrl);
  if (kind === "image") {
    return `<div class="exercise-media ${compact ? "compact" : ""}"><img src="${exercise.mediaUrl}" alt="Referencia do aparelho para ${exercise.name}" loading="lazy" /></div>`;
  }
  if (kind === "video") {
    if (exercise.mediaUrl.includes("youtube.com") || exercise.mediaUrl.includes("youtu.be")) {
      return `<a class="media-link" href="${exercise.mediaUrl}" target="_blank" rel="noreferrer">Abrir video do aparelho</a>`;
    }
    return `<div class="exercise-media ${compact ? "compact" : ""}"><video controls preload="metadata" src="${exercise.mediaUrl}"></video></div>`;
  }
  return `<a class="media-link" href="${exercise.mediaUrl}" target="_blank" rel="noreferrer">Abrir referencia do aparelho</a>`;
}

function getInputValue(container, selector) {
  return container.querySelector(selector)?.value?.trim?.() || "";
}

function getInputFile(container, selector) {
  return container.querySelector(selector)?.files?.[0] || null;
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

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      const base64 = result.includes(",") ? result.split(",")[1] : result;
      resolve(base64);
    };
    reader.onerror = () => reject(new Error("Nao foi possivel ler o arquivo."));
    reader.readAsDataURL(file);
  });
}

async function uploadMediaAsset(file) {
  if (!file) return "";
  const base64 = await fileToBase64(file);
  const response = await fetch(API_MEDIA_UPLOAD_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fileName: sanitizeFileName(file.name),
      mimeType: file.type || "application/octet-stream",
      base64
    })
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload?.url) {
    throw new Error(payload?.error || "Nao foi possivel enviar a midia.");
  }
  return payload.url;
}

async function resolveExerciseMediaUrl(row, linkSelector, fileSelector) {
  const externalUrl = getInputValue(row, linkSelector);
  const file = getInputFile(row, fileSelector);
  if (file) return uploadMediaAsset(file);
  return externalUrl;
}

async function collectWorkoutExercises(formElement) {
  const rows = Array.from(formElement.querySelectorAll(".exercise-row"));
  const exercises = await Promise.all(rows.map(async (row) => ({
    name: getInputValue(row, '[name="exerciseName"]'),
    sets: getInputValue(row, '[name="sets"]'),
    reps: getInputValue(row, '[name="reps"]'),
    load: getInputValue(row, '[name="load"]'),
    mediaUrl: await resolveExerciseMediaUrl(row, '[name="mediaUrl"]', '[name="mediaFile"]')
  })));
  return exercises.filter((exercise) => exercise.name);
}

async function collectTemplateExercises(formElement) {
  const rows = Array.from(formElement.querySelectorAll(".template-row"));
  const exercises = await Promise.all(rows.map(async (row) => ({
    name: getInputValue(row, '[name="templateExerciseName"]'),
    sets: getInputValue(row, '[name="templateSets"]'),
    reps: "",
    load: "",
    mediaUrl: await resolveExerciseMediaUrl(row, '[name="templateMediaUrl"]', '[name="templateMediaFile"]')
  })));
  return exercises.filter((exercise) => exercise.name);
}

function setFormPending(formElement, pending, submitLabel) {
  const submitButton = formElement.querySelector('button[type="submit"]');
  if (!submitButton) return;
  if (pending) {
    submitButton.dataset.originalLabel = submitButton.textContent;
    submitButton.textContent = submitLabel;
    submitButton.disabled = true;
    return;
  }
  submitButton.disabled = false;
  submitButton.textContent = submitButton.dataset.originalLabel || submitButton.textContent;
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
    <div class="content-grid">
      <div class="panel">
        <div class="panel-header"><h3>Check-ins semanais</h3></div>
        <div class="panel-body cards-grid">
          ${renderWeeklyCheckinCards()}
        </div>
      </div>
      <div class="panel">
        <div class="panel-header"><h3>Habitos e aderencia</h3></div>
        <div class="panel-body cards-grid">
          ${renderHabitComplianceCards()}
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-header"><h3>Mensagens recentes</h3></div>
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

function renderStudentRiskCards() {
  return state.students.map((student) => {
    const risk = studentRiskLevel(student);
    const weekly = latestWeeklyCheckin(student.id);
    return `
      <article class="item-card risk-card ${risk.tone}">
        <div class="card-title-row">
          <div class="student-cell"><div class="avatar">${initials(student.name)}</div>${student.name}</div>
          <span class="status-pill ${risk.tone}">${risk.label}</span>
        </div>
        <div class="meta-list">
          <span>Adesao ${student.adherence}%</span>
          <span>Habitos ${habitCompletionRate(student)}%</span>
        </div>
        <p>${weekly ? `Ultimo check-in da semana em ${formatDateBR(weekly.weekOf)}.` : "Sem check-in semanal registrado nesta semana."}</p>
      </article>
    `;
  }).join("");
}

function renderWeeklyCheckinCards() {
  if (!state.weeklyCheckins.length) return `<div class="empty-state">Nenhum check-in semanal enviado ainda.</div>`;
  return [...state.weeklyCheckins]
    .sort((a, b) => b.weekOf.localeCompare(a.weekOf))
    .map((checkin) => {
      const student = studentById(checkin.studentId);
      return `
        <article class="item-card">
          <div class="card-title-row">
            <div class="student-cell"><div class="avatar">${initials(student?.name || "Aluno")}</div>${student?.name || "Aluno"}</div>
            <span class="status-pill">${formatDateBR(checkin.weekOf)}</span>
          </div>
          <div class="measure-grid">
            <div><span>Energia</span><strong>${checkin.energy}/5</strong></div>
            <div><span>Recuperacao</span><strong>${checkin.recovery}/5</strong></div>
            <div><span>Nutricao</span><strong>${checkin.nutrition}/5</strong></div>
          </div>
          <p>${checkin.note || "Sem observacoes."}</p>
        </article>
      `;
    }).join("");
}

function renderHabitComplianceCards() {
  return state.students.map((student) => {
    const todayLog = habitLogFor(student.id, todayISO());
    return `
      <article class="item-card">
        <div class="card-title-row">
          <div class="student-cell"><div class="avatar">${initials(student.name)}</div>${student.name}</div>
          <span class="status-pill">${habitCompletionRate(student)}%</span>
        </div>
        <div class="meta-list">
          <span>${student.habits?.length || 0} habitos</span>
          <span>${todayLog?.completed?.length || 0} marcados hoje</span>
        </div>
        <ul class="compact-list">
          ${(student.habits || []).slice(0, 4).map((habit) => `<li>${habit}</li>`).join("")}
        </ul>
      </article>
    `;
  }).join("");
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
      <label>Link externo<input name="templateMediaUrl" placeholder="https://..." /></label>
      <label>Upload de imagem/video<input name="templateMediaFile" type="file" accept="image/*,video/*" /></label>
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
        ${template.exercises.map((exercise) => `
          <li>
            <div>
              <span>${exercise.name}</span>
              <strong>${exercise.sets || "-"} series</strong>
              ${renderExerciseMedia(exercise, true)}
            </div>
          </li>
        `).join("")}
      </ul>
    </article>
  `).join("");
}

function renderStudentTrainingHub(student) {
  const today = todayISO();
  const workouts = workoutsByStudent(student.id);
  const workout = selectedWorkoutForStudent(student.id, today);
  const selectedLog = state.trainingLogs.find((log) =>
    log.studentId === student.id
    && log.date === selectedTrainingDate
    && log.workoutId === selectedTrainingWorkoutId
    && log.completedExercises?.length
  );
  const selectedWorkout = selectedWorkoutForStudent(student.id, selectedTrainingDate);
  return `
    <div class="content-grid">
      <div class="panel">
        <div class="panel-header">
          <h3>Treino do dia</h3>
          <button class="primary-button" type="button" data-action="open-today-workout">Abrir treino do dia</button>
        </div>
        <div class="panel-body">
          ${workouts.length ? renderStudentWorkoutPicker(student, workouts, today) : ""}
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
              : selectedWorkout
                ? `<p>${selectedWorkout.name}</p><span>Treino selecionado para execucao neste dia</span>`
                : `<p>Nenhum treino registrado neste dia.</p>`}
          </div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-header"><h3>Ajustar cargas do treino</h3></div>
      <div class="panel-body cards-grid">${renderStudentWorkoutEditorCards(workouts)}</div>
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
          <label class="check-item exercise-check-item">
            <input
              type="checkbox"
              class="exercise-check"
              data-student-id="${student.id}"
              data-workout-id="${workout.id}"
              data-date="${date}"
              data-exercise-index="${index}"
              ${completed.includes(index) ? "checked" : ""}
            />
            <span><strong>${exercise.name}</strong><small>${exerciseSummary(exercise)}</small>${renderExerciseMedia(exercise, true)}</span>
            <input
              type="text"
              class="exercise-load-input"
              data-student-id="${student.id}"
              data-workout-id="${workout.id}"
              data-date="${date}"
              data-exercise-index="${index}"
              value="${log?.exerciseLoads?.[index] || ""}"
              placeholder="Carga usada"
            />
          </label>
        `).join("")}
      </div>
    </div>
  `;
}

function renderStudentWorkoutPicker(student, workouts, date) {
  const selectedWorkout = selectedWorkoutForStudent(student.id, date);
  return `
    <div class="comparison-controls compact workout-picker">
      <label>Treino selecionado
        <select id="student-workout-picker">
          ${workouts.map((workout) => `<option value="${workout.id}" ${workout.id === selectedWorkout?.id ? "selected" : ""}>${workout.name} • ${workout.focus}</option>`).join("")}
        </select>
      </label>
      <label>Data da execucao
        <input id="student-training-date" type="date" value="${date}" />
      </label>
      <label>Treino sugerido do dia
        <input value="${workoutForDate(student.id, date)?.name || "-"}" readonly />
      </label>
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
        <div class="panel-header"><h3>Habitos do dia</h3></div>
        <div class="panel-body">${renderDailyHabits(student)}</div>
      </div>
    </div>
    <div class="content-grid">
      <div class="panel">
        <div class="panel-header"><h3>Check-in semanal</h3></div>
        <div class="panel-body">${weeklyCheckinForm(student)}</div>
      </div>
      <div class="panel">
        <div class="panel-header"><h3>Enviar recado</h3></div>
        <div class="panel-body">${checkinForm()}</div>
      </div>
    </div>
  `;
}

function renderStudentWorkouts(workouts) {
  const student = currentUser()?.studentId ? studentById(currentUser().studentId) : null;
  const selectedWorkout = student ? selectedWorkoutForStudent(student.id, selectedTrainingDate) : workouts[0];
  return `
    <div class="panel">
      <div class="panel-header"><h3>Meus treinos</h3></div>
      <div class="panel-body">
        ${student && workouts.length ? renderStudentWorkoutPicker(student, workouts, selectedTrainingDate) : ""}
        ${student && selectedWorkout
          ? renderDailyWorkoutChecklist(student, selectedWorkout, selectedTrainingDate)
          : `<div class="empty-state">Nenhum treino publicado ainda.</div>`}
      </div>
    </div>
    <div class="panel">
      <div class="panel-header"><h3>Cargas dos meus treinos</h3></div>
      <div class="panel-body cards-grid">${renderStudentWorkoutEditorCards(workouts)}</div>
    </div>
  `;
}

function renderStudentProgress(student) {
  const loadOverview = loadOverviewForStudent(student);
  const workouts = workoutsByStudent(student.id);
  const weekly = latestWeeklyCheckin(student.id);
  return `
    <div class="stats-grid">
      ${stat("Peso atual", `${measurement(student, "weight")} kg`, `${formatDelta(measurementDelta(student, "weight"), " kg")} desde a 1a avaliacao`)}
      ${stat("Cintura", `${measurement(student, "waist")} cm`, `${formatDelta(measurementDelta(student, "waist"), " cm")} no periodo`)}
      ${stat("Gordura", `${measurement(student, "bodyFat")}%`, `${formatDelta(measurementDelta(student, "bodyFat"), "%")} no periodo`)}
      ${stat("Carga media", loadOverview.currentLabel, `${loadOverview.deltaLabel} entre registros`)}
    </div>
    <div class="content-grid">
      <div class="panel">
        <div class="panel-header"><h3>Resumo semanal</h3></div>
        <div class="panel-body chart">
          ${chartRow("Adesao", student.adherence)}
          ${chartRow("Habitos", habitCompletionRate(student))}
          ${chartRow("Treinos concluidos", loadOverview.completionRate)}
          ${chartRow("Carga", loadOverview.loadRate)}
          ${chartRow("Consistencia", Math.round((loadOverview.consistencyRate + habitCompletionRate(student)) / 2))}
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
    <div class="content-grid">
      <div class="panel">
        <div class="panel-header"><h3>Habitos e rotina</h3></div>
        <div class="panel-body">
          ${renderDailyHabits(student)}
        </div>
      </div>
      <div class="panel">
        <div class="panel-header"><h3>Ultimo check-in semanal</h3></div>
        <div class="panel-body">
          ${weekly ? renderWeeklyCheckinSummary(weekly) : `<div class="empty-state">Envie seu primeiro check-in semanal para abrir esse historico.</div>`}
        </div>
      </div>
    </div>
    ${renderStudentAssessmentDashboard(student)}
    ${renderStudentLoadDashboard(student, workouts)}
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

function renderStudentLoadDashboard(student, workouts) {
  const exerciseOptions = buildStudentLoadExerciseOptions(student, workouts);
  if (loadExerciseFilter !== "all" && !exerciseOptions.some((item) => item.value === loadExerciseFilter)) {
    loadExerciseFilter = "all";
  }
  const loadSeries = buildStudentLoadSeries(student, workouts, loadExerciseFilter);
  if (!loadSeries.length) {
    return `
      <div class="panel">
        <div class="panel-header"><h3>Evolucao de carga</h3></div>
        <div class="panel-body"><div class="empty-state">Registre as cargas dos exercicios concluidos para acompanhar sua evolucao.</div></div>
      </div>
    `;
  }

  if (!loadComparisonFromDate || !loadSeries.some((entry) => entry.date === loadComparisonFromDate)) {
    loadComparisonFromDate = loadSeries[0].date;
  }
  if (!loadComparisonToDate || !loadSeries.some((entry) => entry.date === loadComparisonToDate)) {
    loadComparisonToDate = loadSeries[loadSeries.length - 1].date;
  }

  const from = loadSeries.find((entry) => entry.date === loadComparisonFromDate) || loadSeries[0];
  const to = loadSeries.find((entry) => entry.date === loadComparisonToDate) || loadSeries[loadSeries.length - 1];
  const delta = Number((to.averageLoad - from.averageLoad).toFixed(1));

  return `
    <div class="panel">
      <div class="panel-header"><h3>Evolucao de carga</h3></div>
      <div class="panel-body">
        <div class="comparison-controls compact">
          <label>Aparelho/exercicio
            <select id="load-exercise-filter">
              ${exerciseOptions.map((option) => `<option value="${option.value}" ${option.value === loadExerciseFilter ? "selected" : ""}>${option.label}</option>`).join("")}
            </select>
          </label>
          <label>De
            <select id="load-comparison-from">
              ${loadSeries.map((entry) => `<option value="${entry.date}" ${entry.date === loadComparisonFromDate ? "selected" : ""}>${formatDateBR(entry.date)}</option>`).join("")}
            </select>
          </label>
          <label>Para
            <select id="load-comparison-to">
              ${loadSeries.map((entry) => `<option value="${entry.date}" ${entry.date === loadComparisonToDate ? "selected" : ""}>${formatDateBR(entry.date)}</option>`).join("")}
            </select>
          </label>
          <label>Melhor sessao
            <input value="${loadSeries.slice().sort((a, b) => b.averageLoad - a.averageLoad)[0]?.label || "-"}" readonly />
          </label>
        </div>
        <div class="comparison-grid">
          <div class="comparison-chart">
            ${renderLoadEvolutionChart(loadSeries)}
          </div>
          <div class="comparison-summary">
            <span>${loadExerciseFilter === "all" ? "Carga media registrada" : "Evolucao por aparelho"}</span>
            <strong>${formatDelta(delta, " kg")}</strong>
            <p>${formatDateBR(from.date)}: ${from.averageLoad.toFixed(1)} kg<br>${formatDateBR(to.date)}: ${to.averageLoad.toFixed(1)} kg</p>
          </div>
        </div>
        <div class="assessment-table-panel">
          <div class="assessment-table-wrap">
            ${renderStudentLoadComparisonTable(loadSeries)}
          </div>
          <div class="assessment-info">As cargas podem ser ajustadas no treino do aluno e o dashboard mostra tanto a media geral quanto a evolucao por aparelho.</div>
        </div>
      </div>
    </div>
  `;
}

function buildStudentLoadEntries(student, workouts = workoutsByStudent(student.id)) {
  const logs = [...(state.trainingLogs || [])]
    .filter((log) => log.studentId === student.id && (log.completedExercises?.length || Object.keys(log.exerciseLoads || {}).length))
    .sort((a, b) => a.date.localeCompare(b.date));

  const series = logs.map((log) => {
    const workout = workoutById(log.workoutId) || workouts.find((item) => item.id === log.workoutId);
    const entries = (workout?.exercises || [])
      .map((exercise, index) => {
        const loggedLoad = log.exerciseLoads?.[index];
        const source = `${loggedLoad || exercise.load || ""}`.trim();
        const value = numericLoadValue(source);
        return value ? { name: exercise.name, value, summary: exerciseSummary(exercise) } : null;
      })
      .filter(Boolean);

    if (!entries.length) return null;
    const averageLoad = entries.reduce((sum, entry) => sum + entry.value, 0) / entries.length;
    const maxLoad = entries.reduce((best, entry) => entry.value > best.value ? entry : best, entries[0]);
    return {
      date: log.date,
      averageLoad: Number(averageLoad.toFixed(1)),
      exerciseCount: entries.length,
      maxExercise: maxLoad.name,
      maxLoad: Number(maxLoad.value.toFixed(1)),
      label: workout?.name || "Treino do dia",
      entries
    };
  }).filter(Boolean);

  return series;
}

function buildStudentLoadSeries(student, workouts = workoutsByStudent(student.id), filter = "all") {
  const series = buildStudentLoadEntries(student, workouts);

  if (filter !== "all") {
    const filteredSeries = series
      .map((item) => {
        const match = item.entries.find((entry) => entry.name === filter);
        if (!match) return null;
        return {
          date: item.date,
          averageLoad: Number(match.value.toFixed(1)),
          exerciseCount: 1,
          maxExercise: match.name,
          maxLoad: Number(match.value.toFixed(1)),
          label: item.label,
          entries: [match]
        };
      })
      .filter(Boolean);
    if (filteredSeries.length) return filteredSeries;
  }

  if (series.length > 1) return series;

  const prescribedLoads = workouts
    .flatMap((workout) => workout.exercises
      .filter((exercise) => filter === "all" || exercise.name === filter)
      .map((exercise) => ({ name: exercise.name, value: numericLoadValue(exercise.load) }))
      .filter((exercise) => exercise.value));

  if (series.length === 1 || !prescribedLoads.length) return series;

  const averageLoad = prescribedLoads.reduce((sum, value) => sum + value.value, 0) / prescribedLoads.length;
  const history = [...(student.measurementHistory || [])].sort((a, b) => a.date.localeCompare(b.date));
  if (history.length < 2) {
    return [{
      date: todayISO(),
      averageLoad: Number(averageLoad.toFixed(1)),
      exerciseCount: prescribedLoads.length,
      maxExercise: prescribedLoads.sort((a, b) => b.value - a.value)[0]?.name || "Carga prescrita",
      maxLoad: Number(Math.max(...prescribedLoads.map((item) => item.value)).toFixed(1)),
      label: "Prescricao atual",
      entries: prescribedLoads
    }];
  }

  return history.map((entry, index) => {
    const factor = history.length === 1 ? 1 : 0.82 + (index / (history.length - 1)) * 0.18;
    return {
      date: entry.date,
      averageLoad: Number((averageLoad * factor).toFixed(1)),
      exerciseCount: prescribedLoads.length,
      maxExercise: prescribedLoads.sort((a, b) => b.value - a.value)[0]?.name || "Carga prescrita",
      maxLoad: Number((Math.max(...prescribedLoads.map((item) => item.value)) * factor).toFixed(1)),
      label: "Prescricao atual",
      entries: prescribedLoads.map((item) => ({ ...item, value: Number((item.value * factor).toFixed(1)) }))
    };
  });
}

function buildStudentLoadExerciseOptions(student, workouts = workoutsByStudent(student.id)) {
  const names = new Set();
  buildStudentLoadEntries(student, workouts).forEach((item) => item.entries.forEach((entry) => names.add(entry.name)));
  workouts.forEach((workout) => workout.exercises.forEach((exercise) => {
    if (exercise.name) names.add(exercise.name);
  }));
  return [{ value: "all", label: "Visao geral" }, ...[...names].sort().map((name) => ({ value: name, label: name }))];
}

function numericLoadValue(value) {
  const match = String(value || "").replace(",", ".").match(/(\d+(?:\.\d+)?)/);
  return match ? Number(match[1]) : 0;
}

function renderLoadEvolutionChart(series) {
  const values = series.map((entry) => Number(entry.averageLoad || 0));
  const max = Math.max(...values, 1);
  const min = Math.min(...values, 0);
  const range = Math.max(max - min, 1);
  const points = series.map((entry, index) => {
    const x = series.length === 1 ? 50 : (index / (series.length - 1)) * 100;
    const y = 100 - ((Number(entry.averageLoad || 0) - min) / range) * 82 - 9;
    return { x, y };
  });
  const pointString = points.map((point) => `${point.x},${point.y}`).join(" ");
  return `
    <svg viewBox="0 0 100 112" role="img" aria-label="Grafico de evolucao de carga" preserveAspectRatio="none">
      <polyline points="${pointString}" fill="none" stroke="var(--brand)" stroke-width="3" vector-effect="non-scaling-stroke" />
      ${points.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="2.6" fill="var(--brand-dark)" />`).join("")}
    </svg>
    <div class="chart-labels">
      ${series.map((entry) => `<span>${formatDateBR(entry.date)}<strong>${entry.averageLoad.toFixed(1)} kg</strong></span>`).join("")}
    </div>
  `;
}

function renderStudentLoadComparisonTable(series) {
  const detailed = series.some((entry) => entry.exerciseCount === 1);
  return `
    <table class="assessment-compare-table">
      <thead>
        <tr>
          <th></th>
          ${series.map((entry) => `<th>${formatDateBR(entry.date)}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Carga media</th>
          ${series.map((entry) => `<td>${entry.averageLoad.toFixed(1)}kg</td>`).join("")}
        </tr>
        <tr>
          <th>Maior carga</th>
          ${series.map((entry) => `<td>${entry.maxLoad.toFixed(1)}kg</td>`).join("")}
        </tr>
        <tr>
          <th>${detailed ? "Treino" : "Exercicio destaque"}</th>
          ${series.map((entry) => `<td>${detailed ? entry.label : entry.maxExercise}</td>`).join("")}
        </tr>
        <tr>
          <th>${detailed ? "Carga monitorada" : "Exercicios com carga"}</th>
          ${series.map((entry) => `<td>${detailed ? entry.maxExercise : entry.exerciseCount}</td>`).join("")}
        </tr>
      </tbody>
    </table>
  `;
}

function loadOverviewForStudent(student) {
  const loadSeries = buildStudentLoadSeries(student);
  const current = loadSeries[loadSeries.length - 1];
  const first = loadSeries[0];
  const completionLogs = state.trainingLogs.filter((log) => log.studentId === student.id && log.completedExercises?.length);
  const completionRate = Math.min(100, Math.round((completionLogs.length / Math.max(1, workoutsByStudent(student.id).length * 2)) * 100));
  const loadRate = current ? Math.min(100, Math.round((current.averageLoad / Math.max(current.averageLoad, 1)) * 100)) : 0;
  const consistencyRate = Math.min(100, Math.round((student.adherence + completionRate) / 2));
  return {
    currentLabel: current ? `${current.averageLoad.toFixed(1)} kg` : "-",
    deltaLabel: current && first ? formatDelta(Number((current.averageLoad - first.averageLoad).toFixed(1)), " kg") : "0 kg",
    completionRate,
    loadRate,
    consistencyRate
  };
}

function renderDailyHabits(student) {
  const today = todayISO();
  const log = habitLogFor(student.id, today);
  const completed = new Set(log?.completed || []);
  if (!student.habits?.length) {
    return `<div class="empty-state">Nenhum habito configurado para este aluno.</div>`;
  }
  return `
    <div class="habit-stack">
      <div class="progress-bar daily-progress"><span style="--value:${Math.round((completed.size / student.habits.length) * 100)}%"></span></div>
      <div class="check-list">
        ${student.habits.map((habit, index) => `
          <label class="check-item">
            <input
              type="checkbox"
              class="habit-check"
              data-student-id="${student.id}"
              data-date="${today}"
              data-habit-index="${index}"
              ${completed.has(index) ? "checked" : ""}
            />
            <span><strong>${habit}</strong><small>${completed.has(index) ? "Concluido hoje" : "Pendente hoje"}</small></span>
          </label>
        `).join("")}
      </div>
    </div>
  `;
}

function weeklyCheckinForm(student) {
  const weekOf = weekStartISO();
  const current = weeklyCheckinFor(student.id, weekOf);
  return `
    <form id="weekly-checkin-form" class="form-grid">
      <input type="hidden" name="weekOf" value="${weekOf}" />
      <label>Energia
        <select name="energy">${[1, 2, 3, 4, 5].map((value) => `<option value="${value}" ${Number(current?.energy) === value ? "selected" : ""}>${value}/5</option>`).join("")}</select>
      </label>
      <label>Recuperacao
        <select name="recovery">${[1, 2, 3, 4, 5].map((value) => `<option value="${value}" ${Number(current?.recovery) === value ? "selected" : ""}>${value}/5</option>`).join("")}</select>
      </label>
      <label>Nutricao
        <select name="nutrition">${[1, 2, 3, 4, 5].map((value) => `<option value="${value}" ${Number(current?.nutrition) === value ? "selected" : ""}>${value}/5</option>`).join("")}</select>
      </label>
      <label>Dor
        <select name="pain">${[0, 1, 2, 3, 4, 5].map((value) => `<option value="${value}" ${Number(current?.pain) === value ? "selected" : ""}>${value}/5</option>`).join("")}</select>
      </label>
      <label class="wide">Resumo da semana
        <textarea name="note" required placeholder="Conte como foi a semana, dificuldades, apetite, sono e treinos.">${current?.note || ""}</textarea>
      </label>
      <button class="primary-button wide" type="submit">Salvar check-in semanal</button>
    </form>
  `;
}

function renderWeeklyCheckinSummary(checkin) {
  return `
    <div class="measure-grid">
      <div><span>Energia</span><strong>${checkin.energy}/5</strong></div>
      <div><span>Recuperacao</span><strong>${checkin.recovery}/5</strong></div>
      <div><span>Nutricao</span><strong>${checkin.nutrition}/5</strong></div>
    </div>
    <div class="training-day-detail">
      <h4>Semana de ${formatDateBR(checkin.weekOf)}</h4>
      <p>${checkin.note || "Sem observacoes."}</p>
      <span>Dor relatada: ${checkin.pain}/5</span>
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

  if (target.dataset.action === "edit-workout") {
    editingWorkoutId = target.dataset.workoutId;
    render();
  }

  if (target.dataset.action === "cancel-edit-workout") {
    editingWorkoutId = null;
    render();
  }

  if (target.dataset.action === "delete-workout") {
    const workoutId = target.dataset.workoutId;
    const workoutName = target.dataset.workoutName || "este treino";
    if (!workoutId) return;
    const confirmed = window.confirm(`Deseja excluir ${workoutName}? Os registros de execucao vinculados a este treino tambem serao removidos.`);
    if (!confirmed) return;
    state.workouts = state.workouts.filter((workout) => workout.id !== workoutId);
    state.trainingLogs = state.trainingLogs.filter((log) => log.workoutId !== workoutId);
    if (selectedTrainingWorkoutId === workoutId) selectedTrainingWorkoutId = "";
    if (editingWorkoutId === workoutId) editingWorkoutId = null;
    saveData();
    toast("Treino excluido com sucesso.");
    render();
  }

  if (target.dataset.action === "delete-student") {
    const studentId = target.dataset.studentId;
    const studentName = target.dataset.studentName || "este aluno";
    if (!studentId) return;
    const confirmed = window.confirm(`Deseja excluir ${studentName}? Esta acao remove treinos, check-ins, habitos e historicos vinculados.`);
    if (!confirmed) return;
    deleteStudentCascade(studentId);
    saveData();
    toast("Aluno excluido com sucesso.");
    currentView = "students";
    render();
  }

  if (target.dataset.action === "reset-student-password") {
    const studentId = target.dataset.studentId;
    const studentName = target.dataset.studentName || "este aluno";
    if (!studentId) return;
    const confirmed = window.confirm(`Deseja resetar a senha de ${studentName} para 123456? No proximo acesso o aluno sera obrigado a trocar a senha.`);
    if (!confirmed) return;
    const reset = resetStudentPassword(studentId);
    if (!reset) {
      toast("Nao foi possivel localizar o acesso deste aluno.");
      return;
    }
    saveData();
    toast("Senha resetada para 123456 com troca obrigatoria no proximo login.");
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

  if (target.dataset.action === "set-assessment-tab") {
    assessmentDashboardTab = target.dataset.tab || "assessments";
    render();
  }

  if (target.dataset.action === "compare-assessment-date") {
    const student = studentById(comparisonStudentId) || state.students[0];
    const history = [...(student?.measurementHistory || [])].sort((a, b) => a.date.localeCompare(b.date));
    comparisonFromDate = target.dataset.date;
    comparisonToDate = history[history.length - 1]?.date || target.dataset.date;
    assessmentDashboardTab = "charts";
    render();
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
    selectedTrainingWorkoutId = currentUser()?.studentId ? (workoutForDate(currentUser().studentId, selectedTrainingDate)?.id || "") : "";
    render();
  }

  if (target.dataset.action === "select-training-day") {
    selectedTrainingDate = target.dataset.date;
    render();
  }
});

document.addEventListener("submit", async (event) => {
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
    const habits = readHabits(form);
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
      habits: habits.length ? habits : defaultHabitsForGoal(String(form.get("goal") || "")),
      measurementHistory: [
        {
          date: new Date().toISOString().slice(0, 10),
          assessmentType: "Avaliacao fisica",
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
    const habits = readHabits(form);
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
    student.habits = habits.length ? habits : defaultHabitsForGoal(student.goal);
    student.notes = form.get("notes").trim();
    student.lastCheckin = assessmentDate;
    student.measurementHistory = student.measurementHistory || [];
    student.measurementHistory.push(normalizeAssessmentEntry({
      date: assessmentDate,
      assessmentType: String(form.get("assessmentType") || "Reavaliacao"),
      ...measurements
    }, measurements, student.measurementHistory.length));

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
    setFormPending(event.target, true, "Enviando midias...");
    try {
      const exercises = await collectWorkoutExercises(event.target);
      if (!exercises.length) {
        toast("Adicione pelo menos um exercicio.");
        return;
      }
      const payload = {
        studentId: form.get("studentId"),
        name: form.get("name").trim(),
        focus: form.get("focus").trim(),
        frequency: form.get("frequency").trim(),
        createdAt: new Date().toISOString().slice(0, 10),
        exercises
      };
      if (editingWorkoutId) {
        const workout = workoutById(editingWorkoutId);
        if (!workout) {
          toast("Treino nao encontrado.");
          return;
        }
        Object.assign(workout, payload, { createdAt: workout.createdAt || payload.createdAt });
      } else {
        state.workouts.unshift({
          id: `work-${Date.now()}`,
          ...payload
        });
      }
      editingWorkoutId = null;
      saveData();
      toast("Treino salvo com sucesso.");
      render();
    } catch (error) {
      toast(error.message || "Nao foi possivel enviar a midia do exercicio.");
    } finally {
      setFormPending(event.target, false, "");
    }
  }

  if (event.target.id === "template-form") {
    const form = new FormData(event.target);
    setFormPending(event.target, true, "Enviando midias...");
    try {
      const exercises = await collectTemplateExercises(event.target);

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
    } catch (error) {
      toast(error.message || "Nao foi possivel enviar a midia do modelo.");
    } finally {
      setFormPending(event.target, false, "");
    }
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
        load: "",
        mediaUrl: exercise.mediaUrl || ""
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

  if (event.target.id === "weekly-checkin-form") {
    const user = currentUser();
    const student = studentById(user.studentId);
    const form = new FormData(event.target);
    const weekOf = String(form.get("weekOf"));
    const existing = weeklyCheckinFor(student.id, weekOf);
    const payload = {
      id: existing?.id || `wck-${Date.now()}`,
      studentId: student.id,
      weekOf,
      energy: Number(form.get("energy") || 0),
      recovery: Number(form.get("recovery") || 0),
      nutrition: Number(form.get("nutrition") || 0),
      pain: Number(form.get("pain") || 0),
      note: String(form.get("note") || "").trim()
    };
    if (existing) {
      Object.assign(existing, payload);
    } else {
      state.weeklyCheckins.unshift(payload);
    }
    saveData();
    toast("Check-in semanal salvo.");
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
  if (event.target.id === "student-workout-picker") {
    selectedTrainingWorkoutId = event.target.value;
    render();
    return;
  }

  if (event.target.id === "student-training-date") {
    selectedTrainingDate = event.target.value;
    render();
    return;
  }

  if (event.target.id === "comparison-student") {
    comparisonStudentId = event.target.value;
    comparisonFromDate = "";
    comparisonToDate = "";
    render();
    return;
  }

  if (event.target.id === "comparison-metric") {
    comparisonMetric = event.target.value;
    render();
    return;
  }

  if (event.target.id === "comparison-from") {
    comparisonFromDate = event.target.value;
    render();
    return;
  }

  if (event.target.id === "comparison-to") {
    comparisonToDate = event.target.value;
    render();
    return;
  }

  if (event.target.id === "load-comparison-from") {
    loadComparisonFromDate = event.target.value;
    render();
    return;
  }

  if (event.target.id === "load-comparison-to") {
    loadComparisonToDate = event.target.value;
    render();
    return;
  }

  if (event.target.classList.contains("habit-check")) {
    const input = event.target;
    const habitIndex = Number(input.dataset.habitIndex);
    const log = ensureHabitLog(input.dataset.studentId, input.dataset.date);
    const completed = new Set(log.completed || []);
    if (input.checked) completed.add(habitIndex);
    else completed.delete(habitIndex);
    log.completed = [...completed].sort((a, b) => a - b);
    saveData();
    render();
    return;
  }

  if (event.target.id === "load-exercise-filter") {
    loadExerciseFilter = event.target.value;
    loadComparisonFromDate = "";
    loadComparisonToDate = "";
    render();
    return;
  }

  if (event.target.classList.contains("exercise-load-input")) {
    const input = event.target;
    const exerciseIndex = Number(input.dataset.exerciseIndex);
    const log = ensureTrainingLog(input.dataset.studentId, input.dataset.date, input.dataset.workoutId);
    log.exerciseLoads = log.exerciseLoads || {};
    if (input.value.trim()) {
      log.exerciseLoads[exerciseIndex] = input.value.trim();
    } else {
      delete log.exerciseLoads[exerciseIndex];
    }
    selectedTrainingDate = input.dataset.date;
    saveData();
    return;
  }

  if (event.target.classList.contains("student-workout-load-input")) {
    const input = event.target;
    const workout = workoutById(input.dataset.workoutId);
    const exercise = workout?.exercises?.[Number(input.dataset.exerciseIndex)];
    if (!exercise) return;
    exercise.load = input.value.trim();
    saveData();
    return;
  }

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
