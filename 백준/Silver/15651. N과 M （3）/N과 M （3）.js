const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim()
const [N,M] = input.split(" ").map(Number)

let visited = Array(N+1).fill(false)
let picked = []
let result = []

const dfs = (depth) =>{
    if(depth === M){
        result.push(picked.join(" "))
        return    
    }

    for(let i = 1; i<=N; i++){
        visited[i] =true
        picked.push(i)

        dfs(depth+1)

        picked.pop()
        visited[i]= false
    }
}

dfs(0)
console.log(result.join("\n"))