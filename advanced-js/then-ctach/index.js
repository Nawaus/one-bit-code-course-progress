function execute() {
  // it does smt
  return new Promise((resolve, reject) => {
    console.log("it's running");
    setTimeout(() => {
      if (false) {
        reject(false);
      } else {
        console.log("resolving promise");
        resolve(42);
      }
    }, 1000 * 2);
  });
}

const p = execute();
console.log(p);

setTimeout(() => {
  console.log(p);
}, 2000);

p.then((result) => {
  console.log(`Promise resolved, Result: ${result}`);
})
  .catch((err) => {
    console.log(`The promise was rejected, Reason: ${err}`);
  })
  .finally(() => {
    console.log("The promise is finished");
  });
