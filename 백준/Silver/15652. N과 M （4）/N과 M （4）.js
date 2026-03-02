const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const [N, M] = input.split(" ").map(Number);

let result = [];
let picked = [];


const dfs = (depth, start) => {
  if (depth === M) {
    result.push(picked.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    picked.push(i);
    dfs(depth + 1, i );
    picked.pop();
  }
};

dfs(0, 1);
console.log(result.join("\n"));