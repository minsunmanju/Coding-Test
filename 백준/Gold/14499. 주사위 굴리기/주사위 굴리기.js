const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M, x, y, k] = input[0].split(" ").map(Number);
let maps = [];
for (let i = 1; i <= N; i++) {
  let map = input[i].split(" ").map(Number);
  maps.push(map);
}


let cmd = input[N+1].split(" ").map(Number)
let dice = [0, 0, 0, 0, 0, 0];

const turn = (cmd) => {
  let [top, front, right, left, back, bottom] = dice;

  if (cmd === 1) {
    // 동쪽: 오른쪽으로 굴림
    [dice[0], dice[2], dice[5], dice[3]] = [left, top, right, bottom];
  } else if (cmd === 2) {
    // 서쪽: 왼쪽으로 굴림
    [dice[0], dice[2], dice[5], dice[3]] = [right, bottom, left, top];
  } else if (cmd === 3) {
    // 북쪽: 위로 굴림
    [dice[0], dice[1], dice[5], dice[4]] = [back, top, front, bottom]
  } else if (cmd === 4) {
    // 남쪽: 아래로 굴림
    [dice[0], dice[1], dice[5], dice[4]] = [front, bottom, back, top];
  }
};

let dy = [0, 0, -1, 1];
let dx = [1, -1, 0, 0];

let nx = y;
let ny = x;

for (let i of cmd) {
  if (
    nx + dx[i - 1] >= 0 &&
    nx + dx[i - 1] < M &&
    ny + dy[i - 1] >= 0 &&
    ny + dy[i - 1] < N
  ) {
    nx += dx[i - 1];
    ny += dy[i - 1];

    turn(i);
    if (maps[ny][nx] === 0) {
      maps[ny][nx] = dice[5];
    } else {
      dice[5] = maps[ny][nx];
      maps[ny][nx] = 0;
    }
    console.log(dice[0]);
  }
}
