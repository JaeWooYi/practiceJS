let test = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

// 전통적인 방법
for (let i = 0; i < test.length; i++) {
  console.log("array" + [i] + " : " + test[i]);
}

console.log();
console.log("------------------------------");
console.log();

function printTest(item) {
  console.log(item);
}

test.forEach(printTest);

console.log();
console.log("------------------------------");
console.log();

// 익명함수만들기 --> 위에꺼를 이렇게도 가능 : 옛날 방법
test.forEach(function (item) {
  console.log(item);
});

console.log();
console.log("------------------------------");
console.log();

// es6문법 화살표 함수로
test.forEach((item, index) => {
  console.log(item + " : " + index);
});

console.log();
console.log("------------------------------");
console.log();

let data = test.map((item, index) => {
  return item;
});
console.log("test1 : ", data);

console.log();
console.log("------------------------------");
console.log();

// map
let akList = [
  { name: "smart", age: 10, manager: true },
  { name: "city", age: 11, manager: true },
  { name: "association", age: 12, manager: false },
];
let data2 = akList.map(item => {
  return item.name;
});
console.log(data2);

console.log();
console.log("------------------------------");
console.log();

// filter, some, every, find, findIndex
// let data3 = akList.filter(item => {
//   return item.name == "city";
// });
let akList2 = ["L1", "L2", "L3", "L4", "L5", "M1", "M2", "M3", "M4", "M5"];
let data3 = akList2.filter(item => {
  return item.startsWith("M");
});

let data4 = akList2.some(item => {
  return item.startsWith("L");
});
let data5 = akList2.every(item => {
  return item.startsWith("L");
});
let data6 = akList2.find(item => {
  return item.startsWith("L3");
});
let data7 = akList2.findIndex(item => {
  return item == "M1";
});
console.log("filter : ", data3);
console.log("some : ", data4);
console.log("every : ", data5);
console.log("find : ", data6);
console.log("find : ", data7);
