function exe() {
  // it does smt
  return new Promise((resolve, reject) => {
    console.log("it's running");
    setTimeout(() => {
      console.log("resolving promise");
      resolve("Result");
    }, 1000 * 2);
  });
}

const p = exe();
console.log(p);

setTimeout(() => {
  console.log(p);
}, 2000);
