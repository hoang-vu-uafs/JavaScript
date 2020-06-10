const myName = {
  name: "Tom",
  sayHi: function () {
    // console.log("Hi " + this.name);
    console.log(`Hi ${this.name}`);
  },
};

myName.sayHi();

const a = myName.sayHi;
a();

const myName2 = {
  name: "Andrew",
};

myName2.sayHi = myName.sayHi;
myName2.sayHi();

myName2.sayHi.bind({ name: "bind" })();
myName2.sayHi.bind(myName)();
// myName2.sayHi.call(myName)();
// myName2.sayHi.apply(myName)();

const myName3 = {
  name: "name3",
  sayHi: () => {
    console.log("Hi " + this.name);
  },
};

myName3.sayHi();

const myName4 = {
  name: "name4",
  sayHi: function () {
    return () => {
      console.log("Hi " + this.name);
    };
  },
};

myName4.sayHi()();
