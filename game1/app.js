const NOTES = [
  { name: "C4", label: "دو", code: "KeyA", key: "A", freq: 261.63, kind: "white", color: "#1b8f8a" },
  { name: "C#4", label: "دو#", code: "KeyW", key: "W", freq: 277.18, kind: "black", color: "#df6658" },
  { name: "D4", label: "ر", code: "KeyS", key: "S", freq: 293.66, kind: "white", color: "#3f9d61" },
  { name: "D#4", label: "ر#", code: "KeyE", key: "E", freq: 311.13, kind: "black", color: "#e8a623" },
  { name: "E4", label: "می", code: "KeyD", key: "D", freq: 329.63, kind: "white", color: "#6c5ce7" },
  { name: "F4", label: "فا", code: "KeyF", key: "F", freq: 349.23, kind: "white", color: "#1b8f8a" },
  { name: "F#4", label: "فا#", code: "KeyT", key: "T", freq: 369.99, kind: "black", color: "#df6658" },
  { name: "G4", label: "سل", code: "KeyG", key: "G", freq: 392.0, kind: "white", color: "#3f9d61" },
  { name: "G#4", label: "سل#", code: "KeyY", key: "Y", freq: 415.3, kind: "black", color: "#e8a623" },
  { name: "A4", label: "لا", code: "KeyH", key: "H", freq: 440.0, kind: "white", color: "#6c5ce7" },
  { name: "A#4", label: "لا#", code: "KeyU", key: "U", freq: 466.16, kind: "black", color: "#df6658" },
  { name: "B4", label: "سی", code: "KeyJ", key: "J", freq: 493.88, kind: "white", color: "#e8a623" },
  { name: "C5", label: "دو", code: "KeyK", key: "K", freq: 523.25, kind: "white", color: "#1b8f8a" },
  { name: "C#5", label: "دو#", code: "KeyO", key: "O", freq: 554.37, kind: "black", color: "#df6658" },
  { name: "D5", label: "ر", code: "KeyL", key: "L", freq: 587.33, kind: "white", color: "#3f9d61" },
  { name: "D#5", label: "ر#", code: "KeyP", key: "P", freq: 622.25, kind: "black", color: "#e8a623" },
  { name: "E5", label: "می", code: "Semicolon", key: ";", freq: 659.25, kind: "white", color: "#6c5ce7" },
  { name: "F5", label: "فا", code: "Quote", key: "'", freq: 698.46, kind: "white", color: "#1b8f8a" },
  { name: "F#5", label: "فا#", code: "BracketLeft", key: "[", freq: 739.99, kind: "black", color: "#df6658" },
  { name: "G5", label: "سل", code: "BracketRight", key: "]", freq: 783.99, kind: "white", color: "#3f9d61" },
  { name: "G#5", label: "سل#", code: "Digit9", key: "9", freq: 830.61, kind: "black", color: "#e8a623" },
  { name: "A5", label: "لا", code: "Digit0", key: "0", freq: 880.0, kind: "white", color: "#6c5ce7" },
  { name: "A#5", label: "لا#", code: "Minus", key: "-", freq: 932.33, kind: "black", color: "#df6658" },
  { name: "B5", label: "سی", code: "Equal", key: "=", freq: 987.77, kind: "white", color: "#e8a623" },
];

// Right-hand melody from the supplied Panda score; repeat each marked section.
const pandaTheme = [
  ["C5", 1], ["C5", 1], ["C5", 1], ["E5", 1],
  ["D5", 1], ["D5", 1], ["D5", 1], ["F5", 1],
  ["E5", 1], ["E5", 1], ["D5", 1], ["D5", 1],
  ["C5", 4],
];
const pandaMiddle = [
  ["E5", 1], ["E5", 1], ["E5", 1], ["E5", 1],
  ["G5", 2], ["F5", 2],
  ["D5", 1], ["D5", 1], ["D5", 1], ["D5", 1],
  ["F5", 2], ["E5", 2],
];

const SONGS = {
  panda: {
    bpm: 96,
    sequence: [...pandaTheme, ...pandaTheme, ...pandaMiddle, ...pandaTheme, ...pandaMiddle, ...pandaTheme],
  },
  scale: {
    bpm: 64,
    sequence: [
      ["C4", 0.5],
      ["D4", 0.5],
      ["E4", 0.5],
      ["F4", 0.5],
      ["G4", 0.5],
      ["A4", 0.5],
      ["B4", 0.5],
      ["C5", 0.75],
      ["B4", 0.5],
      ["A4", 0.5],
      ["G4", 0.5],
      ["F4", 0.5],
      ["E4", 0.5],
      ["D4", 0.5],
      ["C4", 1],
    ],
  },
  twinkle: {
    bpm: 58,
    sequence: [
      ["C4", 1],
      ["C4", 1],
      ["G4", 1],
      ["G4", 1],
      ["A4", 1],
      ["A4", 1],
      ["G4", 2],
      ["F4", 1],
      ["F4", 1],
      ["E4", 1],
      ["E4", 1],
      ["D4", 1],
      ["D4", 1],
      ["C4", 2],
      ["G4", 1],
      ["G4", 1],
      ["F4", 1],
      ["F4", 1],
      ["E4", 1],
      ["E4", 1],
      ["D4", 2],
      ["G4", 1],
      ["G4", 1],
      ["F4", 1],
      ["F4", 1],
      ["E4", 1],
      ["E4", 1],
      ["D4", 2],
      ["C4", 1],
      ["C4", 1],
      ["G4", 1],
      ["G4", 1],
      ["A4", 1],
      ["A4", 1],
      ["G4", 2],
      ["F4", 1],
      ["F4", 1],
      ["E4", 1],
      ["E4", 1],
      ["D4", 1],
      ["D4", 1],
      ["C4", 2],
    ],
  },
  ode: {
    bpm: 62,
    sequence: [
      ["E4", 1],
      ["E4", 1],
      ["F4", 1],
      ["G4", 1],
      ["G4", 1],
      ["F4", 1],
      ["E4", 1],
      ["D4", 1],
      ["C4", 1],
      ["C4", 1],
      ["D4", 1],
      ["E4", 1],
      ["E4", 1.5],
      ["D4", 0.5],
      ["D4", 2],
      ["E4", 1],
      ["E4", 1],
      ["F4", 1],
      ["G4", 1],
      ["G4", 1],
      ["F4", 1],
      ["E4", 1],
      ["D4", 1],
      ["C4", 1],
      ["C4", 1],
      ["D4", 1],
      ["E4", 1],
      ["D4", 1.5],
      ["C4", 0.5],
      ["C4", 2],
    ],
  },
};

const HIT_WINDOW = 620;
const LEAD_IN = 5600;
const NOTE_LOOKAHEAD = 4;

const keyboard = document.querySelector("#keyboard");
const canvas = document.querySelector("#noteCanvas");
const ctx = canvas.getContext("2d");
const scoreEl = document.querySelector("#score");
const comboEl = document.querySelector("#combo");
const accuracyEl = document.querySelector("#accuracy");
const statusText = document.querySelector("#statusText");
const lastHit = document.querySelector("#lastHit");
const songSelect = document.querySelector("#songSelect");
const volumeControl = document.querySelector("#volume");
const sustainControl = document.querySelector("#sustain");
const startButton = document.querySelector("#startGame");
const modeButtons = Array.from(document.querySelectorAll("[data-mode]"));

const noteByName = new Map(NOTES.map((note) => [note.name, note]));
const noteByCode = new Map(NOTES.map((note) => [note.code, note]));
const keyElements = new Map();
const heldCodes = new Set();

const state = {
  mode: "learn",
  running: false,
  score: 0,
  combo: 0,
  hits: 0,
  attempts: 0,
  notes: [],
  endAt: 0,
  pulses: [],
  targetNames: new Set(),
};

let audioContext;
let masterGain;
let animationFrame = 0;
let lastCanvasWidth = 0;
let lastCanvasHeight = 0;

function buildKeyboard() {
  const whiteNotes = NOTES.filter((note) => note.kind === "white");
  keyboard.style.setProperty("--white-count", whiteNotes.length);
  const whiteKeys = document.createElement("div");
  whiteKeys.className = "white-keys";
  whiteKeys.style.setProperty("--white-count", whiteNotes.length);

  whiteNotes.forEach((note) => {
    whiteKeys.appendChild(createKey(note, "white-key"));
  });

  keyboard.appendChild(whiteKeys);

  NOTES.filter((note) => note.kind === "black").forEach((note) => {
    const previousWhiteCount = NOTES.slice(0, NOTES.indexOf(note)).filter((item) => item.kind === "white").length;
    const key = createKey(note, "black-key");
    key.style.setProperty("--left", `${(previousWhiteCount / whiteNotes.length) * 100}%`);
    keyboard.appendChild(key);
  });
}

function createKey(note, className) {
  const key = document.createElement("button");
  key.type = "button";
  key.className = `key ${className}`;
  key.dataset.note = note.name;
  key.setAttribute("aria-label", `${note.label} ${note.name}`);

  key.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    key.setPointerCapture(event.pointerId);
    pressNote(note.name);
  });

  key.addEventListener("pointerup", (event) => {
    event.preventDefault();
    releaseNote(note.name);
  });

  key.addEventListener("pointercancel", () => {
    cancelLessonHold();
    releaseNote(note.name);
  });
  key.addEventListener("lostpointercapture", () => releaseNote(note.name));
  keyElements.set(note.name, key);
  return key;
}

function ensureAudio() {
  if (!audioContext) {
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioCtor();
    masterGain = audioContext.createGain();
    masterGain.gain.value = Number(volumeControl.value) / 100;
    masterGain.connect(audioContext.destination);
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
}

function playNote(noteName, velocity = 1, heldDuration = 0) {
  const note = noteByName.get(noteName);
  if (!note) return;

  ensureAudio();

  const now = audioContext.currentTime;
  const duration = heldDuration || (sustainControl.checked ? 1.18 : 0.58);
  const filter = audioContext.createBiquadFilter();
  const envelope = audioContext.createGain();
  const outputLevel = 0.2 * velocity;

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(5200, now);
  filter.frequency.exponentialRampToValueAtTime(1600, now + duration);

  envelope.gain.setValueAtTime(0.0001, now);
  envelope.gain.exponentialRampToValueAtTime(outputLevel, now + 0.012);
  envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  filter.connect(envelope);
  envelope.connect(masterGain);

  [
    { type: "triangle", ratio: 1, gain: 1 },
    { type: "sine", ratio: 2, gain: 0.33 },
    { type: "sine", ratio: 3, gain: 0.12 },
  ].forEach((partial) => {
    const oscillator = audioContext.createOscillator();
    const partialGain = audioContext.createGain();
    oscillator.type = partial.type;
    oscillator.frequency.setValueAtTime(note.freq * partial.ratio, now);
    oscillator.detune.setValueAtTime(partial.ratio === 1 ? -2 : 2, now);
    partialGain.gain.setValueAtTime(partial.gain, now);
    oscillator.connect(partialGain);
    partialGain.connect(filter);
    oscillator.start(now);
    oscillator.stop(now + duration + 0.05);
  });
  let released = false;
  return () => {
    if (released) return;
    released = true;
    const releaseAt = audioContext.currentTime;
    if (typeof envelope.gain.cancelAndHoldAtTime === "function") {
      envelope.gain.cancelAndHoldAtTime(releaseAt);
    } else {
      const elapsed = Math.max(0, releaseAt - now);
      const level = elapsed < 0.012
        ? 0.0001 * Math.pow(outputLevel / 0.0001, elapsed / 0.012)
        : outputLevel * Math.pow(0.0001 / outputLevel, Math.min(1, (elapsed - 0.012) / (duration - 0.012)));
      envelope.gain.cancelScheduledValues(releaseAt);
      envelope.gain.setValueAtTime(level, releaseAt);
    }
    envelope.gain.setTargetAtTime(0.0001, releaseAt, 0.025);
  };
}

const lessonVoices = new Map();
function pressNote(noteName) {
  const note = noteByName.get(noteName);
  if (!note) return;

  if (state.mode === "learn" && lesson.active && !lesson.preview && SONGS[songSelect.value].sequence[lesson.index][1] > 1) {
    lessonVoices.get(noteName)?.();
    lessonVoices.set(noteName, playNote(noteName, 1, lessonDuration() / 1000 + 0.3));
  } else playNote(noteName);
  keyElements.get(noteName)?.classList.add("is-down");
  state.pulses.push({ noteName, startedAt: performance.now(), color: note.color });

  if (state.mode === "learn") advanceLesson(noteName);

  if (state.mode === "game" && state.running) {
    hitGameNote(noteName);
  }
}

function releaseNote(noteName) {
  lessonVoices.get(noteName)?.();
  lessonVoices.delete(noteName);
  keyElements.get(noteName)?.classList.remove("is-down");
  if (state.mode === "learn") finishLessonHold(noteName);
}

function setMode(mode) {
  stopPreview();
  lesson.active = false;
  if (state.running) stopGame();
  clearLessonKeys();
  startButton.textContent = "شروع";
  document.body.classList.toggle("learning-mode", mode === "learn");
  state.mode = mode;
  modeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === mode);
  });

  if (mode === "free" && state.running) {
    stopGame("آزاد");
  } else {
    statusText.textContent = mode === "game" ? "تمرین ریتم" : "آماده";
  }
}

function resetStats() {
  state.score = 0;
  state.combo = 0;
  state.hits = 0;
  state.attempts = 0;
  updateStats();
  lastHit.textContent = "-";
}

function updateStats() {
  scoreEl.textContent = String(state.score);
  comboEl.textContent = String(state.combo);
  const accuracy = state.attempts === 0 ? 100 : Math.round((state.hits / state.attempts) * 100);
  accuracyEl.textContent = `${accuracy}%`;
}

function makeSongNotes(songKey) {
  const song = SONGS[songKey] ?? SONGS.scale;
  const beatLength = 60000 / (song.bpm * Number(document.querySelector("#tempo").value));
  let beat = 0;

  return song.sequence.map(([noteName, duration], index) => {
    const event = {
      id: `${songKey}-${index}-${noteName}`,
      noteName,
      time: 0,
      beat,
      status: "pending",
    };
    beat += duration;
    event.offset = event.beat * beatLength;
    return event;
  });
}

function startGame() {
  stopPreview();
  if (state.mode === "learn") { toggleLesson(); return; }
  if (state.mode === "free") { setMode("learn"); toggleLesson(); return; }
  ensureAudio();

  if (state.running) {
    stopGame("توقف");
    return;
  }

  resetStats();
  setMode("game");

  const now = performance.now();
  state.notes = makeSongNotes(songSelect.value).map((note) => ({
    ...note,
    time: now + LEAD_IN + note.offset,
  }));
  state.running = true;
  state.endAt = state.notes[state.notes.length - 1].time + 1600;
  startButton.textContent = "توقف";
  statusText.textContent = "بازی";
  updateTargets();
}

function stopGame(label = "توقف") {
  state.running = false;
  state.notes = [];
  state.targetNames.clear();
  updateTargets();
  startButton.textContent = "شروع";
  statusText.textContent = label;
}

function hitGameNote(noteName) {
  const now = performance.now();
  let bestMatch = null;
  let bestDistance = Number.POSITIVE_INFINITY;

  state.notes.forEach((note) => {
    if (note.status !== "pending" || note.noteName !== noteName) return;
    const distance = Math.abs(now - note.time);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestMatch = note;
    }
  });

  if (bestMatch && bestDistance <= HIT_WINDOW) {
    bestMatch.status = "hit";
    state.hits += 1;
    state.attempts += 1;
    state.combo += 1;

    const tier = getHitTier(bestDistance);
    state.score += tier.points + Math.min(state.combo * 3, 120);
    lastHit.textContent = `${tier.label} ${bestMatch.noteName}`;
    statusText.textContent = "بازی";
  } else {
    state.combo = 0;
    state.attempts += 1;
    lastHit.textContent = "خارج";
  }

  updateStats();
  updateTargets();
}

function getHitTier(distance) {
  if (distance <= 70) return { label: "عالی", points: 120 };
  if (distance <= 150) return { label: "خوب", points: 80 };
  return { label: "قبول", points: 45 };
}

function updateTargets() {
  keyElements.forEach((key) => key.classList.remove("is-target"));
  state.targetNames.clear();

  if (!state.running) return;

  state.notes
    .filter((note) => note.status === "pending")
    .slice(0, NOTE_LOOKAHEAD)
    .forEach((note) => {
      state.targetNames.add(note.noteName);
      keyElements.get(note.noteName)?.classList.add("is-target");
    });
}

function updateMisses(now) {
  if (!state.running) return;

  let missed = false;
  state.notes.forEach((note) => {
    if (note.status === "pending" && now - note.time > HIT_WINDOW) {
      note.status = "miss";
      state.combo = 0;
      state.attempts += 1;
      lastHit.textContent = `از دست رفت ${note.noteName}`;
      missed = true;
    }
  });

  if (missed) {
    updateStats();
    updateTargets();
  }

  if (state.notes.length > 0 && now > state.endAt && state.notes.every((note) => note.status !== "pending")) {
    state.running = false;
    startButton.textContent = "شروع";
    statusText.textContent = "پایان";
    updateTargets();
  }
}

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  const displayWidth = Math.max(1, Math.floor(rect.width));
  const displayHeight = Math.max(1, Math.floor(rect.height));
  const width = Math.floor(displayWidth * ratio);
  const height = Math.floor(displayHeight * ratio);

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }

  if (lastCanvasWidth !== displayWidth || lastCanvasHeight !== displayHeight) {
    lastCanvasWidth = displayWidth;
    lastCanvasHeight = displayHeight;
  }

  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  return { width: displayWidth, height: displayHeight };
}

function drawFrame(now) {
  const size = resizeCanvas();
  updateMisses(now);
  drawBackground(size.width, size.height);

  if (state.mode === "game") {
    drawGameNotes(now, size.width, size.height);
  } else {
    drawFreePlay(size.width, size.height, now);
  }

  animationFrame = requestAnimationFrame(drawFrame);
}

function drawBackground(width, height) {
  const laneWidth = width / NOTES.length;
  const hitY = getHitY(height);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#171b20";
  ctx.fillRect(0, 0, width, height);

  NOTES.forEach((note, index) => {
    const x = index * laneWidth;
    ctx.fillStyle = index % 2 === 0 ? "rgba(255,255,255,0.035)" : "rgba(255,255,255,0.012)";
    ctx.fillRect(x, 0, laneWidth, height);

    ctx.strokeStyle = note.kind === "black" ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.14)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + 0.5, 0);
    ctx.lineTo(x + 0.5, height);
    ctx.stroke();

    if (laneWidth >= 24) {
      ctx.fillStyle = note.kind === "black" ? "rgba(255,255,255,0.58)" : "rgba(255,255,255,0.78)";
      ctx.font = "700 12px Tahoma, Segoe UI, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.direction = "ltr";
      ctx.fillText(note.name.replace("#", "♯"), x + laneWidth / 2, height - 22);
    }
  });

  ctx.strokeStyle = "rgba(232, 166, 35, 0.72)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, hitY);
  ctx.lineTo(width, hitY);
  ctx.stroke();
}

function drawFreePlay(width, height, now) {
  const laneWidth = width / NOTES.length;
  const hitY = getHitY(height);

  state.pulses = state.pulses.filter((pulse) => now - pulse.startedAt < 780);

  state.pulses.forEach((pulse) => {
    const noteIndex = NOTES.findIndex((note) => note.name === pulse.noteName);
    const age = (now - pulse.startedAt) / 780;
    const alpha = Math.max(0, 1 - age);
    const x = noteIndex * laneWidth + laneWidth / 2;
    const barHeight = 36 + alpha * height * 0.42;

    ctx.fillStyle = withAlpha(pulse.color, 0.18 + alpha * 0.32);
    roundedRect(ctx, x - laneWidth * 0.32, hitY - barHeight, laneWidth * 0.64, barHeight, 8);
    ctx.fill();

    ctx.strokeStyle = withAlpha(pulse.color, alpha * 0.75);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, hitY, 18 + age * 58, 0, Math.PI * 2);
    ctx.stroke();
  });

  const waveY = height * 0.28;
  ctx.strokeStyle = "rgba(27, 143, 138, 0.5)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let x = 0; x <= width; x += 12) {
    const y = waveY + Math.sin(x * 0.025 + now * 0.002) * 13 + Math.sin(x * 0.011 + now * 0.0012) * 8;
    if (x === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.stroke();
}

function drawGameNotes(now, width, height) {
  const laneWidth = width / NOTES.length;
  const hitY = getHitY(height);
  const fallSpeed = hitY / LEAD_IN;

  state.notes.forEach((event) => {
    if (event.status !== "pending") return;

    const noteIndex = NOTES.findIndex((note) => note.name === event.noteName);
    const note = noteByName.get(event.noteName);
    const y = hitY - (event.time - now) * fallSpeed;
    const noteWidth = Math.max(12, laneWidth * 0.72);
    const noteHeight = Math.max(20, Math.min(42, laneWidth * 0.86));

    if (y < -noteHeight || y > height + noteHeight) return;

    const x = noteIndex * laneWidth + laneWidth / 2 - noteWidth / 2;
    const distance = Math.abs(event.time - now);
    const glow = distance < HIT_WINDOW ? 0.35 : 0.14;

    ctx.shadowColor = withAlpha(note.color, glow);
    ctx.shadowBlur = distance < HIT_WINDOW ? 18 : 8;
    ctx.fillStyle = note.color;
    roundedRect(ctx, x, y - noteHeight / 2, noteWidth, noteHeight, 8);
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.fillStyle = "rgba(255,255,255,0.92)";
    ctx.font = `800 ${laneWidth < 24 ? 9 : 12}px Tahoma, Segoe UI, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.direction = "ltr";
    ctx.fillText(event.noteName.replace("#", "♯"), x + noteWidth / 2, y);
  });
}

function getHitY(height) {
  return height - 72;
}

function roundedRect(context, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + width, y, x + width, y + height, r);
  context.arcTo(x + width, y + height, x, y + height, r);
  context.arcTo(x, y + height, x, y, r);
  context.arcTo(x, y, x + width, y, r);
  context.closePath();
}

function withAlpha(hex, alpha) {
  const normalized = hex.replace("#", "");
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function handleKeyDown(event) {
  if (event.target instanceof Element && event.target.matches("input, select, textarea")) return;

  const note = noteByCode.get(event.code);
  if (!note || heldCodes.has(event.code)) return;

  event.preventDefault();
  heldCodes.add(event.code);
  pressNote(note.name);
}

function handleKeyUp(event) {
  const note = noteByCode.get(event.code);
  if (!note) return;

  event.preventDefault();
  heldCodes.delete(event.code);
  releaseNote(note.name);
}

function bindEvents() {
  modeButtons.forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });

  startButton.addEventListener("click", startGame);

  volumeControl.addEventListener("input", () => {
    if (masterGain) {
      masterGain.gain.value = Number(volumeControl.value) / 100;
    }
  });

  songSelect.addEventListener("change", () => {
    stopPreview();
    lesson.active = false;
    lesson.index = 0;
    clearLessonKeys();
    startButton.textContent = "شروع";
    renderLesson();
    if (state.running) {
      stopGame("آهنگ");
    }
  });

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
  window.addEventListener("blur", () => {
    cancelLessonHold();
    lessonVoices.forEach(stop => stop());
    lessonVoices.clear();
    heldCodes.clear();
    keyElements.forEach((key) => key.classList.remove("is-down"));
  });
}

const lesson = { active: false, index: 0, timer: null, preview: false, hold: null, holdTimer: null };
const sequenceEl = document.querySelector("#noteSequence");
// Keep the lesson beside the instrument, below the feedback and above the keys.
document.querySelector(".piano-wrap").before(document.querySelector("#lessonPanel"));
const listenButton = document.querySelector("#listen");
function clearLessonKeys() {
  cancelLessonHold();
  keyElements.forEach(key => key.classList.remove("lesson-target"));
}
function cancelLessonHold() {
  clearInterval(lesson.holdTimer);
  lessonVoices.forEach(stop => stop());
  lessonVoices.clear();
  lesson.hold = null;
  document.querySelector("#holdProgress").value = 0;
}
function lessonDuration() {
  const song = SONGS[songSelect.value];
  return song.sequence[lesson.index][1] * 60000 / (song.bpm * Number(document.querySelector("#tempo").value));
}
function finishLessonHold(name) {
  const hold = lesson.hold;
  if (!hold || hold.name !== name) return;
  const elapsed = performance.now() - hold.start;
  const tolerance = Math.max(120, hold.duration * 0.25);
  cancelLessonHold();
  if (elapsed < hold.duration - tolerance) {
    state.combo = 0;
    lastHit.textContent = "این نت چند ضرب است؛ کمی بیشتر نگه دار";
    statusText.textContent = "کشش را دوباره تمرین کن";
    updateStats();
    return;
  }
  completeLessonNote();
}
function renderLesson() {
  const sequence = SONGS[songSelect.value].sequence;
  const current = sequence[lesson.index];
  document.querySelector("#lessonProgress").max = sequence.length;
  document.querySelector("#lessonProgress").value = lesson.index;
  document.querySelector("#nextNote").textContent = current ? `${noteByName.get(current[0]).label} · \u2066${current[0]}\u2069` : "آفرین!";
  document.querySelector("#noteHint").textContent = current ? `کلید \u2066${noteByName.get(current[0]).key}\u2069 · کشش ${current[1].toLocaleString("fa-IR")} ضرب` : "درس کامل شد؛ دوباره تمرین کن یا آهنگ دیگری انتخاب کن.";
  document.querySelector("#lessonSummary").textContent = `${lesson.index.toLocaleString("fa-IR")} از ${sequence.length.toLocaleString("fa-IR")} نت · ملودی دست راست`;
  sequenceEl.replaceChildren(...sequence.map(([name, beats], index) => {
    const chip = document.createElement("span");
    chip.className = `note-chip${index === lesson.index ? " current" : index < lesson.index ? " completed" : ""}`;
    chip.textContent = `${noteByName.get(name).label} \u2066${name}\u2069 · ${beats.toLocaleString("fa-IR")}`;
    if (index === lesson.index) chip.setAttribute("aria-current", "step");
    return chip;
  }));
  const activeChip = sequenceEl.querySelector('[aria-current="step"]');
  if (activeChip) {
    sequenceEl.scrollTo({
      left: activeChip.offsetLeft - (sequenceEl.clientWidth - activeChip.offsetWidth) / 2,
      behavior: "instant",
    });
  }
  clearLessonKeys();
  if (current && (lesson.active || lesson.preview)) keyElements.get(current[0]).classList.add("lesson-target");
}
function toggleLesson() {
  if (lesson.active) {
    lesson.active = false;
    clearLessonKeys();
    startButton.textContent = "ادامه";
    statusText.textContent = "تمرین متوقف شد";
    return;
  }
  if (lesson.index >= SONGS[songSelect.value].sequence.length) lesson.index = 0;
  if (lesson.index === 0) resetStats();
  lesson.active = true;
  startButton.textContent = "مکث";
  statusText.textContent = "کلاویهٔ روشن را بنواز؛ درس منتظر توست";
  renderLesson();
}
function advanceLesson(name) {
  if (!lesson.active || lesson.preview) return;
  if (lesson.hold) return;
  state.attempts++;
  if (name !== SONGS[songSelect.value].sequence[lesson.index][0]) {
    state.combo = 0;
    lastHit.textContent = "دوباره تلاش کن؛ کلاویهٔ روشن راهنمای توست";
    updateStats();
    return;
  }
  if (SONGS[songSelect.value].sequence[lesson.index][1] <= 1) {
    completeLessonNote();
    return;
  }
  const duration = lessonDuration();
  lesson.hold = { name, start: performance.now(), duration };
  statusText.textContent = "نت چندضربی است؛ تا پر شدن نوار نگه دار";
  document.querySelector("#holdProgress").max = duration;
  lesson.holdTimer = setInterval(() => {
    if (!lesson.hold) return;
    const elapsed = performance.now() - lesson.hold.start;
    document.querySelector("#holdProgress").value = Math.min(elapsed, duration);
    if (elapsed >= duration) {
      cancelLessonHold();
      completeLessonNote();
    }
  }, 30);
}
function completeLessonNote() {
  state.hits++;
  state.score++;
  state.combo++;
  lesson.index++;
  lastHit.textContent = "درست بود!";
  statusText.textContent = "نت بعدی را بنواز؛ فقط نت‌های چندضربی نیاز به نگه‌داشتن دارند";
  updateStats();
  if (lesson.index === SONGS[songSelect.value].sequence.length) {
    if (document.querySelector("#repeatLesson").checked) lesson.index = 0;
    else {
      lesson.active = false;
      startButton.textContent = "تمرین دوباره";
      statusText.textContent = "درس کامل شد";
    }
  }
  renderLesson();
}
function stopPreview() {
  clearTimeout(lesson.timer);
  if (!lesson.preview) return;
  lesson.preview = false;
  lesson.index = lesson.savedIndex;
  listenButton.textContent = "شنیدن نمونه";
  statusText.textContent = "آمادهٔ تمرین";
  renderLesson();
}
function previewLesson() {
  if (lesson.preview) { stopPreview(); return; }
  if (state.running) stopGame();
  lesson.active = false;
  startButton.textContent = "شروع";
  lesson.savedIndex = lesson.index;
  lesson.index = 0;
  lesson.preview = true;
  listenButton.textContent = "توقف نمونه";
  statusText.textContent = "به ملودی گوش بده و کلاویهٔ روشن را دنبال کن";
  ensureAudio();
  function next() {
    if (!lesson.preview) return;
    const song = SONGS[songSelect.value];
    const item = song.sequence[lesson.index];
    if (!item) { stopPreview(); return; }
    renderLesson();
    playNote(item[0], 1, item[1] * 60 / (song.bpm * Number(document.querySelector("#tempo").value)));
    lesson.timer = setTimeout(() => { lesson.index++; next(); }, item[1] * 60000 / (song.bpm * Number(document.querySelector("#tempo").value)));
  }
  next();
}
listenButton.addEventListener("click", previewLesson);
document.querySelector("#tempo").addEventListener("change", () => {
  cancelLessonHold();
  stopPreview();
  if (state.running) stopGame("سرعت تغییر کرد؛ تمرین را دوباره شروع کن");
});
buildKeyboard();
bindEvents();
renderLesson();
updateStats();
animationFrame = requestAnimationFrame(drawFrame);

window.addEventListener("beforeunload", () => {
  cancelAnimationFrame(animationFrame);
});
