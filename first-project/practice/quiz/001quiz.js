// quiz1
// console.log(a + ", " + b);의 값이 2, 1이 나오도록
let a = 1;
let b = 2;
console.log(a + ", " + b);

a = b;
b = 1;
console.log(a + ", " + b);

console.log();
console.log("-------------------");
console.log();

// quiz2
// 다음 연산자 값 에측해서 적기

// 20 + 30                  --> 50

// “20” + “30”              --> 2030

// “Hello” + " " + 2021     --> Hello 2021
console.log("Hello" + " " + 2021);

// 1 + 2 * 3                --> 7

// (1 + 3) ** 2             --> 16
console.log((1 + 3) ** 2); // 제곱이란 뜻이군 : **

// 1 / 0                    --> Infinity
console.log(1 / 0);

// 6 % 2                    --> 0

// 7.5 % 2                  --> 1.5
console.log(7.5 % 2);

// 5 == 5                   --> true

// 5 === 5                  --> true

// 5 == “5”                 -->  true
console.log('5 == "5" : ', 5 == "5");

// 5 === “5”                --> true

// 5 != 5.0                 --> false

// 5 !== 5.0                --> false
console.log(5 !== 5.0);

// “true” === true          --> false // 문자열은 false구나
console.log("true" === true);

// 5 <= 5.0                 --> true

// 5 >= 5                   --> true

// true || true             --> true

// true || false            --> true
console.log(true || false);
console.log(false || true);

// true && true             --> true
console.log(true && true);

// true && false            --> false
console.log(true && false);
console.log(false && true);

// !true                    --> false

// !false                   --> true

/**
 *
 * 함수가 실행되기전에 선언해둔 변수들을 최상단으로 끌어올리는것 -> 호이스팅
 *
 */
