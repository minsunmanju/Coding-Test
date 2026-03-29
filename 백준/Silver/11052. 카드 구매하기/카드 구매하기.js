const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0])
const arr = input[1].split(" ").map(Number)
let dp = Array(N+1).fill(0)

for(let i = 1; i<=N; i++){
    for(let j =1; j<=i ;j++){
        dp[i] = Math.max(dp[i], arr[j-1] + dp[i-j])
    }
}

console.log(dp[N])