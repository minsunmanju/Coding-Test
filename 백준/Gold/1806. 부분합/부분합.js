const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, S] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
let minValue = Infinity;


let i = 0;
let j = 0;
let result = 0;

while (j <= arr.length) {
  if (result >= S) {
    minValue = Math.min(minValue, j-i);
    
    result -= arr[i];
    i++;
  } else if (result < S) {
    
    result += arr[j];
    j++;
  }
}

console.log(minValue === Infinity ? 0 : minValue)