const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const K = Number(input[1]);
let arr = [];
for (let i = 2; i < N + 2; i++) {
  const num = Number(input[i]);
  arr.push(num);
}


let visited = Array(N+1).fill(false)
let picked = [];
let result = new Set();
const dfs = (depth) => {
  if (depth === K) {
    result.add(picked.join(""));
    return
  }
  for (let i = 0; i < N; i++) {
    if(visited[i]) continue
    picked.push(arr[i]);
    visited[i] = true
    dfs(depth + 1);
    picked.pop();
    visited[i] = false
  }
};
dfs(0, 0);
console.log(result.size)
