const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const voteNum = Number(input[1]);
const votes = input[2].split(" ").map(Number);
const frame = []; // student: 학생 번호 count: 추천 받은 횟수 언제 들어왔는지 : time

votes.forEach((student, time) => {
  let found = false;
  for (let i of frame) {
    if (i.student === student) {
      found = true;
      i.count++;
      break;
    }
  }

  if (!found) {
    if (frame.length === N) {
      frame.sort((a, b) => {
        if (a.count !== b.count) {
          return a.count - b.count;
        }
        return a.time - b.time;
      });
      frame.shift();
    }
    frame.push({ student, count: 1, time });
  }
});

const answer = frame
  .map((f) => f.student)
  .sort((a, b) => a - b)
  .join(" ");
console.log(answer);