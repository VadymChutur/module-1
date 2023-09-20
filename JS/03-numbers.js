let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
console.log(elementWidth);

let elementHeight = '200.74px';
elementHeight = Number.parseFloat(elementHeight);
console.log(elementHeight);

let salary = 1300.16475;
salary = Number(salary.toFixed(2));
console.log(salary);

let quantity = '30';
let value = 'This string can`t number';

console.log(Number(value));

const base = 2;
const power = 5;
// const result = Math.pow(base, power);
// console.log(result);

// console.log(base ** power);

// console.log(Math.sqrt(64));

// let number = prompt('Enter the number');
// let numberPower = prompt('Enter the number of power');

// number = Number(number);
// console.log(number);
// numberPower = Number(numberPower);
// console.log(numberPower);

// const result = number ** numberPower;
// console.log(result);

const max = 255;
const min = 0;

let random = Math.round(Math.random() * (max - min) + min);

console.log(random);

// Math.random() * (max - min) + min;
