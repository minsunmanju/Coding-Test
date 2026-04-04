const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [A,B] = input[0].split(" ").map(Number)
let arrA = input[1].split(" ").map(Number)
let setA = new Set(arrA)
let arrB = input[2].split(" ").map(Number)
let setB = new Set(arrB)

for(let i of setA){
    if(setB.has(i)){
        setA.delete(i)
    }
}

let answer = [...setA].sort((a,b) => a-b)

if(answer.length === 0){
    console.log(0)
}else{
    console.log(answer.length)
    console.log(answer.join(" "))
}