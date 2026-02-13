const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const x = Number(input[2]);
arr.sort((a, b) => a - b);
let i = 0;
let j = n - 1;
let cnt = 0;
while (i < j) {
  if (arr[i] + arr[j] === x) {
    cnt++;
    i++;
    j--;
  } else if (arr[i] + arr[j] < x) {
    i++;
  } else if (arr[i] + arr[j] > x) {
    j--;
  }
}
console.log(cnt);
