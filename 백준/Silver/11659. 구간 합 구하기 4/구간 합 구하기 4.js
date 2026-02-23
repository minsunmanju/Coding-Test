const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N,M] =input[0].split(" ").map(Number)
const arr = input[1].split(" ").map(Number)
let dp = Array(N+1).fill(0)
dp[1]= arr[0]
for(let i = 2; i<N+1; i++){
    dp[i] = dp[i-1] + arr[i-1]
}

const prefixSum = (i,j) => {
    let sum = dp[j] - dp[i-1]
    return sum
}

for(let i = 2; i<2+M; i++){
    let [a,b] = input[i].split(" ").map(Number)
    console.log(prefixSum(a,b))
}
