const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

let used = Array(N + 1).fill(false);
let out = [];
let picked = [];

const dfs = (depth) => {
  if (depth === M) {
    out.push(picked.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (used[i]) continue;

    used[i] = true;
    picked.push(i);

    dfs(depth + 1);

    used[i] = false;
    picked.pop();
  }
};
dfs(0);
console.log(out.join("\n"));
