const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
a = Number(input[0]);
b = Number(input[1]);
console.log(a -b);
