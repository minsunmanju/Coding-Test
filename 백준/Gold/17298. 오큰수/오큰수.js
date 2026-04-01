const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let answer = Array(N).fill(-1);
let stack = [];

for (let i = 0; i < N; i++) {

    while(stack.length >0 && arr[stack[stack.length-1]] < arr[i]){
        answer[stack.pop()] = arr[i]
    }

    stack.push(i)

}

console.log(answer.join(" "))
