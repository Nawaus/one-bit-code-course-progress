const name = prompt("Qual é o seu nome?");
const lastName = prompt("Qual é o seu sobre nome?");
const studyWith = prompt("Oque você estuda?");
const bornYear = prompt("Quando você nasceu?");
const today = new Date();
const year = today.getFullYear();

alert(
  `O seu nome completo é ${name + " " + lastName} \n 
  } \n e você estuda ${studyWith} \n e tem ${year - bornYear} anos`
);
