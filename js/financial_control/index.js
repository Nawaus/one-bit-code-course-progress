let asw = prompt("Qual opção você deseja?");
do {
  let money = parseFloat(prompt("Quanto dinheiro você tem?"));
  alert(`
    você tem ${money} na conta\n
    Opção 1 adicionar dinheiro\n
    Opção 2 remover dinheiro\n
    Opção 3 encerrar programa`);
  if (asw === "1") {
    money += parseFloat(prompt("Quanto você deseja adicionar?"));
    alert(money);
  } else if (asw === "2") {
    let remove = parseFloat(prompt("Quanto você deseja remover?"));
    money -= remove;
  }
} while (asw !== "3");
