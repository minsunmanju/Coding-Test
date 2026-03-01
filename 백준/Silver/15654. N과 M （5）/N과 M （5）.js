const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N,M] = input[0].split(" ").map(Number)
const arr = input[1].split(" ").map(Number)
arr.sort((a,b)=> a-b)
let visited = Array(N).fill(false)
let result =[]
let picked = []

const dfs =(depth) =>{
    if(depth === M){
        result.push(picked.join(" "))
        return 
    }

    for(let i =0 ; i<N; i++){
        if(visited[i]) continue

        visited[i] = true
        picked.push(arr[i])

        dfs(depth+1)

        picked.pop()
        visited[i] = false
    }
}

dfs(0)

console.log(result.join("\n"))