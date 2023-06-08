let count = 0;
let ask;
do {
  alert(`
    Cadastrar um imovel (1)\n
    Sair (2)`);
  ask = prompt("Qual opção você deseja?");
  if (ask === "1") {
    let obj = [
      {
        owner: prompt("Qual é o nome do propietário"),
        numberOfRooms: prompt("Quantidade de quartos"),
        numberOfBathrooms: prompt("Quantidade de banheiros"),
        garage: prompt("Tem garagem?"),
      },
    ];
    count++;
    for (let index = 0; index < obj.length; index++) {
      console.log(obj[index]);
    }
    console.log(`Você cadastrou ${count} imóveis`);
  }
} while (ask !== "2");
