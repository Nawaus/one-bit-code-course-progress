let pokemon = "Charmander";

function evolve() {
  pokemon = "Charmeleon";
}

// console.log(pokemon);
// evolve();
// console.log(pokemon);

function createAnimal() {
  let animal = "gato";
}

createAnimal();
// console.log(animal);

// never use (var)
function evaluateGrade(grade) {
  if (grade >= 60) {
    var approved = true;
    let situation = "Approved";
  } else {
    var approved = false;
    let situation = "Disapproved";
  }
  console.log(grade);
  console.log(approved);
  console.log(situation);
}

// evaluateGrade(83);
// evaluateGrade(49);

function hello(params) {
  var text = "Hello world";
}

// console.log(text);
