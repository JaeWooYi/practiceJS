for (let i = 0; i < 10; i++) {
  console.log("10", i);
}

console.log();
console.log("-------------");
console.log();

for (let k = 1; k <= 10; k++) {
  if (k % 2 == 0) {
    console.log("짝수", k);
  }
}

console.log();
console.log("-------------");
console.log();

for (let i = 2; i < 10; i++) {
  for (let k = 1; k < 10; k++) {
    console.log(i + " * " + k + " = " + i * k);
  }
}

console.log();
console.log("-------------");
console.log();

let i = 0;
while (i < 10) {
  i++;
  console.log("while문 : ", i);
}
