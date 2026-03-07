const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);
let result = new Set();
let picked = [];
let visited = Array(N).fill(false)

const dfs = (depth) => {
  if (depth === M) {
    result.add(picked.join(" "));
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
console.log([...result].join("\n"));
