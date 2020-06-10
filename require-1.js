const func1 = () => {
  console.log("export 1");
};

const func2 = () => {
  console.log("export 2");
};

// module.exports.func1 = func1;
// module.exports.func2 = func2;

module.exports = {
  func1,
  func2,
};
