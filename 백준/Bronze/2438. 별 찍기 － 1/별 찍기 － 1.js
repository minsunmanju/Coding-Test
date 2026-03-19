const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
for(let i =1; i<=input; i++){
    let star = Array(i).fill("*").join("")
    console.log(star)
}
