const openings = [
  {
    vacant: 1,
    names: [
      "Miguel",
      "Davi",
      "Pedro",
      "Ana Clara",
      "Lucas",
      "Matheus",
      "Heitor",
    ],
    amount: 193,
  },
  {
    vacant: 2,
    names: [
      "Miguel",
      "Davi",
      "Pedro",
      "Ana Clara",
      "Lucas",
      "Matheus",
      "Heitor",
    ],
    amount: 133,
  },
  {
    vacant: 3,
    names: [
      "Miguel",
      "Davi",
      "Pedro",
      "Giovanna",
      "Lucas",
      "Matheus",
      "Heitor",
    ],
    amount: 333,
  },
];

let ask = "";
while (ask !== "6") {
  alert(`
  1 - Listar vagas disponíveis
  2 - Criar um nova vaga
  3 - Visualizar uma vaga
  4 - Inscrever um candidato em uma vaga
  5 - Excluir uma vaga
  6 - Sair`);
  ask = prompt("Qual opção você deseja?");
  if (ask === "1") {
    let names = openings.map((element, i) => {
      return ` Na vaga ${i + 1} tem ${
        element.amount
      } canditados e os nomes dos canditados são: ${element.names} \n \n`;
    });
    alert(names);
  } else if (ask === "2") {
    let getName = prompt("Qual é o nome da vaga?");
    let getDescription = prompt("Qual é a descrição?");
    let getDataLimit = prompt("Qual é tempo limite da vaga?");
    let a = comfirm("Você confirma essas informações?");
    console.log(a);
  }
}

// function createPlace(
//   getName = prompt("Qual é o nome da vaga?"),
//   getDescription = prompt("Qual é a descrição?"),
//   getDataLimit = prompt("Qual é tempo limite da vaga?"),
//   comfirm = comfirm("Você confirma essas informações?")
// ) {
//   if (comfirm === true) {
//     console.log("ola");
//   }
// }

// let name = confirm("SIM?");
// if (name === true) {
//   console.log("2");
// }
