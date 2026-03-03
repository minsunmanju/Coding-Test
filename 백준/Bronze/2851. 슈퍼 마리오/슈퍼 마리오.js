const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let prefixSum = Array(10).fill(0);
prefixSum[0] = input[0];

for (let i = 1; i < 10; i++) {
  prefixSum[i] = prefixSum[i - 1] + input[i];
}
const newSum = prefixSum.map((p) => Math.abs(100 - p));

const minAbs = Math.min(...newSum)
let index = newSum.lastIndexOf(minAbs)
console.log(prefixSum[index])