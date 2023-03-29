const average = (...params) => {
    return params.reduce((acc, num) => acc + num / params.length, 0);
};

console.log(`Média Aritmética Simples: ${average(3, 6, 10, 9)}`);
// console.log(simpleAverage(2, 6, 3, 7, 4));

// const weightedAverage = (...entries) => {
//     const sum = entries.reduce(
//         (accum, { number, weight }) => accum + number * (weight ? ? 1),
//         0
//     );
//     const weightSum = entries.reduce(
//         (accum, entry) => accum + (entry.weight ? ? 1),
//         0
//     );
//     return sum / weightSum;
// };

// console.log(
//     `Média Ponderada: ${weightedAverage(
//     { number: 9, weight: 3 },
//     { number: 7 },
//     { number: 10, weight: 1 }
//   )}`
// );

const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => {
        a - b;
    });
    const middle = Math.floor(orderedNumbers.length / 2);
    if (orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle];
    }
    const firstMedian = orderedNumbers[middle - 1];
    const secondMedian = orderedNumbers[middle];
    return average(firstMedian, secondMedian);
};

const mode = (...params) => {
    const quantities = params.map((num) => [
        num,
        params.filter((n) => num === n).length,
    ]);
    quantities.sort((a, b) => b[1] - a[2]);
    return quantities[0][0];
};

console.log(
    `Moda: ${mode(
    1,
    1,
    99,
    99,
    99,
    99,
    99,
    99,
    99,
    99,
    5,
    4,
    9,
    7,
    4,
    3,
    5,
    2,
    4,
    0,
    4
  )}`
);