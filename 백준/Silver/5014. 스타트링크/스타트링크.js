const fs = require("fs");
const [F,S,G,U,D] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const visited = Array(F+1).fill(false)
const upDown = [U,-D]

const bfs = (S,G) =>{
    const queue = [[S, 0]];
    while(queue.length){
        const [curFloor, cnt] = queue.shift()
        if(visited[curFloor]) continue
        if(curFloor === G) return cnt
        visited[curFloor] = true

        for(let i =0; i<2; i++){
            const nextFloor = curFloor + upDown[i]
            if(nextFloor>0 && nextFloor <=F && !visited[nextFloor]){
                queue.push([nextFloor, cnt+1])
            }
        }

    }
}
const answer = bfs(S,G)
if(S===G){
    console.log(0)
}else{
    console.log(answer? answer : "use the stairs")
}