const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let picture = [];
for (let i = 1; i <= n; i++) {
  let paper = input[i].split(" ").map(Number);
  picture.push(paper);
}

let visited = Array.from(Array(n), () => Array(m).fill(false));
let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

const bfs = (a, b) => {
  let cnt = 1;
  let queue = [[a, b]];
  while (queue.length) {
    let [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < n &&
        ny < m &&
        !visited[nx][ny] &&
        picture[nx][ny]
      ) {
        cnt++;
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }
  return cnt;
};

let painting = 0;
let maxWidth = 0;
let width = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j] && picture[i][j]) {
      visited[i][j] = true;
      width = bfs(i, j);
      painting++;
      if (width > maxWidth) {
        maxWidth = width;
      }
    }
  }
}
console.log(painting);
console.log(maxWidth);
