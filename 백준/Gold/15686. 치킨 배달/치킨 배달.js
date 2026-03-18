const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const xy = [];
for (let i = 1; i <= N; i++) {
  let info = input[i].split(" ").map(Number);
  xy.push(info);
}

let chicken = [];
let house = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (xy[i][j] === 2) {
      chicken.push([i + 1, j + 1]);
    } else if (xy[i][j] === 1) {
      house.push([i + 1, j + 1]);
    }
  }
}

const getDistance = () => {
  let total = 0;
  for (let [hx, hy] of house) {
    let minDist = Infinity;
    for (let i = 0; i < chicken.length; i++) {
      if (!checked[i]) continue;

      let [cx, cy] = chicken[i];
      const dist = Math.abs(hx - cx) + Math.abs(hy - cy);
      minDist = Math.min(dist, minDist);
    }
    total += minDist;
  }
  return total;
};

let checked = Array(chicken.length).fill(false);
let answer = Infinity;

const backtracking = (idx, depth) => {
  if (depth === M) {
    answer = Math.min(answer, getDistance());
    return;
  }

  for (let i = idx; i < chicken.length; i++) {
    if (checked[i]) continue;
    checked[i] = true;
    backtracking(i + 1, depth + 1);
    checked[i] = false;
  }
};
backtracking(0,0)
console.log(answer);
