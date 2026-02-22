const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let arr = input[1].split(" ").map(Number)
arr.sort((a,b) => a-b)
let set = new Set()
for(let i of arr){
    set.add(i)
}
console.log([...set].join(" "))
