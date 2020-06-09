function callback(message) {
  console.log(message);
}

function err(message) {
  console.log(message);
}

function getData() {
  const connection = true;

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (connection === false) {
        return reject("error");
      } else {
        return resolve("success");
      }
    }, 1000);
  });
}

// getData()
//   .then(function (m) {
//     console.log(m);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

Promise.all([getData(), getData(), getData()])
  .then(function (message) {
    message.forEach((m) => {
      console.log(m);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
