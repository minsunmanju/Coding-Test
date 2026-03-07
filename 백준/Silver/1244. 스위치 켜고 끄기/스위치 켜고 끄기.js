const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
let arr = input[1].split(" ").map(Number);
const boyAndGirl = Number(input[2]);
arr.unshift(0);
const boy = (switchNum, switchArr) => {
  for (let i = 1; i <= N; i++) {
    if (i % switchNum === 0) {
      if (switchArr[i] === 0) {
        switchArr[i] = 1;
      } else {
        switchArr[i] = 0;
      }
    }
  }
  return switchArr;
};

const girl = (switchNum, switchArr) => {
  let index = Math.min(switchNum, N - switchNum + 1);

  if (N === 1) {
    if (switchArr[0] === 1) {
      switchArr[0] = 0;
    } else {
      switchArr[0] = 1;
    }
  } else {
    if (switchArr[switchNum] === 0) {
      switchArr[switchNum] = 1;
    } else {
      switchArr[switchNum] = 0;
    }
    for (let i = 1; i < index; i++) {
      if (switchArr[switchNum - i] === switchArr[switchNum + i]) {
        if (switchArr[switchNum - i] === 1) {
          switchArr[switchNum - i] = 0;
          switchArr[switchNum + i] = 0;
        } else if (switchArr[switchNum - i] === 0) {
          switchArr[switchNum - i] = 1;
          switchArr[switchNum + i] = 1;
        }
      }else{
        break
      }
    }
  }
  return switchArr;
};

for (let i = 3; i < 3 + boyAndGirl; i++) {
  let answer = input[i].split(" ").map(Number);
  if (answer[0] === 1) {
    arr = boy(answer[1], arr);
  } else if (answer[0] === 2) {
    arr = girl(answer[1], arr);
  }
}

const result = arr.slice(1);

for (let i = 0; i < result.length; i += 20) {
  console.log(result.slice(i, i + 20).join(" "));
}
