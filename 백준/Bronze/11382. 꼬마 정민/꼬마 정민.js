const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const [A,B,C] = input.split(" ").map(Number)
console.log(A+B+C)