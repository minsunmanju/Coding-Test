const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let arr = []
for(let i = 0; i<input.length; i++){
    arr.push(input.slice(i,))
}
arr.sort((a,b) => a.localeCompare(b))
console.log(arr.join("\n"))