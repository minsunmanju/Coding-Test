const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [R, C] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 1; i <= R; i++) {
  let alpha = input[i].split("");
  graph.push(alpha);
}

let visited = Array.from(Array(R), () => Array(C).fill(false));
let visitAlpha = new Set();

let ans = 0;
let cnt = 1;
let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

const dfs = (x, y, cnt) => {
  visited[x][y] = true;
  visitAlpha.add(graph[x][y]);

  ans = Math.max(ans, cnt);
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (
      nx >= 0 &&
      nx < R &&
      ny >= 0 &&
      ny < C &&
      !visited[nx][ny] &&
      !visitAlpha.has(graph[nx][ny])
    ) {
      dfs(nx, ny, cnt + 1);
    }
  }
  visited[x][y] = false;
  visitAlpha.delete(graph[x][y]);
};

dfs(0, 0, 1);
console.log(ans);
