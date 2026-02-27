const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = Number(input.shift());

const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];
let answer = [];

const dfs = (x, y, worms, N, M) => {
  if (worms[y][x] === 1) {
    worms[y][x] = 0;
  }

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
      if (worms[ny][nx] === 1) {
        dfs(nx, ny, worms, N, M);
      }
    }
  }
};

for (let i = 0; i < T; i++) {
  const [M, N, K] = input.shift().split(" ").map(Number);

  const worms = Array.from({ length: N }, () => Array(M).fill(0));

  for (let j = 0; j < K; j++) {
    const [x, y] = input.shift().split(" ").map(Number);
    worms[y][x] = 1;
  }

  let count = 0;

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (worms[y][x] === 1) {
        dfs(x, y, worms, N, M);
        count++;
      }
    }
  }
  answer.push(count);
}

console.log(answer.join("\n"))