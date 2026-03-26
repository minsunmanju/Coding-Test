const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const [a, b] = input[1].split(" ").map(Number);
const m = Number(input[2]);
let arr = [];
for (let i = 3; i < m + 3; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  arr.push([x, y]);
}

let visited = Array(n + 1).fill(false);
let graph = [...Array(n + 1)].map(() => []);

arr.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

let answer = 0;

const dfs = (start, depth) => {
  if (start === b) {
    answer = depth;
  }
  for (let i of graph[start]) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(i, depth + 1);
    }
  }
};
dfs(a, 0)

if(answer ===0 ){
    console.log(-1)
}else{
    console.log(answer)
}
