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
console.log(data);
