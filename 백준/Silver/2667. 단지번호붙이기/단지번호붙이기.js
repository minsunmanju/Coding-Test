const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input.shift());

const graph = input.map((map) => map.split("").map(Number));
const visited = Array.from(Array(N), () => Array(N).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];

let countHome = 0;
let countComplex = 0;
let answer = [];

const dfs = (x, y) => {
  if (graph[x][y] === 1 && visited[x][y] === false) {
    visited[x][y] = true;
    countHome++;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
        dfs(nx, ny);
      }
    }
  }
};
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 1 && visited[i][j] === false) {
      dfs(i, j);
      countComplex++;
      answer.push(countHome);
      countHome = 0;
    }
  }
}
answer.sort((a,b) => a-b)
console.log(countComplex)
console.log(answer.join("\n"))