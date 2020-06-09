const arr = [];
const obj = {};
//arr.push("name");

Array.prototype.push = function () {
  return "hello world";
};

console.log(arr.push());
