// const secondsInAMinute = 60;
// const minutesInAnHour = 60;
// const secondsInAnHour = secondsInAMinute * minutesInAnHour;
// const hoursInADay = 24;
// const secondsInADay = secondsInAnHour * hoursInADay;
// const daysInAYear = 365;
// const secondsInAYear = secondsInADay * daysInAYear;
// const age = 37;
// console.log(secondsInAnHour);
// console.log(secondsInADay);
// console.log(secondsInAYear);
// console.log(age * secondsInAYear);
let highFives = 0;
console.log(highFives);
console.log((highFives += 1));
console.log((highFives += 1));
console.log(highFives);

let balloons = 100;

console.log((balloons *= 2));
console.log((balloons /= 4));

const myAwesomeString = 'Something REALLY awesome!!!';
console.log(myAwesomeString);

const greeting = 'Hello ';
const myName = 'Nick';
console.log(greeting + myName);
console.log('Supercalifragilisticexpialidocious'.length);

const codeWord1 = 'are';
const codeWord2 = 'tubas';
const codeWord3 = 'unsafe';
const codeWord4 = '?!';
console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1]);

const longString = 'My long string is long';
console.log(longString.slice(3, 14));
console.log(longString.slice(3));

const myString = 'hELlo THERE, hOW ARE yOu doIng?';
const sillyString = 'hELlo THERE, hOW ARE yOu doIng?';
const lowerString = sillyString.toLowerCase();
const firstCharacter = lowerString[0];
const firstCharacterUpper = firstCharacter.toUpperCase();
const restOfString = lowerString.slice(1);

console.log(myString[0].toUpperCase() + myString.slice(1).toLowerCase());

console.log(firstCharacterUpper + restOfString);

const isWeekend = false;
const hadShower = true;
const hasApple = false;
const hasOrange = true;
const shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);

console.log(shouldGoToSchool);

const height = 60;
const heightRestriction = 48;
console.log(height <= heightRestriction);

const mySecretNumber = 5;
const chicoGuess = 3;
const harpoGuess = 7;
const grouchoGuess = 5;
console.log(mySecretNumber === chicoGuess);
console.log(mySecretNumber === harpoGuess);
console.log(mySecretNumber === grouchoGuess);

const stringNumber = '5';
const actualNumber = 5;
console.log(stringNumber === actualNumber);
console.log(stringNumber == actualNumber);

const age = 12;
const accompanied = true;
const agePg = 13;

console.log(age >= agePg || accompanied);

const dinosaurs = [
  'T-Rex',
  'Velociraptor',
  'Stegosaurus',
  'Triceraptors',
  'Brachiosaurus',
  'Pteranodon',
  'Apatosaurus',
  'Diplodocus',
  'Compsognathus',
];

dinosaurs[0] = 'Tyrannosurus Rex';
dinosaurs[9] = 'Pholosoraptor';

console.log(dinosaurs[0]);
console.log(dinosaurs[3]);
console.log(dinosaurs);

const dinosaurusAndNumbers = [
  3,
  'dinosaurus',
  ['triceraptops', 'stegosaurus', 3627.5],
  10,
];

console.log(dinosaurusAndNumbers[2][0]);

const maniacs = ['Yakko', 'Wakko', 'Dot'];
console.log(maniacs[maniacs.length - 1]);

const animals = [];
animals.push('Cat');
animals.push('Dog');
animals.push('Liama');
animals.unshift('Monkey');
animals.unshift('Polar Bear');
const lastAnimal = animals.pop();
console.log(animals);
console.log(lastAnimal);
