const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 1; i < N + 1; i++) {
  let maze = input[i].split("").map(Number);
  graph.push(maze);
}

const bfs = (x, y) => {
  let visited = {};
  let queue = [[x, y]];
  visited[[x, y]] = 1;

  let dx = [1, -1, 0, 0];
  let dy = [0, 0, -1, 1];

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      let temp = queue.shift();
      for (let j = 0; j < 4; j++) {
        let nx = dx[j] + temp[0];
        let ny = dy[j] + temp[1];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < N &&
          ny < M &&
          graph[nx][ny] === 1 &&
          !visited[[nx,ny]]
        ) {
          visited[[nx,ny]] = visited[temp] + 1;
          queue.push([nx,ny]);
        }
      }
    }
  }
  return visited[[N - 1,M - 1]];
};

console.log(bfs(0, 0));

