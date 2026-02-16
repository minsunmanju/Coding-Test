const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0])
const E = Number(input[1])
let graph = Array.from({length :N+1}, () => [])
for(let i  = 2; i< E+2; i++){
    let [a,b] = input[i].split(" ").map(Number)
    graph[a].push(b)
    graph[b].push(a)
}
let visited = Array(N+1).fill(0)
let cnt = 0
const dfs = (V) =>{
    visited[V] = true
    for(let i of graph[V]){
        if(!visited[i]){
            visited[i] = true
            cnt++
            dfs(i)
        }
    }
}

dfs(1)
console.log(cnt)