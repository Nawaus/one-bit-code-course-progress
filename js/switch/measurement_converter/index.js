const measureValue = parseFloat(prompt("Digite um valor em metros"));
const toConvertValue = prompt("Qual medida você gostaria de converter?");

switch (toConvertValue) {
  case "mm":
    alert(`${measureValue}m equivale a ${measureValue * 1000}mm`);
    break;
  case "cm":
    alert(`${measureValue}m equivale a ${measureValue * 100}cm`);
    break;
  case "dm":
    alert(`${measureValue}m equivale a ${measureValue * 10}dm`);
    break;
  case "dam":
    alert(`${measureValue}m equivale a ${measureValue * 10}dam`);
    break;
  case "hm":
    alert(`${measureValue}m equivale a ${measureValue / 100}hm`);
    break;
  case "km":
    alert(`${measureValue}m equivale a ${measureValue / 1000}km`);
    break;
  default:
    alert("Por favor ensira uma medida válida");
    break;
}
