const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
let arr1 = [];
let arr2 = [];
for (let i = 1; i <= N; i++) {
  let color = input[i];
  arr1.push(color.split(""));
  arr2.push(color.replaceAll("R", "G").replaceAll("G", "R").split(""));
}

let visited1 = Array.from(Array(N), () => Array(N).fill(false));
let visited2 = Array.from(Array(N), () => Array(N).fill(false));

let cnt1 = 0;
let cnt2 = 0;

let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];

const dfs = (x, y, v, arr, visited) => {
  if(visited[x][y]) return false
  if(arr[x][y] !== v) return false

  visited[x][y] = true


  for (let i = 0; i < 4; i++) {
    let ax = x + dx[i];
    let ay = y + dy[i];
    if (ax >= 0 && ax < N && ay >= 0 && ay < N) {
      dfs(ax, ay, v, arr, visited);
    }
  }

  return true;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    cnt1 += dfs(i, j, arr1[i][j], arr1, visited1);
    cnt2 += dfs(i, j, arr2[i][j], arr2, visited2);
  }
}

console.log([cnt1, cnt2].join(" "));
