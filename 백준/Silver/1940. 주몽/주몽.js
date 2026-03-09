const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0])
const M = Number(input[1])
const arr = input[2].split(" ").map(Number)
arr.sort((a,b) => a-b)
let i = 0; 
let j = N-1
let cnt = 0

while(i<j && j<N){
    if(arr[i] + arr[j] === M){
        cnt++
        i ++
        j = N-1
    }else if(arr[i] + arr[j] <M){
        i++

    }else{
        j--
    }
}

console.log(cnt)