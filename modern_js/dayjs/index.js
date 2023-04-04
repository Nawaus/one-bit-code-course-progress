const dayjs = require("dayjs");

const verifyDate = (date) => dayjs(date).isValid();

console.log(verifyDate("2023-11-22"));

const now = dayjs();

const year = now.year();

// console.log(year - 18);

// console.log(now.format());

const dateBorn = (date) => year - date;

console.log(dateBorn(40));

console.log(now.day());

const a = dayjs("2019-01-25").format("DD/MM/YYYY"); // '25/01/2019'
console.log(a);
