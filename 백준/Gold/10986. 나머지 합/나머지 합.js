const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
let cnt = Array(M).fill(0)
cnt[0] = 1
let prefix =0
let answer = 0
for(let i = 0; i<N; i++){
     prefix = (prefix + arr[i]) %M
    cnt[prefix] ++ 
}

for(let i=0; i<M; i++){
    answer += (cnt[i] * (cnt[i]-1)) /2
}

console.log(answer)