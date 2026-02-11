const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const M = Number(input[2]);
const B = input[3].split(" ").map(Number);

A.sort((a, b) => a - b);

const binary = (target, start, end) => {
  if (start > end) {
    return 0;
  }

  let mid = Math.floor((start + end) / 2);
  if (target === A[mid]) {
    return 1;
  } else if (target > A[mid]) {
    return binary(target, mid + 1, end);
  } else {
    return binary(target, start, mid - 1);
  }
};
for (let target of B) {
  console.log(binary(target, 0, N - 1));
}
