const obj = new Object();
obj.name = "Hoang";
obj.age = 40;
obj.arr = [1, 2, 3, 4];
obj.func = function () {
  return "hello world";
};

const obj1 = {};
obj1.name = "Tom";
obj1["age"] = 12;

const obj2 = {
  name: "Andrew",
  age: 21,
  item: {
    car: "Tesla",
    house: "10 millions $",
  },
};

console.log(obj2.item.car);

// const obj3 = obj2;

// obj3.name = "Victor";
// console.log(obj2.name);

const obj4 = Object.assign({}, obj2);
obj4.name = "Victor";
console.log(obj2.name);

const obj5 = { ...obj2 };
