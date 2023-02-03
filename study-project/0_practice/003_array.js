let exArr = ["apple", "banana", "grape", "mango"];
console.log(exArr);

console.log();
console.log("-------------------");
console.log();

exArr[3] = "cherry";
console.log(exArr);

console.log();
console.log("-------------------");
console.log();

// pop -> 마지막에있는거 빼줘
exArr.pop();
console.log(exArr);

console.log();
console.log("-------------------");
console.log();

// push -> 마지막에 추가
exArr.push("mango");
console.log(exArr);

console.log();
console.log("-------------------");
console.log();

// includes -> 뭔가를 포함하고있는지 체크하는 함수
console.log(exArr.includes("apple"));
console.log(exArr.includes("pear"));

console.log();
console.log("-------------------");
console.log();

// indexOf -> index번호 확인해주는 함수
console.log(exArr.indexOf("grape"));

console.log();
console.log("-------------------");
console.log();

// slice -> 배열 자르기 : (시작점 : 포함, 끝점 : 미포함)
console.log(exArr);
console.log(exArr.slice(2)); // -> 앞에 0, 1 인덱스 잘라버려
console.log(exArr.slice(0, 3)); // -> 앞에 0, 1, 2인덱스 이외에 잘라버려
// 가운데 2개만 나오고 싶으면?
console.log(exArr.slice(1, 3)); // 시작점과 끝점이야

console.log();
console.log("-------------------");
console.log();

// splice -> 배열 자르기 : (시작점으로부터 몇개의 아이템을 자르고 싶은지)
let newArr = ["apple", "banana", "grape", "mango"];
console.log(newArr);
newArr.splice(2, 1);
console.log(newArr);

/**
 * slice 와 splice의 차이점
 * slice -> 기존의 배열을 건들지 안는다 : 새로운 배열 만들기
 */
