const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= N; i++) {
  let num = Number(input[i]);
  arr.push(num);
}

arr.sort((a, b) => a - b);

let i = 0;
let j = 0;
let minValue = Infinity;

while (i <= j && j < N) {
  if (arr[j] - arr[i] >= M) {
    minValue = Math.min(arr[j] - arr[i], minValue);
    i++;
  } else if (arr[j] - arr[i] < M) {
    j++;
  }
}
console.log(minValue);
