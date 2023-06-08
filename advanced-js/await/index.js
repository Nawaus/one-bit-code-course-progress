async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("arguments must be type number");
  }
  return a + b;
}

(async () => {
  try {
    const result = await asyncSum(50, null);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
})();
