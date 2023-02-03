// // let ask = "";

// while (ask !== "6") {
//   alert(`
// Calcular área do triângulo 1
// Calcular área do retângulo 2
// Calcular área do quadrado 3
// Calcular área do trapézio 4
// Calcular área do círculo 5
// Sair 6
// `);
//   ask = prompt("Qual você deseja?");
// }

function calculateTriangle(base, high) {
  return (base * high) / 2;
}

function calculateRectangle(base, high) {
  return base * high;
}

function calculateSquare(side) {
  return side ** 2;
}

function calculateTrapeze(largeBase, smallBase, hight) {
  if (largeBase > smallBase) {
    return ((largeBase + smallBase) * hight) / 2;
  } else {
    return ((smallBase + largeBase) * hight) / 2;
  }
}

function calculateCircle(raio) {
  return raio ** 2 * 3.14;
}

console.log(calculateCircle(10));
