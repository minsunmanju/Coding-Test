const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
let arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);
let left = 0;
let right = N - 1;
let answer = [arr[left], arr[right]];
let value = Infinity;

while (left < right) {
  const sum = arr[left] + arr[right];
  if (Math.abs(value) > Math.abs(sum)) {
    value = sum;
    answer = [arr[left], arr[right]];
  }

  if (sum === 0) {
    answer = [arr[left], arr[right]];
    break;
  } else if (sum < 0) {
    left++;
  } else {
    right--;
  }
}

console.log(answer.join(" "));
