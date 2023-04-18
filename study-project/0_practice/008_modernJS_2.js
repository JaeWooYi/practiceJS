let a = [1, 3];
let b = [2, 4];
let c = [5, 7];

let result = a.concat(b, c);
console.log(result);

let result2 = [...a, ...b, ...c];
console.log(result2);

console.log();
console.log("---------------------------");
console.log();

// function test() {
//     console.log('요즘엔 아래처럼 써')
//     return 'haha'
// }
let test = () => {
  console.log("요즘엔 아래처럼 써"); // 하지만 위의 옛날 문법을 대체할순 없다. --> this가 없기때문에 : 008_modernJS_3.js에 예제
  return "haha";
};
test();
console.log(test);
