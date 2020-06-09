function one() {
  setTimeout(function () {
    console.log("1");
  }, 2000);
}

function two() {
  console.log("2");
}

function three() {
  console.log("3");
}

one();
two();
three();
