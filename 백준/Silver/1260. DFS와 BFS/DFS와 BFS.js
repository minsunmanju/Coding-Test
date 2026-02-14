const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M, V] = input[0].split(" ").map(Number);
let graph = Array.from({ length: N + 1 }, () => []);
let visitedDfs = Array(N + 1).fill(false);
let visitedBfs = Array(N + 1).fill(false);
let answerDfs = [];
let answerBfs = [];
for (let i = 1; i < M + 1; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

const dfs = (V) => {
  visitedDfs[V] = true;
  answerDfs.push(V);
  for (let next of graph[V]) {
    if (!visitedDfs[next]) {
      dfs(next);
    }
  }
};

dfs(V);
console.log(answerDfs.join(" "));

const bfs = (V) => {
  let q = [];
  let head = 0;
  visitedBfs[V] = true;
  q.push(V);
  while (head < q.length) {
    let cur = q[head++];
    answerBfs.push(cur);
    for (let next of graph[cur]) {
      if (!visitedBfs[next]) {
        visitedBfs[next] = true;
        q.push(next);
      }
    }
  }
};
bfs(V)
console.log(answerBfs.join(" "))
