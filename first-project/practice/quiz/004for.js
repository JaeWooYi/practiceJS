console.log("1번");
// 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

console.log();
console.log("------------------------");
console.log();

console.log("2번");
// 1부터 100까지 홀수만 출력하자.
for (let i = 0; i < 101; i++) {
  if (i % 2 == 1) {
    console.log("홀수 : ", i);
  }
}

console.log();
console.log("------------------------");
console.log();

console.log("3번");
// 1부터 50까지 369결과를 프린트하자.
/**
 * 1
2
짝 
4
5 
짝
...생략 

28 
짝
짝 
짝
짝 
짝짝 
 */
for (let i = 0; i < 51; i++) {
  if (i % 3 == 0) {
    console.log("짝");
  } else {
    console.log(i);
  }
}

console.log();
console.log("------------------------");
console.log();

console.log("4번");
//주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.
/**
 * 소수란 약수의 개수가 2개뿐인 숫자래... --> 1과 자기 자신..
 * 아니 이건 수학문제자나 ....
 * 이건 못풀어...
 */
let number = 100;
for (let i = 1; i < 101; i++) {
  if (number) {
  }
}
