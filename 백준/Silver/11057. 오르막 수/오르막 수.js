const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = Number(input);
let dp = Array.from(Array(N+1), () => Array(10).fill(1))
for(let i = 2; i<=N; i++){
    for(j = 1; j<10; j++){
        dp[i][j] = (dp[i][j-1] + dp[i-1][j]) % 10007
    }
}

let answer = dp[N].reduce((acc, cur) => acc+ cur,0)
console.log(answer % 10007)