let ask = "";

while (ask !== "6") {
  alert(`
Calcular área do triângulo 1
Calcular área do retângulo 2
Calcular área do quadrado 3
Calcular área do trapézio 4
Calcular área do círculo 5
Sair 6
`);
  ask = prompt("Qual você deseja?");
  if (ask === "1") {
    const base = parseFloat(prompt("Digite a base"));
    const hight = parseFloat(prompt("Digite a altura"));
    alert(`a área desse triângulo é -> ${calculateTriangle(base, hight)}`);
  } else if (ask === "2") {
    const base = parseFloat(prompt("Digite a base"));
    const hight = parseFloat(prompt("Digite a altura"));
    alert(`a área desse retângulo é -> ${calculateRectangle(base, hight)}`);
  } else if (ask === "3") {
    const side = parseFloat(prompt("Digite o lado"));
    alert(`a área desse quadrado é -> ${calculateSquare(side)}`);
  } else if (ask === "4") {
    const largeBase = parseFloat(prompt("Digite o lado Maior"));
    const smallBase = parseFloat(prompt("Digite o lado Menor"));
    const hight = parseFloat(prompt("Digite a altura"));
    alert(
      `a área desse trapézio é -> ${calculateTrapeze(
        largeBase,
        smallBase,
        hight
      )}`
    );
  } else if (ask === "5") {
    const radiu = parseFloat(prompt("Digite o raio"));
    alert(`O área o circulo é -> ${calculateCircle(radiu)}`);
  } else if (ask === "6") {
    alert("Finalizando...");
  } else {
    alert("Por favor digite uma opção válida");
  }
}

function calculateTriangle(base, high) {
  return (base * high) / 2;
}

function calculateRectangle(base, hight) {
  return base * hight;
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
