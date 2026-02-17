const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let commands = input.slice(1);
let stack = [];
let answer = [];
commands.forEach((command) => {
  if (command.startsWith("push")) {
    let value = Number(command.split(" ")[1]);
    stack.push(value);
  } else if (command === "pop") {
    answer.push(stack.length === 0 ? -1 : stack.pop());
  } else if (command === "size") {
    answer.push(stack.length);
  } else if ((command ==="empty")) {
    answer.push(stack.length === 0 ? 1 : 0);
  } else if (command === "top") {
    answer.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
  }
});

console.log(answer.join("\n"));
