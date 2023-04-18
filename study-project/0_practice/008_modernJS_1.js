let name = "Hi Boy";
let age = "31";

let person = {
  name: name,
  age: age,
};

// 위에꺼 아래처럼 써도 되! (키값 변수이름하고 똑같이 쓰고 싶다면)
person2 = { name, age };

console.log(person);
console.log(person2);

console.log();
console.log("-----------------------------");
console.log();

// 객체 분해하기
let test = {
  testName: "testName",
  testAge: 100,
};
// let testName = test.test;
// let testAge = test.age;

// console.log(testName);
// console.log(testAge);

let { testName, testAge } = test;
console.log(testName, testAge);

console.log();
console.log("-----------------------------");
console.log();

let a = "testBoy";
let b = "10";

console.log("My name is " + a + ", My age is " + b);
console.log(`My name is ${a}, My age is ${b}`);

console.log();
console.log("-----------------------------");
console.log();

let array = [1, 2, 3];
let [z, x, y] = array;
console.log(z, x, y);

let [w, ...rest] = array;
console.log(w);
console.log(rest);

console.log();
console.log("-----------------------------");
console.log();

let person3 = {
  nameK: "KKK",
  age: 100,
  cute: true,
};
// let { nameZ, ageZ, cute } = person3;
let { nameK, ...restInfo } = person3;
console.log(person3);
console.log(nameK, restInfo);
