function callback() {
  console.log("display data");
}

function getData(callback) {
  setTimeout(callback, 1000);
}

getData(callback);
