const sum = (param, ...numbers) => numbers.reduce((acc, num) => acc + num, 0);

console.log(sum(1, 1));
console.log(sum(2, 2, 2, 2, 2, 2));

console.log(sum(9, 12, 32, 12, 23, 86));

const sumWithForEach = (...numbers) => {
    return numbers.forEach((element) => element + element);
};

console.log(sumWithForEach(9, 12, 32, 12, 23, 86));

// const sum = (...numbers) => numbers.filter((el) => el > 10);

// console.log(sum(1, 3, 55, 2, 213, 4, 5, 3, 23));

// const arr = [1, 3, 55, 2, 213, 4, 5, 3, 23];

// const newArr = arr.filter((el) => {
//     return el < 8;
// });

// console.log(newArr);