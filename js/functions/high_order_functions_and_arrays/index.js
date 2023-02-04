const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

const names = personagens.map((element) => {
  return element.nome;
});

// document.write(`- ${names} -`);

const raca = personagens.filter((element) => {
  return element.raca === "Orc";
});

// document.write(`- ${raca} -`);
// console.log(raca);

const totalLevel = personagens.reduce(
  (value, personagen) => value + personagen.nivel,
  0
);

// document.write(`- ${totalLevel} -`);
// console.log(totalLevel);

const racas = personagens.reduce(
  (value, personagen) => value + personagen.nivel,
  {}
);

document.write(`- ${racas} -`);
console.log(racas);
