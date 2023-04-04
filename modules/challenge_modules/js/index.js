import { calculate } from "./main.js";
import { copyClipBoard } from "./main.js";
import { switchTheme } from "./theme.js";
const input = document.querySelector("input");

const allowedKeys = [
  "(",
  ")",
  "/",
  "x",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

document.querySelectorAll(".charKey").forEach((charKeyBtn) => {
  charKeyBtn.addEventListener("click", () => {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

document.getElementById("clear").addEventListener("click", () => {
  input.value = "";
  input.focus();
});

input.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (allowedKeys.includes(e.key)) {
    input.value += e.key;
    return;
  }

  if (e.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }

  if (e.key === "Enter") {
    calculate();
  }
});

copyClipBoard();
switchTheme();
