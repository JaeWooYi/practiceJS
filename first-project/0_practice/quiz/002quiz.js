let animals = [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur",
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Grasshopper",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Kangaroo",
  "Kingfisher",
  "Koala",
  "Kookabura",
  "Moose",
  "Narwhal",
  "Newt",
  "Nightingale",
  "Octopus",
  "Okapi",
  "Opossum",
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit",
  "Raccoon",
  "Rail",
  "Ram",
  "Rat",
  "Raven",
  "Red deer",
  "Sandpiper",
  "Sardine",
  "Sparrow",
  "Spider",
  "Spoonbill",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Tiger",
  "Toad",
  "Whale",
  "Wildcat",
  "Wolf",
  "Worm",
  "Wren",
  "Yak",
  "Zebra",
];

// 1. 어레이에 마지막 아이템 “Zebra” 제거하기
console.log(animals.length);
animals.pop();
console.log(animals);

console.log();
console.log("위1-------------------------");
console.log();

// 2. 주어진 어레이에 “Dog” 추가하기
animals.push("Dog");
console.log(animals);

console.log();
console.log("위2-------------------------");
console.log();

// 3. 주어진 어레이에 “Mosquito”,“Mouse”,“Mule” 추가하기
animals.push("Mosquito", "Mouse", "Mule");
console.log(animals);

console.log();
console.log("위3-------------------------");
console.log();

// 4. 해당 어레이에는 "Human"이 있는가?
console.log(animals.includes("Human"));

console.log();
console.log("위4-------------------------");
console.log();

// 5. 해당 어레이에는 “Cat” 이 있는가?
console.log(animals.includes("Cat"));

console.log();
console.log("위5-------------------------");
console.log();

// 6. "Red deer"을 "Deer"로 바꾸시오
console.log(animals.includes("Red deer"));
console.log(animals.indexOf("Red deer"));
animals[77] = "Deer";
/**
 * animals[animals.indexOf("Red deer")] = "Deer"로 해도 되는군
 */

console.log();
console.log("위6-------------------------");
console.log();

// 7. "Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오 -> spider부터니까 spider도 지워야 겠지?
console.log(animals.indexOf("Spider"));
animals.splice(81, 3);
console.log(animals);
/**
 * animals.splice(animals.indexOf("Spider"),3)로 해도 되는군
 */

console.log();
console.log("위7-------------------------");
console.log();

// 8. "Tiger"이후의 값을 제거하시오
console.log(animals.indexOf("Tiger"));
animals.splice(85);
console.log(animals);
/**
 * animals.splice(animals.indexOf("Tiger"))로 해도 된다....
 */

console.log();
console.log("위8-------------------------");
console.log();

// 9. "B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오
console.log(animals.indexOf("Baboon"));
console.log(animals.indexOf("Bison"));
let newArr = animals.slice(8, 16);
console.log(newArr);
/**
 * let newList = animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison")+1)가 더 편하군.
 */

console.log();
console.log("위9-------------------------");
console.log();
