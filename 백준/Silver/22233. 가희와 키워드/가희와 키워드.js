const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
let blog = new Set();
let answer = N;
for (let i = 1; i < N + 1; i++) {
  let keyword = input[i];
  blog.add(keyword)
}
let arr = []
for (let i = N + 1; i < N + M + 1; i++) {
  let post = input[i].split(",");
  for (let j of post) {
    if (blog.has(j)) {
      blog.delete(j)
      answer -=1
    }
  }
  arr.push(answer)
  
}

console.log(arr.join("\n"))
