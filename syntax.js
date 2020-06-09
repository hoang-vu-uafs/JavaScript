var variable = null;
let firstName = "Hoang";
const lastName = "Vu";
firstName = 12;

console.log(firstName);
// undefined, null, boolean, string, number

const items = [
  "name",
  42,
  ["array1", "array2"],
  function () {
    console.log("hello world");
  },
];

console.log(items[3]());

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// type casting
//const stringLastName = lastName.toString();
const stringLastName = lastName + "";

// 6 falsy values
// false, 0, "", null, undefined, NaN

let randomNum = 1;
let convertToBool = Boolean(randomNum);
console.log(typeof convertToBool);

[];
