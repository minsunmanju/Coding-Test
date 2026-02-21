const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0])
let arr = []
for(let i =1; i<N+1;i++) {
    arr.push(Number(input[i]))
}
arr.sort((a,b) => a-b)
console.log(arr.join("\n"))