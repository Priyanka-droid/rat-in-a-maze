"use strict";
const hurdle = Math.trunc(Math.random() * (15 - 10) + 10);
console.log(hurdle);
let arr = [];
for (let i = 1; i <= hurdle; i++) {
  let x = Math.trunc(Math.random() * (7 - 0) + 0);
  let y = Math.trunc(Math.random() * (7 - 0) + 0);
  let z = [];
  z[0] = x;
  z[1] = y;
  arr.push(z);
}

// css table
for (let i = 0; i < arr.length; i++) {
  let str = `${arr[i][0]}r${arr[i][1]}c`;
  if (str === "0r0c") continue;
  document.querySelector(`.${CSS.escape(str)}`).style.backgroundColor =
    "#fff333";
  document.querySelector(`.${CSS.escape(str)}`).style.textAlign = "center";
  document.querySelector(`.${CSS.escape(str)}`).style.fontSize = "2rem";
  document.querySelector(`.${CSS.escape(str)}`).textContent = "❌";
}

// grid
let grid = [];
for (let i = 0; i < 7; i++) {
  let temp = [];
  for (let j = 0; j < 7; j++) {
    temp.push(1);
  }
  grid.push(temp);
}
for (let i = 0; i < arr.length; i++) {
  let x = arr[i][0];
  let y = arr[i][1];
  if (x == 0 && y == 0) continue;
  if (x == 6 && y == 6) continue;
  grid[x][y] = 0;
}
console.log(grid);

// visited array
let visited = [];
for (let i = 0; i < 7; i++) {
  let temp = [];
  for (let j = 0; j < 12; j++) {
    temp.push(0);
  }
  visited.push(temp);
}

console.log(visited);

let x = false;
let flag = 0;
def(grid, visited, 0, 0, "");

function def(grid, visited, i, j, st) {
  if (i === 6 && j === 6) {
    console.log(st);
    document.querySelector(`.${CSS.escape(`${i}r${j}c`)}`).textContent = "🧀";
    flag = 1;
    x = true;
    return;
  }
  visited[i][j] = 1;
  if (isPoss(grid, visited, i + 1, j)) {
    st = st + "D";
    document.querySelector(
      `.${CSS.escape(`${i + 1}r${j}c`)}`
    ).style.backgroundColor = "#f3f3f3";
    document.querySelector(`.${CSS.escape(`${i + 1}r${j}c`)}`).textContent =
      "😋";

    def(grid, visited, i + 1, j, st);
    st = st.slice(0, -1);
    visited[i + 1][j] = 0;

    if (flag === 1) return;
    document.querySelector(
      `.${CSS.escape(`${i + 1}r${j}c`)}`
    ).style.backgroundColor = "#000000";
    document.querySelector(`.${CSS.escape(`${i + 1}r${j}c`)}`).textContent =
      "🤪";
  }
  if (isPoss(grid, visited, i, j + 1)) {
    st = st + "R";
    document.querySelector(
      `.${CSS.escape(`${i}r${j + 1}c`)}`
    ).style.backgroundColor = "#f3f3f3";
    document.querySelector(`.${CSS.escape(`${i}r${j + 1}c`)}`).textContent =
      "😋";
    def(grid, visited, i, j + 1, st);
    st = st.slice(0, -1);
    visited[i][j + 1] = 0;

    if (flag === 1) return;
    document.querySelector(
      `.${CSS.escape(`${i}r${j + 1}c`)}`
    ).style.backgroundColor = "#000000";
    document.querySelector(`.${CSS.escape(`${i}r${j + 1}c`)}`).textContent =
      "🤪";
  }
  if (isPoss(grid, visited, i - 1, j)) {
    st = st + "U";
    document.querySelector(
      `.${CSS.escape(`${i - 1}r${j}c`)}`
    ).style.backgroundColor = "#f3f3f3";
    document.querySelector(`.${CSS.escape(`${i - 1}r${j}c`)}`).textContent =
      "😋";
    def(grid, visited, i - 1, j, st);
    st = st.slice(0, -1);
    visited[i - 1][j] = 0;

    if (flag === 1) return;
    document.querySelector(
      `.${CSS.escape(`${i - 1}r${j}c`)}`
    ).style.backgroundColor = "#000000";
    document.querySelector(`.${CSS.escape(`${i - 1}r${j}c`)}`).textContent =
      "🤪";
  }

  if (isPoss(grid, visited, i, j - 1)) {
    st = st + "L";
    document.querySelector(
      "." + CSS.escape(`${i}r${j - 1}c`)
    ).style.backgroundColor = "#f3f3f3";
    document.querySelector(`.${CSS.escape(`${i}r${j - 1}c`)}`).textContent =
      "😋";
    def(grid, visited, i, j - 1, st);
    st = st.slice(0, -1);
    visited[i][j - 1] = 0;

    if (flag === 1) return;
    document.querySelector(
      "." + CSS.escape(`${i}r${j - 1}c`)
    ).style.backgroundColor = "#000000";
    document.querySelector(`.${CSS.escape(`${i}r${j - 1}c`)}`).textContent =
      "🤪";
  }

  return;
}

function isPoss(grid, visited, i, j) {
  if (i < 0 || i >= 7 || j < 0 || j >= 7) {
    return false;
  }
  if (grid[i][j] === 0 || visited[i][j] === 1) return false;
  return true;
}
console.log(x);
