const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const arr = [];
let cnt = 1;
for (let i = 1; i <= N; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  arr.push([a, b]);
}
arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

let endValue = arr[0][1];

for (let i = 1; i < N; i++) {
  if (endValue <= arr[i][0]) {
    cnt++;
    endValue = arr[i][1];
  }
}

console.log(cnt);
