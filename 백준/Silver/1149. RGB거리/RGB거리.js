const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
let arr = [];
for (let i = 1; i <= N; i++) {
  let rgb = input[i].split(" ").map(Number);
  arr.push(rgb);
}
let red = Array(N).fill(0);
let green = Array(N).fill(0);
let blue = Array(N).fill(0);

red[0] = arr[0][0];
green[0] = arr[0][1];
blue[0] = arr[0][2];

for (let i = 1; i < N; i++) {
  red[i] = arr[i][0] + Math.min(blue[i - 1], green[i - 1]);
  green[i] = arr[i][1] + Math.min(red[i - 1], blue[i - 1]);
  blue[i] = arr[i][2] + Math.min(red[i - 1], green[i - 1]);
}

console.log(Math.min(red[N - 1], green[N - 1], blue[N - 1]));
