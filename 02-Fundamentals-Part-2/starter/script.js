'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicense = true;
// }

// if (hasDriversLicense) {
//   console.log(`I can drive.`);
// }

// reserved keywords not allowed 

// const interface = 'Audio';
// const private = 434;

// function logger() {
//   console.log(`my name is adelin`);
// };

// function fruitParameters(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitParameters(3, 5);
// console.log(appleJuice);

// const appleOrangeJuice = fruitParameters(2, 9);
// console.log(appleOrangeJuice);

// function declaration below

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1994);
// console.log(age1);

// // function expression below

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }

// const age2 = calcAge2(1994);

// console.log(age1, age2);

// ARROW FUNCTIONS -> simple form below, with ONLY 1 PARAM

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1994);
// console.log(age3);

// // ARROW FUNCTIONS -> example with ONLY 1 PARAM BUT more lines of code

// const yearsUntilRetirement = birthYear => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// }

// console.log(yearsUntilRetirement(1994));

// // ARROW FUNCTIONS -> example with MULTIPLE PARAMS

// const yearsUntilRetirement2 = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement2(1994, 'Adelin'));
// console.log(yearsUntilRetirement2(1980, 'Cristi'));


// ------------------------------------------------------------------

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// ---------------------------------------------------------------------

// const calcAge = function(birthYear) {
//   return 2037 - birthYear;
// }

// const yearsUntilRetirement2 = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if( retirement > 0 ) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has retired already ${retirement} years ago)`);
//     return retirement - 1;
//   }

//   return retirement;
//   // return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement2(1994, 'Adelin'));
// console.log(yearsUntilRetirement2(1980, 'Cristi'));


// ---------------------------------------------------------------------



// const friend1 = 'Michalel';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);


// // GET THE LAST ELEMENT OF ARRAY
// // console.log(years[years.length -1]);

// friends[2] = 'Scott';
// console.log(friends);

// // exercise
// const years = new Array(1994, 1988, 2006, 1970, 1968);

// const calcAge = function(birthYear) {
//   return 2037 - birthYear;
// }

// const myAge = calcAge(years[years.length - 1]);
// console.log(myAge)


// ADD ELEMENTS
// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Adelin');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// //REMOVE ELEMENTS
// friends.pop(); //last element
// const popped = friends.pop(); //last element
// console.log(friends);
// console.log(popped);

// friends.shift() //First element
// console.log(friends);

// console.log(friends.indexOf('Steven'));

// console.log(friends.includes('Michael'));
// console.log(friends.includes('Cristi'));

// if(friends.includes('Steven')) {
//   console.log('You have a friend named Peter');
// }

// ---------------------------------------------------------------------

//  const jonasArray = [
//    'jonas',
//    'schmedtmann',
//    2037 - 1994,
//    'teacher',
//    ['Michael', 'Peter', 'Steven']
//  ];

//  const jonas = {
//   firstName: 'Adelin',
//   lastName: 'Balan',
//   birthyear: 1994,
//   job: 'programmer',
//   friends: ['Cristi', 'Vlad', 'Andrei'],
//   hasDriversLicense: true,
//   calcAge: function(birthYear) {
//     return 2037 - birthYear;
//   }
//  };

// console.log(jonas.calcAge(1994));

//  console.log(jonas);
//  console.log(jonas.lastName);
//  console.log(jonas.friends);
//  console.log(jonas[ 'firstName' ]);

//  const nameKey = 'Name';
//  console.log(jonas['first' + nameKey]);
//  console.log(jonas['last' + nameKey]);

//  console.log();


// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

// if(jonas[interestedIn]){
//   console.log(jonas[interestedIn]);
// } else {
//   console.log('Wrong request! What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);


// //challenge
// //"Jonas has 3 friends, and his best friend is called Michael"

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);

// ------------------------------------------------------------------------------

// const jonas = {
//   firstName: 'Adelin',
//   lastName: 'Balan',
//   birthYear: 1994,
//   job: 'programmer',
//   friends: ['Cristi', 'Vlad', 'Andrei'],
//   hasDriversLicense: true,
//   //version 1
//   // calcAge: function(birthYear) {
//   //   return 2037 - birthYear;
//   // }


//   //version 2
//   // calcAge: function() {
//   //   // console.log(this);
//   //   return 2037 - this.birthYear;
//   // }


//   //version 3 --> storing the this.birthyear in a New 'age' property
//   calcAge: function() {
//     this.age = 2037 - this.birthYear;
//     return this.age; //good practice to return it
//   }
//  };

// console.log(jonas.calcAge());
// console.log(jonas.age); // NOTE THAT IF YOU DON'T USE calcAge FIRST, THEN jonas.age WILL RETURN UNDEFINED 
// // console.log(jonas['calcAge'](1994));

// //CHALLENGE

// //"Adelin is a 43 year old programmer, and he has a/no driver's license."

// const adelin = {
//   firstName: 'Adelin',
//   lastName: 'Balan',
//   birthYear: 1994,
//   job: 'programmer',
//   friends: ['Cristi', 'Vlad', 'Andrei'],
//   // hasDriversLicense: true ? 'a' : 'no', --> better to use ternary directly in getSummary(), but works the same
//   hasDriversLicense: true,
//   calcAge: function() {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function() {
//     return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no' } driver's license. `;
//   }
// }

// console.log(adelin.getSummary());


// ----------------------------------------------------------------------------------------------------------
// LOOPS

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');

// for(let i = 1; i <= 100; i++) {
//   console.log(`Lifting weights repetition ${i}`)
// }


//  const jonasArray = [
//    'jonas',
//    'schmedtmann',
//    2037 - 1994,
//    'teacher',
//    ['Michael', 'Peter', 'Steven']
//  ];


//  const types = [];
 
//  for (let i = 0; i < jonasArray.length; i++) {

//   // just reading array
//    console.log(jonasArray[i], typeof(jonasArray[i]));

//    // filling array with types
//   //  types[i] = typeof jonasArray[i];

//   // push() method of filling array (cleaner version)
//   types.push(typeof jonasArray[i]);
//   }

//   console.log(types);

//   const years = [1994, 2009, 1968, 1988, 1970];
//   let ages = [];

//   for(let i = 0; i < years.length; i++) {
//     // console.log(ages = 2022 - years[i], typeof ages)
//     ages.push(2022 - years[i]);
//   }

//   console.log(ages);

//   // continue and break

//   console.log('---ONLY STRINGS---');
//   for (let i = 0; i < jonasArray.length; i++) {
//     if(typeof jonasArray[i] !== 'string') continue;
//      console.log(jonasArray[i], typeof(jonasArray[i]));
//   }

//   console.log('---BREAK WITH NUMBER---')
//   for (let i = 0; i < jonasArray.length; i++) {
//     if(typeof jonasArray[i] === 'number') break;
//      console.log(jonasArray[i], typeof(jonasArray[i]));
//   }

  /* LOOPING BACKWARDS AND LOOPS IN LOOPS */

//    const jonasArray = [
//    'jonas',
//    'schmedtmann',
//    2037 - 1994,
//    'teacher',
//    ['Michael', 'Peter', 'Steven'],
//    true
//  ];

// for(let i = jonasArray.length - 1; i >= 0; i--) {
//   console.log(i, jonasArray[i]);
// }

// for(let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise no. ${exercise}`);

//   for(let rep = 1; rep < 6; rep++){
//     console.log(`Exercise no.${exercise}: Lifting weights repetition ${rep}`);
//   }
// }

 /* WHILE LOOP */

 const jonasArray = [
  'jonas',
  'schmedtmann',
  2037 - 1994,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];


// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE LOOP: Lifting weights repetition ${rep}`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
while(dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if(dice === 6) {
    console.log(`Loop is about to end...`);
  }
}