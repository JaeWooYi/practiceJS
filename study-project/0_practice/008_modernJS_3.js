let age = 17;
let person = {
  name: "boy",
  age: 100,
  getInfo: function () {
    console.log(age); // 최상단 전역 변수를 가져와 이렇게하면..(화살표함수로하면 이렇게 쓴거랑 다를게 없음)
  },
};
let person2 = {
  name: "boy",
  age: 100,
  getInfo: function () {
    console.log(this.age); // 이렇게써야 this를 쓸 수 있겠지.
  },
};

person.getInfo(); // 17이 나오지?
person2.getInfo(); // 100이 나오지?
