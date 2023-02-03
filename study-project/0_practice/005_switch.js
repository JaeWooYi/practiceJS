let menu = 0;

if (menu == 0) {
  console.log(0);
} else if (menu == 1) {
  console.log(1);
} else if (menu == 2) {
  console.log(2);
} else {
  console.log("2 초과");
}

console.log();
console.log("-----------------------------");
console.log();

/**
 * 위를 switch로
 */

switch (menu) {
  case 0:
    console.log(0);
    break;

  case 1:
    console.log(1);
    break;

  case 2:
    console.log(2);
    break;

  default:
    console.log("2 초과");
    break;
}

console.log();
console.log("-----------------------------");
console.log();

/**
 * if를 삼항연산자로
 */

let num = 10;
console.log(num <= 10 ? "10이하" : "10초과");
