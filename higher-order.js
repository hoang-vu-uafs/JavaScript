const func1 = function () {};

function func2(func1) {}
// higher order function, call back function

const numbers = [1, 2, 3, 4];
numbers.forEach(function (number) {
  console.log(number * 2);
});

const example = numbers.map(function (number) {
  return number * 2;
});
console.log(example);

const employees = [
  { id: 1, name: "employee 1", task: "task 1", experience: 3 },
  { id: 2, name: "employee 2", task: "task 2", experience: 3 },
  { id: 3, name: "employee 3", task: "task 3", experience: 2 },
];

const goodExperience = employees
  .filter(function (employee) {
    return employee.experience > 2;
  })
  .map(function (employee) {
    return employee.name;
  });

// reduce
console.log(goodExperience);
