let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

// 1.
//   map 문제
//   모든 이름을 대문자로 바꾸어서 출력하시오.
//   성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
//   이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])
console.log("--1--");
let firstProblem = names.map(item => item.toUpperCase(names));
console.log(firstProblem);

console.log();
console.log("------------------------------");
console.log();

// 2.
// filter 문제
// 이름에 a를 포함한 사람들을 출력하시오.
// 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
console.log("--2--");
let secondArr = [];
function second(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("a")) {
      secondArr.push(arr[i]);
    }
  }
  console.log(secondArr);
}
second(names);

console.log();
console.log("------------------------------");
console.log();

// 3.
//   some 문제
//   전체 이름의 길이가 20자 이상인 사람이 있는가?
//   성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
console.log("--3--");

function third(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 20) {
      console.log(array[i]);
    }
  }
}
third(names);

console.log();

function third2(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes("P" || "p")) {
      console.log(array[i]);
    }
  }
}
third2(names);

console.log();
console.log("------------------------------");
console.log();

// 4.
//   every 문제
//   모두의 전체 이름의 길이가 20자 이상인 사람?
//   모두의 이름에 a 가 포함되어 사람이 있는가?
console.log("--4--");

function fourth(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 20) {
      console.log(array[i]);
    }
  }
}
fourth(names);

console.log();
console.log("------------------------------");
console.log();

// 5.
//   find 문제
//   전체 이름의 길이가 20자 이상인 사람을 찾으시오.
//   미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)
console.log("--5--");

console.log();
console.log("------------------------------");
console.log();

// 6.
//   findIndex 문제
//   전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
//   미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
console.log("--6--");
