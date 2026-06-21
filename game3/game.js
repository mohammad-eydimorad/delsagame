const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

const images = [
  {
    id: "anime-violet",
    title: "چشم‌های بنفش",
    type: "انیمه دخترانه",
    src: "assets/anime-violet.png",
    thumb: "assets/anime-violet.png",
  },
  {
    id: "anime-butterfly-garden",
    title: "باغ پروانه‌ها",
    type: "انیمه دخترانه",
    src: "assets/anime-butterfly-garden.png",
    thumb: "assets/anime-butterfly-garden.png",
  },
  {
    id: "flower-butterflies",
    title: "گل و پروانه",
    type: "گل و پروانه",
    src: "assets/flower-butterflies.png",
    thumb: "assets/flower-butterflies.png",
  },
  {
    id: "moonlit-blossoms",
    title: "شکوفه‌های مهتابی",
    type: "منظره انیمه‌ای",
    src: "assets/moonlit-blossoms.png",
    thumb: "assets/moonlit-blossoms.png",
  },
];

const state = {
  size: 4,
  imageIndex: 0,
  board: [],
  pieces: [],
  selectedPiece: null,
  selectedSlot: null,
  moves: 0,
  seconds: 0,
  timerId: null,
  solved: false,
};

const board = document.getElementById("board");
const pieceTray = document.getElementById("pieceTray");
const imagePicker = document.getElementById("imagePicker");
const movesEl = document.getElementById("moves");
const timerEl = document.getElementById("timer");
const progressEl = document.getElementById("progress");
const remainingPiecesEl = document.getElementById("remainingPieces");
const shuffleButton = document.getElementById("shuffleButton");
const solveButton = document.getElementById("solveButton");
const previewButton = document.getElementById("previewButton");
const previewDialog = document.getElementById("previewDialog");
const closePreview = document.getElementById("closePreview");
const previewImage = document.getElementById("previewImage");
const currentImage = document.getElementById("currentImage");
const imageType = document.getElementById("imageType");
const imageTitle = document.getElementById("imageTitle");
const winToast = document.getElementById("winToast");

function toPersianNumber(value) {
  return String(value).replace(/\d/g, (digit) => persianDigits[Number(digit)]);
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return toPersianNumber(`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`);
}

function currentPhoto() {
  return images[state.imageIndex];
}

function pieceCount() {
  return state.size * state.size;
}

function createPieceSet() {
  return Array.from({ length: pieceCount() }, (_, index) => index);
}

function shuffleArray(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

function tileBackgroundPosition(tileValue) {
  const size = state.size;
  const x = tileValue % size;
  const y = Math.floor(tileValue / size);
  const xPercent = size === 1 ? 0 : (x / (size - 1)) * 100;
  const yPercent = size === 1 ? 0 : (y / (size - 1)) * 100;

  return `${xPercent}% ${yPercent}%`;
}

function applyTileImage(element, tileValue) {
  const photo = currentPhoto();
  element.style.setProperty("--tile-image", `url("${photo.src}")`);
  element.style.setProperty("--tile-size", `${state.size * 100}% ${state.size * 100}%`);
  element.style.setProperty("--tile-position", tileBackgroundPosition(tileValue));
}

function startTimer() {
  if (state.timerId) return;

  state.timerId = window.setInterval(() => {
    state.seconds += 1;
    timerEl.textContent = formatTime(state.seconds);
  }, 1000);
}

function stopTimer() {
  window.clearInterval(state.timerId);
  state.timerId = null;
}

function resetCounters() {
  stopTimer();
  state.moves = 0;
  state.seconds = 0;
  state.solved = false;
  movesEl.textContent = toPersianNumber(0);
  timerEl.textContent = formatTime(0);
  winToast.classList.remove("show");
}

function updateHud() {
  const placedCount = state.board.filter((piece) => piece !== null).length;
  const total = pieceCount();

  progressEl.textContent = `${toPersianNumber(placedCount)}/${toPersianNumber(total)}`;
  remainingPiecesEl.textContent = toPersianNumber(state.pieces.length);
  movesEl.textContent = toPersianNumber(state.moves);
}

function syncSelectedPiece() {
  const hasSelection = state.selectedPiece !== null;
  board.classList.toggle("has-selection", hasSelection);

  document.querySelectorAll(".piece").forEach((piece) => {
    const isSelected = state.selectedSlot === null && Number(piece.dataset.piece) === state.selectedPiece;
    piece.classList.toggle("selected", isSelected);
    piece.setAttribute("aria-pressed", String(isSelected));
  });

  document.querySelectorAll(".slot").forEach((slot) => {
    const isSelected = Number(slot.dataset.index) === state.selectedSlot;
    slot.classList.toggle("selected", isSelected);
  });
}

function clearSelection() {
  state.selectedPiece = null;
  state.selectedSlot = null;
}

function selectTrayPiece(pieceValue) {
  if (state.solved) return;
  const isSelected = state.selectedSlot === null && state.selectedPiece === pieceValue;
  state.selectedPiece = isSelected ? null : pieceValue;
  state.selectedSlot = null;
  syncSelectedPiece();
}

function selectBoardPiece(slotIndex) {
  if (state.solved || state.board[slotIndex] === null) return;
  const isSelected = state.selectedSlot === slotIndex;
  state.selectedPiece = isSelected ? null : state.board[slotIndex];
  state.selectedSlot = isSelected ? null : slotIndex;
  syncSelectedPiece();
}

function createTileElement(pieceValue, className, tagName = "button") {
  const piece = document.createElement(tagName);
  if (tagName === "button") {
    piece.type = "button";
  }
  piece.className = className;
  piece.dataset.piece = pieceValue;
  piece.dataset.number = toPersianNumber(pieceValue + 1);
  piece.setAttribute("aria-label", `قطعه ${toPersianNumber(pieceValue + 1)}`);
  applyTileImage(piece, pieceValue);
  return piece;
}

function renderBoard() {
  board.style.setProperty("--size", state.size);
  board.replaceChildren();

  state.board.forEach((pieceValue, slotIndex) => {
    const slot = document.createElement("button");
    slot.type = "button";
    slot.className = "slot";
    slot.dataset.index = slotIndex;
    slot.setAttribute("aria-label", `جایگاه ${toPersianNumber(slotIndex + 1)}`);
    applyTileImage(slot, slotIndex);
    slot.addEventListener("click", () => handleSlotClick(slotIndex));

    slot.addEventListener("dragover", (event) => {
      event.preventDefault();
      slot.classList.add("drop-target");
    });

    slot.addEventListener("dragleave", () => {
      slot.classList.remove("drop-target");
    });

    slot.addEventListener("drop", (event) => {
      event.preventDefault();
      slot.classList.remove("drop-target");
      placeSelectedAt(slotIndex);
    });

    if (pieceValue !== null) {
      const placedPiece = createTileElement(pieceValue, "placed-piece", "div");
      placedPiece.setAttribute("aria-hidden", "true");
      slot.classList.add("filled");
      slot.draggable = true;
      slot.setAttribute(
        "aria-label",
        `جایگاه ${toPersianNumber(slotIndex + 1)}، قطعه ${toPersianNumber(pieceValue + 1)}`,
      );
      slot.addEventListener("dragstart", (event) => {
        state.selectedPiece = pieceValue;
        state.selectedSlot = slotIndex;
        syncSelectedPiece();
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", String(pieceValue));
      });
      slot.appendChild(placedPiece);
    }

    board.appendChild(slot);
  });
}

function renderPieceTray() {
  pieceTray.style.setProperty("--size", state.size);
  pieceTray.replaceChildren();

  state.pieces.forEach((pieceValue) => {
    const piece = createTileElement(pieceValue, "piece");
    piece.draggable = true;
    piece.setAttribute("aria-pressed", "false");

    piece.addEventListener("click", () => selectTrayPiece(pieceValue));

    piece.addEventListener("dragstart", (event) => {
      state.selectedPiece = pieceValue;
      state.selectedSlot = null;
      syncSelectedPiece();
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", String(pieceValue));
    });

    piece.addEventListener("dragend", () => {
      document.querySelectorAll(".drop-target").forEach((slot) => slot.classList.remove("drop-target"));
    });

    pieceTray.appendChild(piece);
  });

  if (state.pieces.length === 0) {
    const done = document.createElement("div");
    done.className = "pieces-empty";
    done.textContent = "همه قطعه‌ها چسبیدند";
    pieceTray.appendChild(done);
  }
}

function renderImagePicker() {
  imagePicker.replaceChildren();

  images.forEach((photo, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `image-choice${index === state.imageIndex ? " active" : ""}`;
    button.setAttribute("aria-label", `${photo.type}، ${photo.title}`);

    const thumbnail = document.createElement("img");
    thumbnail.src = photo.thumb;
    thumbnail.alt = "";
    thumbnail.loading = "lazy";

    const text = document.createElement("div");
    const title = document.createElement("strong");
    const type = document.createElement("span");
    title.textContent = photo.title;
    type.textContent = photo.type;
    text.append(title, type);

    const check = document.createElement("span");
    check.className = "check";
    check.textContent = "✓";

    button.append(thumbnail, text, check);
    button.addEventListener("click", () => {
      state.imageIndex = index;
      newGame();
    });
    imagePicker.appendChild(button);
  });
}

function renderCurrentImage() {
  const photo = currentPhoto();
  currentImage.src = photo.thumb;
  currentImage.alt = photo.title;
  previewImage.src = photo.src;
  previewImage.alt = photo.title;
  imageType.textContent = photo.type;
  imageTitle.textContent = photo.title;
}

function renderAll() {
  renderBoard();
  renderPieceTray();
  renderImagePicker();
  renderCurrentImage();
  updateHud();
  syncSelectedPiece();

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function handleSlotClick(slotIndex) {
  if (state.solved) return;

  if (state.selectedPiece === null) {
    selectBoardPiece(slotIndex);
    return;
  }

  if (state.selectedSlot === slotIndex) {
    clearSelection();
    syncSelectedPiece();
    return;
  }

  placeSelectedAt(slotIndex);
}

function placeSelectedAt(slotIndex) {
  if (state.solved || state.selectedPiece === null) return;
  if (state.selectedSlot === slotIndex) {
    clearSelection();
    syncSelectedPiece();
    return;
  }
  if (state.selectedSlot === null && !state.pieces.includes(state.selectedPiece)) return;

  startTimer();
  state.moves += 1;

  const movingPiece = state.selectedPiece;
  const originSlot = state.selectedSlot;
  const targetPiece = state.board[slotIndex];

  if (originSlot === null) {
    state.pieces = state.pieces.filter((piece) => piece !== movingPiece);
    if (targetPiece !== null) {
      state.pieces.push(targetPiece);
    }
  } else {
    state.board[originSlot] = targetPiece;
  }

  state.board[slotIndex] = movingPiece;
  clearSelection();
  renderAll();

  if (isSolved()) {
    state.solved = true;
    stopTimer();
    winToast.classList.add("show");
    window.setTimeout(() => winToast.classList.remove("show"), 3200);
  }
}

function isSolved() {
  return state.pieces.length === 0 && state.board.every((pieceValue, index) => pieceValue === index);
}

function newGame() {
  resetCounters();
  state.board = Array(pieceCount()).fill(null);
  state.pieces = shuffleArray(createPieceSet());
  clearSelection();
  renderAll();
}

function solvePuzzle() {
  resetCounters();
  state.board = createPieceSet();
  state.pieces = [];
  clearSelection();
  state.solved = true;
  renderAll();
}

function setSize(size) {
  state.size = size;
  document.querySelectorAll(".segment").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.size) === size);
  });
  newGame();
}

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => setSize(Number(button.dataset.size)));
});

shuffleButton.addEventListener("click", newGame);
solveButton.addEventListener("click", solvePuzzle);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.selectedPiece !== null) {
    clearSelection();
    syncSelectedPiece();
  }
});

pieceTray.addEventListener("dragover", (event) => {
  if (state.selectedSlot !== null) {
    event.preventDefault();
  }
});

pieceTray.addEventListener("drop", (event) => {
  event.preventDefault();
  returnSelectedToTray();
});

pieceTray.addEventListener("click", (event) => {
  if (event.target === pieceTray || event.target.classList.contains("pieces-empty")) {
    returnSelectedToTray();
  }
});

function returnSelectedToTray() {
  if (state.solved || state.selectedPiece === null || state.selectedSlot === null) return;

  startTimer();
  state.moves += 1;
  state.board[state.selectedSlot] = null;
  if (!state.pieces.includes(state.selectedPiece)) {
    state.pieces.push(state.selectedPiece);
  }
  clearSelection();
  renderAll();
}

previewButton.addEventListener("click", () => {
  if (typeof previewDialog.showModal === "function") {
    previewDialog.showModal();
  }
});

closePreview.addEventListener("click", () => previewDialog.close());

previewDialog.addEventListener("click", (event) => {
  if (event.target === previewDialog) {
    previewDialog.close();
  }
});

newGame();
