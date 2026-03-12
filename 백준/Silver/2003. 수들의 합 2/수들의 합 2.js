const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
let i = 0;
let j = 0;
let cnt = 0;
let result = arr[i];
while (j < N) {
  if (result === M) {
    cnt++;
    i++;
    j = i;
    result = arr[i] ;
  }
  else if (result < M) {
    j++;
    result = result + arr[j];
  } else if (result > M) {
    result = result - arr[i];
    i++;
    
  }
}

console.log(cnt);
