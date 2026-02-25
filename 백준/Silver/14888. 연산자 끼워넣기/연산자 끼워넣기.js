const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const nums = input[1].split(" ").map(Number);
const operator = input[2].split(" ").map(Number);

let minValue = 1000000001;
let maxValue = -1000000001;
const divide = (a, b) => {
  let sign = 1;
  if (a < 0) {
    sign = -1;
  }
  let result = Math.floor(Math.abs(a / b)) * sign;
  return result;
};

const dfs = (idx, res) => {
  if (idx === N) {
    minValue = Math.min(minValue, res);
    maxValue = Math.max(maxValue, res);
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (operator[i] > 0) {
      operator[i]--;
      if (i === 0) {
        dfs(idx + 1, res + nums[idx]);
      } else if (i === 1) {
        dfs(idx + 1, res - nums[idx]);
      } else if (i === 2) {
        dfs(idx + 1, res * nums[idx]);
      } else if (i === 3) {
        dfs(idx + 1, divide(res, nums[idx]));
      }
      operator[i]++;
    }
  }
};

dfs(1, nums[0]);
if (minValue === -0) {
  minValue = 0;
}
if (maxValue === -0) {
  maxValue = 0;
}
console.log(maxValue);
console.log(minValue);

