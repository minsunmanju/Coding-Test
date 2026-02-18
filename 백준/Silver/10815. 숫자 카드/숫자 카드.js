const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const arrN = input[1].split(" ").map(Number);
const M = Number(input[2]);
const arrM = input[3].split(" ").map(Number);

let map = new Map();
for(let i of arrN){
    map.set(i, false)
}

const answer = []
for(let i of arrM){
    if (map.has(i)){
        answer.push(1)
    }else{
        answer.push(0)
    }
}

console.log(answer.join(" "))