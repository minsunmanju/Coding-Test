const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let editStr = input[0];
const commandNum = Number(input[1]);
let stackLeft = editStr.split("");
let stackRight = [];


for (let i = 2; i < commandNum + 2; i++) {
  let command = input[i].split(" ");
  if (command[0] === "L") {
    if (stackLeft.length == 0) {
      continue;
    }
    stackRight.push(stackLeft.pop());
    
  } else if (command[0] === "D") {
    if (stackRight.length === 0) {
      continue;
    }
    stackLeft.push(stackRight.pop());

    
  } else if (command[0] === "B") {
    if (stackLeft.length === 0) {
      continue;
    }
    stackLeft.pop();
    
  } else if (command[0] === "P") {
    stackLeft.push(command[1]);
  }
}

const answer = stackLeft.concat(stackRight.reverse()).join("")
console.log(answer)