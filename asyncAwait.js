function getData() {
  const connection = false;

  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (connection === false) {
        return reject("error");
      } else {
        return resolve("success");
      }
    }, 1000);
  });
}

async function asyncAwait() {
  try {
    const response = await getData();

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

asyncAwait();
