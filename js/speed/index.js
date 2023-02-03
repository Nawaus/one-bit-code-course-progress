const firstVehicle = prompt("Qual é o nome do primeiro veiculo?");
const firstVehicleSpeed = prompt(
  `Qual é a velocidade do veículo ${firstVehicle}?`
);

const secondVehicle = prompt("Qual é o nome do segundo veiculo?");
const secondVehicleSpeed = Number(
  prompt(`Qual é a velocidade do veículo ${secondVehicle}?`)
);

if (firstVehicleSpeed > secondVehicleSpeed) {
  alert(`O veículo ${firstVehicle} é mais rapido que o ${secondVehicle}`);
} else if (secondVehicleSpeed > firstVehicleSpeed) {
  alert(`O veículo ${secondVehicle} é mais rapido que o ${firstVehicle}`);
} else {
  alert(`Os dois possuem a mesma velocidade`);
}
