const number = parseFloat(prompt("Digite um número"));

let results = "";
for (let index = 1; index <= 20; index++) {
  results += " -> " + number + " * " + index + " = " + number * index + "\n";
}

alert("O resultado da tabuada " + number + ":\n\n" + results);
