function normalSun(a, b) {
    return a + b;
}

console.log(`Soma normal: ${normalSun(2, 2)}`);

const anonymousSum = function(a, b) {
    return a + b;
};

console.log(`Soma anônima: ${normalSun(2, 2)}`);

const arrowSum = (a, b) => {
    return a + b;
};

console.log(`Soma arrow function: ${normalSun(2, 2)}`);

const subtract = (a, b) => a - b;

console.log(`Subtração: ${subtract(5, 2)}`);

const double = (a) => `O dobro de ${a} ${a * 5}`;

const number = 21;
console.log(double(number));

const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

const startingWithP = towns.filter((town) => town.startsWith('P'));
console.log(startingWithP);