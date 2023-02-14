const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.canditados.length + "canditados\n";
    return textoFinal;
  }, "");
  alert(vagasEmTexto);
}

function criarNovaVaga() {
  const nome = prompt("Insira um nome para vaga:");
  const descricao = prompt("Insira uma descrição para a vaga:");
  const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa)");

  const confirmacao = confirm(`
  Deseja criar uma vaga com esssas informações?\n
  "Nome:" ${nome} "\n Descrição: " ${descricao} \n Data limite: ${dataLimite}
  `);

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, canditados: [] };
    vagas.push(novaVaga);
    alert("Vaga criada.");
  }
}

function exibirVaga() {
  const indice = prompt("Informe a vaga que deseja exibir:");
  const vaga = vagas[indice];

  const canditadosEmTexto = vaga.canditados.reduce((textoFinal, canditados) => {
    return textoFinal + "\n - " + canditados;
  }, "");

  alert(
    "vaga n° " +
      indice +
      "\nNome" +
      vaga.nome +
      "\n Descrição:" +
      "\nData limite:" +
      vaga.dataLimite +
      "\nQuantidade de canditados" +
      vaga.canditados.length +
      "\n canditados inscritos:" +
      canditadosEmTexto
  );
}

function inscreverCanditado() {
  const canditado = prompt("Informe o do(a) canditado(a):");
  const indice = prompt(
    "Ifnorme uma vaga que o canditado(a) desejar se inscrever"
  );
  const confirmacao = confirm(
    "Desja inscrever o canditado" +
      canditado +
      " na vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\n Descrição" +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vaga.canditados.push(canditado);
    alert("INcrição realizada");
  }
}

function excluirVaga() {
  const indice = prompt();
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
