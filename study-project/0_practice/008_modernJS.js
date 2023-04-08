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
