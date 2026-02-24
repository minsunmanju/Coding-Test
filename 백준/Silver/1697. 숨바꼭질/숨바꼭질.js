const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

const bfs = (start, target) => {
  let queue = [[start, 0]];
  let visited = Array(100001).fill(false);
  visited[start] = true;

  while (queue.length) {
    let [current, time] = queue.shift();
    if (current === target) {
      return time;
    }

    for (const next of [current + 1, current - 1, current * 2]) {
      if (next >= 0 && next <= 100000 && !visited[next]) {
        visited[next] = true;
        queue.push([next, time+1]);
      }
    }
  }
};

console.log(bfs(N, M));
