const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);
let picked = [];
let result = [];
let visited = Array(N).fill(false);

const dfs = (depth, start) => {
  if (depth === M) {
    result.push(picked.join(" "));
    return;
  }
  for (let i = start; i < N; i++) {
    if (visited[i]) continue;

    picked.push(arr[i]);
    visited[i] = true;
    dfs(depth + 1, i);
    picked.pop();
    visited[i] = false;
  }
};

dfs(0, 0);
console.log(result.join("\n"));
