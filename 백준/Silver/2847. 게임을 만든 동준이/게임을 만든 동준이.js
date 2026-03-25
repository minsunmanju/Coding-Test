const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const N = input[0];
let arr = [];
for (let i = 1; i <= N; i++) {
  let num = input[i];
  arr.push(num);
}
let i = 1;
let cnt = 0;
while (i < N) {
  if (arr[N - i] <= arr[N - i - 1]) {
    arr[N - i - 1]--;
    cnt++;
  } else {
    i++;
  }
}

console.log(cnt);
