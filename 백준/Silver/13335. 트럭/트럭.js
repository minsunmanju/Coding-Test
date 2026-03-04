const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, w, l] = input[0].split(" ").map(Number); // n은 버스의 갯수 , w는 다리 길이 , L은 다리의 하중
let arr = input[1].split(" ").map(Number);
let time = 0; // 소요 시간
const bridge = Array(w).fill(0)

const canTruckMove = (truckWeight) =>{
    const currentTruckWeight = bridge.reduce((pre, cur) => pre+cur)
    return currentTruckWeight + truckWeight - bridge[0] <=l
}

while(arr.length){
    const currentTruck = arr[0]

    if(canTruckMove(currentTruck)){
        bridge.shift()
        bridge.push(arr.shift())
    }else{
        bridge.shift()
        bridge.push(0)
    }

    time++
}

while(bridge.reduce((pre, cur) => pre+ cur)){
    bridge.shift()
    bridge.push(0)
    time++
}

console.log(time)