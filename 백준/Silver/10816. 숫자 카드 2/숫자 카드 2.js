const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const hasArr = input[1].split(" ").map(Number);
const M = Number(input[2]);
const findArr = input[3].split(" ").map(Number);
let map = {};

hasArr.sort((a, b) => a - b);

for (let i of hasArr) {
  if (i in map) {
    map[i]++;
  } else {
    map[i] = 1;
  }
}

const binary = (target, start, end) => {
  if (start > end) {
    return 0;
  }
  let mid = Math.floor((start + end) / 2);
  if (target === hasArr[mid]) {
    return map[target];
  } else if (target > hasArr[mid]) {
    return binary(target, mid + 1, end);
  } else {
    return binary(target, start, mid - 1);
  }
};
let answer = []
for (let target of findArr) {
  answer.push(binary(target, 0, N-1))
}

console.log(answer.join(" "))
