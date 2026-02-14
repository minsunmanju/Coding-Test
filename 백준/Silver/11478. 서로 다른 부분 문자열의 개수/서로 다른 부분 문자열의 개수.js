const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
let set = new Set();
const len = input.length
for(let i =0 ; i< len+1;  i++){
    for(let j = i; j<len+1; j++){
        let word = input.slice(i,j)
        set.add(word)
    }
}

console.log(set.size-1)