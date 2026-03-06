const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
let arr = [];
let obj = {};
for (let i = 1; i < n + 1; i++) {
  let book = input[i];
  arr.push(book);
}

for (let i of arr) {
  if (i in obj) {
    obj[i]++;
  } else {
    obj[i] = 1;
  }
}

const sorted = Object.entries(obj).sort((a, b) => {
  if (a[1] !== b[1]) {
    return b[1] - a[1];
  } else if (a[0] !== b[0]) {
    return a[0].localeCompare(b[0]);
  }
});

console.log(sorted[0][0])
