const touristName = prompt("Qual é o seu nome?");
let cities = "";
let count = 0;

let answer = prompt(`Já visitou alguma cidade antes?`).toLocaleLowerCase();
while (answer === "sim") {
  let city = prompt("Qual é o nome da cidade visitada?");
  cities += " - " + city + "\n";
  count++;
  answer = prompt(`Já visitou alguma cidade antes?`).toLocaleLowerCase();
}

alert(`Turista: ${touristName} \n
Quantidades de cidades visitadas ${count} \n
cidades visitas \n ${cities}
`);
