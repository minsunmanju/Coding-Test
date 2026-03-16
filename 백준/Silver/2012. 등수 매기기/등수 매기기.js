const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0])
const arr =[]
for(let i =1; i<=n; i++){
    let num = Number(input[i])
    arr.push(num)
}

arr.sort((a,b) => a-b)
let result = 0
for(let i =1;  i<=n; i++){
    let abs = Math.abs(arr[i-1] - i)
    result += abs
}

console.log(result)