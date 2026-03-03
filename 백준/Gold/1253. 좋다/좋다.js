const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);

let cnt = 0;
let result = [];

for (let k = 0; k < N; k++) {
  let sumNum = arr[k];
  let i = 0;
  let j = N - 1;
  while (i < j && j < N) {
    if (i === k || j === k) {
      if (i === k) {
        i++;
      } else if (j === k) {
        j--;
      }
    } else {
      if (arr[i] + arr[j] === sumNum) {
        cnt++;
        break;
      } else if (arr[i] + arr[j] < sumNum) {
        i++;
      } else if (arr[i] + arr[j] > sumNum) {
        j--;
      }
    }
  }
}

console.log(cnt);