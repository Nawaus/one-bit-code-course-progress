const world = prompt("Informe uma palavra");
let invertWorld = "";

for (let i = world.length - 1; i >= 0; i--) {
  invertWorld += world[i];
}

if (world === invertWorld) {
  alert(`${world} é um palindromo`);
} else {
  alert(`${world} nãe é um palindromo`);
}
