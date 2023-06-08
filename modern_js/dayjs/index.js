const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();
  const ageInYears = today.diff(birthday, "year");
  const nextBirthday = birthday.add(ageInYears + 1, "year");
  const daysToNextBirthday = nextBirthday.diff(today, "day") + 1;

  console.log(`Idade: ${ageInYears}`);
  console.log(`Próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`);
  console.log(
    `Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`
  );
}

birthday("1982-01-03");
birthday("2005-04-26");