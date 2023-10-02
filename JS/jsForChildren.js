// // const secondsInAMinute = 60;
// // const minutesInAnHour = 60;
// // const secondsInAnHour = secondsInAMinute * minutesInAnHour;
// // const hoursInADay = 24;
// // const secondsInADay = secondsInAnHour * hoursInADay;
// // const daysInAYear = 365;
// // const secondsInAYear = secondsInADay * daysInAYear;
// // const age = 37;
// // console.log(secondsInAnHour);
// // console.log(secondsInADay);
// // console.log(secondsInAYear);
// // console.log(age * secondsInAYear);
// let highFives = 0;
// console.log(highFives);
// console.log((highFives += 1));
// console.log((highFives += 1));
// console.log(highFives);

// let balloons = 100;

// console.log((balloons *= 2));
// console.log((balloons /= 4));

// const myAwesomeString = 'Something REALLY awesome!!!';
// console.log(myAwesomeString);

// const greeting = 'Hello ';
// const myName = 'Nick';
// console.log(greeting + myName);
// console.log('Supercalifragilisticexpialidocious'.length);

// const codeWord1 = 'are';
// const codeWord2 = 'tubas';
// const codeWord3 = 'unsafe';
// const codeWord4 = '?!';
// console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1]);

// const longString = 'My long string is long';
// console.log(longString.slice(3, 14));
// console.log(longString.slice(3));

// const myString = 'hELlo THERE, hOW ARE yOu doIng?';
// const sillyString = 'hELlo THERE, hOW ARE yOu doIng?';
// const lowerString = sillyString.toLowerCase();
// const firstCharacter = lowerString[0];
// const firstCharacterUpper = firstCharacter.toUpperCase();
// const restOfString = lowerString.slice(1);

// console.log(myString[0].toUpperCase() + myString.slice(1).toLowerCase());

// console.log(firstCharacterUpper + restOfString);

// const isWeekend = false;
// const hadShower = true;
// const hasApple = false;
// const hasOrange = true;
// const shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);

// console.log(shouldGoToSchool);

// const height = 60;
// const heightRestriction = 48;
// console.log(height <= heightRestriction);

// const mySecretNumber = 5;
// const chicoGuess = 3;
// const harpoGuess = 7;
// const grouchoGuess = 5;
// console.log(mySecretNumber === chicoGuess);
// console.log(mySecretNumber === harpoGuess);
// console.log(mySecretNumber === grouchoGuess);

// const stringNumber = '5';
// const actualNumber = 5;
// console.log(stringNumber === actualNumber);
// console.log(stringNumber == actualNumber);

// const age = 12;
// const accompanied = true;
// const agePg = 13;

// console.log(age >= agePg || accompanied);

// const dinosaurs = [
//   'T-Rex',
//   'Velociraptor',
//   'Stegosaurus',
//   'Triceraptors',
//   'Brachiosaurus',
//   'Pteranodon',
//   'Apatosaurus',
//   'Diplodocus',
//   'Compsognathus',
// ];

// dinosaurs[0] = 'Tyrannosurus Rex';
// dinosaurs[9] = 'Pholosoraptor';

// console.log(dinosaurs[0]);
// console.log(dinosaurs[3]);
// console.log(dinosaurs);

// const dinosaurusAndNumbers = [
//   3,
//   'dinosaurus',
//   ['triceraptops', 'stegosaurus', 3627.5],
//   10,
// ];

// console.log(dinosaurusAndNumbers[2][0]);

// const maniacs = ['Yakko', 'Wakko', 'Dot'];
// console.log(maniacs[maniacs.length - 1]);

// const animals = [];
// animals.push('Cat');
// animals.push('Dog');
// animals.push('Liama');
// animals.unshift('Monkey');
// animals.unshift('Polar Bear');
// const lastAnimal = animals.pop();
// console.log(animals);
// console.log(lastAnimal);

// const furryAnimals = ['Alpaca', 'Ring-tailed Lemur', 'Yeti'];
// const scalyAnimals = ['Boa Constrictor', 'Godzilla'];
// const featheredAnimals = ['Macaw', 'Dodo'];
// const furryAndScalyAnimals = furryAnimals.concat(
//   scalyAnimals,
//   featheredAnimals
// );
// console.log(furryAndScalyAnimals);
// console.log(furryAnimals);

// const colors = ['red', 'green', 'blue'];
// console.log(colors.indexOf('blue'));
// console.log(colors.indexOf('green'));
// console.log(colors.indexOf('purple'));

// const insects = ['Bee', 'Ant', 'Bee', 'Bee', 'Ant'];
// console.log(insects.indexOf('Ant'));

// const boringAnimals = ['Monkey', 'Cat', 'Fish', 'Lizard'];
// console.log(boringAnimals.join());
// console.log(boringAnimals.join(' - '));
// console.log(boringAnimals.join('*'));
// console.log(boringAnimals.join(' sees '));

// const landmarks = [];
// landmarks.push('My house');
// landmarks.push('Front path');
// landmarks.push('Flickering stretlamp');
// landmarks.push('Leaky fire hyfrant');
// landmarks.push('Fire station');
// landmarks.push('Cat rescue center');
// landmarks.push('My old school');
// landmarks.push('My friend`s house');

// landmarks.pop();
// landmarks.pop();
// landmarks.pop();
// landmarks.pop();
// landmarks.pop();
// landmarks.pop();
// landmarks.pop();
// landmarks.pop();
// landmarks.pop();
// console.log(landmarks);

// console.log(Math.floor(Math.random() * 4));

// const randomWords = ['Explosion', 'Cave', 'Princess', 'Pen'];
// const randomIndex = Math.floor(Math.random() * 4);
// console.log(randomWords[randomIndex]);

const phrases = [
  'That sounds good',
  'Yes, you should definitely do that',
  'I`m not sure that`s a great idea',
  'Maybe not today?',
  'Computer says no',
];
// Maybe a smoking?
console.log(phrases[Math.floor(Math.random() * 5)]);
//maybe tea?
console.log(phrases[Math.floor(Math.random() * 5)]);

const randomBodyParts = ['Face', 'Nose', 'Hair', 'Arm', 'Legs'];
const randomAdjectives = ['Smelly', 'Boring', 'Stupid'];
const randomWords = ['Fly', 'Marmot', 'Stick', 'Monkey', 'Rat'];
const randomAnimalsBodyParts = ['Hoof', 'Tusk', 'Tail'];

const randomBodyPart =
  randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
const randomAdjective =
  randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
const randomAnimalBodyPart =
  randomAnimalsBodyParts[
    Math.floor(Math.random() * randomAnimalsBodyParts.length)
  ];

const randomInsult = `Your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}!!!`;
const randomInsultBetter = `Your ${randomBodyPart} is more ${randomAdjective} than a ${randomWord}'s ${randomAnimalBodyPart}`;
console.log(randomInsult);
console.log(randomInsultBetter);

const arrNumberBigest = [3, 2, 1];
console.log(arrNumberBigest.join(' is bigger then '));
