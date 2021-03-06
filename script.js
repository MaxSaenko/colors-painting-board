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
];
const SQUARES_NUMBER = 800;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", setColor);
  square.addEventListener("mouseleave", removeColor);
  board.append(square);
}

function setColor(event) {
  const color = getRandomColor();
  event.target.style.backgroundColor = color;
  event.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  event.target.style.backgroundColor = "#1d1d1d";
  event.target.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
