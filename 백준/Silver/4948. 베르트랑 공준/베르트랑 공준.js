const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let line of input) {
  if (line === 0) {
    break;
  }
  let cnt = 0;
  let flag = true;
  if (line <= 1) {
    cnt = 1;
  } else {
    for (let i = line+1; i <= 2 * line; i++) {
      flag = true;
      for (let j = 2; j < Math.floor(i ** 0.5) + 1; j++) {
        if (i % j === 0) {
          flag = false;
          break;
        }
      }
      if (flag) {
        cnt++;
      }
    }
  }
  console.log(cnt);
}
