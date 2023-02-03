function double(x) {
  alert(`O dobro de ${x} é ${x * 2}`);
}

// double(4);
// double(2);
// double(8);
// double(5);
// double(3);

function sayHi(name = "Mundo") {
  alert(`Olá ${name}`);
}

// sayHi("Gustavo");
// sayHi("Idk");
// sayHi();

function sum(x, b) {
  alert(`á soma de ${x} e ${b} é ${x + b}`);
}

// sum(2, 4);
// sum(6, 1);
// sum(8, 2);

function creatUser(name, email, passworld, type) {
  const user = {
    name,
    email,
    passworld,
    type,
  };
  console.log(user);
}

// creatUser("Gustavo", "23232@gmail", 123456, "admin");

function objectAsUser(user) {
  user.nome, user.email;
}

const dataUser = {
  nome: "",
  phoneNumber: "",
  email: "",
  passworld: "",
};

objectAsUser(dataUser);
