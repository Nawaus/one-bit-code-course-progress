function calculateAverage(a, b) {
  const average = (a + b) / 2;
  return average;
}

const result = calculateAverage(5, 5);
// console.log(result);

function createProduct(name, price) {
  const product = {
    name,
    price,
    stock: 1,
  };
  return product;
}

const cellphone = createProduct("Cellphone", 2000);
// console.log(cellphone);

function rectangleArea(base, hight) {
  return base * hight;
}

const areaResult = rectangleArea(3, 4);

function squareArea(side) {
  return rectangleArea(side, side);
}

// console.log(rectangleArea(3, 5));

// console.log(squareArea(9));

// a function can't return twice
function hello() {
  let text = "...";
  return text;
  text = "Hello, World";
  console.log(text);
}

// console.log(hello());

// you can use return many times if you use (if)
function isAdult(age) {
  if (age >= 18) {
    return `You're adult`;
  } else {
    return `You're not adult`;
  }
}

console.log(isAdult(20));
console.log(isAdult(15));
