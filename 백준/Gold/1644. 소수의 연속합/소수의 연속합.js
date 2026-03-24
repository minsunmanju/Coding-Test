const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = Number(input);

let isPrime = Array(N + 1).fill(false);
isPrime[0] = isPrime[1] = true;
const primeNum = (num) => {
  for (let i = 2; i <= num; i++) {
    for (let j = 2; j < Math.floor(i ** 0.5) + 1; j++) {
      if (i % j === 0) {
        isPrime[i] = true;
        break;
      }
    }
  }
};
primeNum(N);
let primeArr = isPrime.reduce((acc, val, idx) => {
  if (!val) acc.push(idx);
  return acc;
}, []);

let i = 0;
let j = 0;
let result = 0;
let cnt = 0;
while (j <= primeArr.length) {
  if (result === N) {
    cnt++;
    result -= primeArr[i]
    i++
  } else if (result < N) {
    result += primeArr[j];
    j++;
  } else if (result > N) {
    result -= primeArr[i];
    i++;
  }
}

console.log(cnt);
