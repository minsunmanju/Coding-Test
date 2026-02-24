const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, X] = input[0].split(" ").map(Number);
const visit = input[1].split(" ").map(Number);

let start = 0;
let end = start + X - 1;

let count = 0;
let maxVisit = 0;
let sumVisit = 0;

for (let i = start; i <= end; i++) {
  sumVisit += visit[i];
}

while (end < N) {
  if (maxVisit === sumVisit) {
    count += 1;
  } else if (sumVisit > maxVisit) {
    count = 1;
    maxVisit = sumVisit;
  }
  sumVisit -= visit[start];
  start +=1;
  end += 1;
  sumVisit += visit[end];
}

if (maxVisit === 0) {
  console.log("SAD");
} else {
  console.log(maxVisit);
  console.log(count);
}
