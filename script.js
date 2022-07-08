const board = document.getElementById("board");
const colors = [
  "#dcf3fc",
  "#c0ebfc",
  "#9edef7",
  "#7ad2f5",
  "#4ec5f5",
  "#2abcf7",
  "#07b0f5",
  "#f6fccf",
  "#effaaa",
  "#e1f084",
  "#ddf257",
  "#d7f229",
  "#9db504",
];
const SQUARES_NUMBER = 800;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
