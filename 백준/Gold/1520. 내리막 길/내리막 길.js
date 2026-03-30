const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [M,N] = input[0].split(" ").map(Number)
let arr = []
for(let i =1; i<=M; i++){
    let num = input[i].split(" ").map(Number)
    arr.push(num)
}

let dp = Array.from(Array(M), () => Array(N).fill(-1))
let cnt = 0

let dx = [1,-1,0,0]
let dy = [0,0,1,-1]

const dfs = (x,y) =>{
    if(x === M-1 && y === N-1) return 1
    if(dp[x][y] !== -1) return dp[x][y]
    
    dp[x][y] =0
    for(let i = 0; i<4; i++){
        let ax = x+ dx[i]
        let ay = y + dy[i]

        if(ax>=0 && ax<M && ay >=0 && ay<N && arr[ax][ay] < arr[x][y] ){
            dp[x][y]+= dfs(ax, ay)
        }
    }
    return dp[x][y]
}

console.log(dfs(0,0))