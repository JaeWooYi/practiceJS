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
