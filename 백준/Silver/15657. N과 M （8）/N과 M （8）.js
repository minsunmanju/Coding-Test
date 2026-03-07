const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);
let picked = [];
let result = [];

const dfs = (depth, start) => {
  if (depth === M) {
    result.push(picked.join(" "));
    return;
  }

  for (let i = start; i < N; i++) {
    picked.push(arr[i]);
    dfs(depth + 1, i);
    picked.pop();
  }
};
dfs(0, 0);
console.log(result.join("\n"));
