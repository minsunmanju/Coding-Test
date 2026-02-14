const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
let set = new Set();
for (let i = 1; i < N + 1; i++) {
  set.add(input[i]);
}
let arr = [];
let cnt = 0
for (let i = N + 1; i < N + M + 1; i++) {
  arr.push(input[i]);
}
for(let i of arr){
    if(set.has(i)){
        cnt ++
    }
}

console.log(cnt)