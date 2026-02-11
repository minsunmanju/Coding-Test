const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, type] = input[0].split(" ");
const people = new Set();
const play = { Y: 2, F: 3, O: 4 };

for (let i = 1; i < Number(N) + 1; i++) {
  let name = input[i];
  people.add(name);
}

const result = Math.floor(people.size / (play[type] - 1));
console.log(result);
