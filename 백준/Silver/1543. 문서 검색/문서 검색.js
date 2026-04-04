const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let document = input[0]
let word = input[1]

let documentReplace = document.replaceAll(word, "!")


let cnt = 0
for(let i of documentReplace){
    if(i === "!"){
        cnt++
    }   
}

console.log(cnt)