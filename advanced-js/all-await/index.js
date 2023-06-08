function waitFor(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds);
  });
}

const numbers = [4, 5, 9, 13, 77];

// Promise.all(squares).then((result) => {
//   console.log(result);
// });

async function exe() {
  const squares = await Promise.all(
    numbers.map(async (number) => {
      await waitFor(2000);
      return number * number;
    })
  );
  console.log(squares);
}

exe();
