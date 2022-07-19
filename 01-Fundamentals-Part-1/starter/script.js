// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// ////////////////////////////////////


// // Values and Variables
// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // Variable name conventions
// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);



// ////////////////////////////////////
// // Data Types
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

//////////////////////////////////////////

// Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// // Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
// 

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

/******************************************************
STRINGS
*/

// const firstName = 'Adelin';
// const lastName = 'Balan';
// const job = 'programmer';
// const age = 28;

// const stringBuilder = "I'm " + firstName + ' ' + lastName + ". I'm " + age + ' years old and I work as a ' + job + '.';
// console.log(stringBuilder);

// const adelinTemplateLiteral = `I'm ${firstName} ${lastName}, I'm ${age} years old and I work as a ${job}.`;
// console.log(adelinTemplateLiteral);

// console.log(`Just a regular string using BACKTICKS`);

// console.log(`String with \n\ multiple \n\ lines using "\\n\\"`);

//////// CONDITIONALS IF ELSE ///////////

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log(`Sarah can start driving 🚗`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`You are not old enough to start driving! You still have to be at least ${yearsLeft} years older.`);
// }

// const birthYear = 1994;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);


////////////// TYPE COERCION AND CONVERSION ///////////

// type conversion
// const inputYear = '1994';
// console.log(Number(inputYear));
// console.log(inputYear + 18);

// console.log(Number('Adelin'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercion
// console.log('I am ' + 28 + ' years old.');
// console.log('23' - '10' - 3); 
// console.log('23' * '2');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);


//////// FALSY VALUES ////////////
 /*

 1. 0
 2. ''
 3. undefined
 4. null
 5. NaN

 */

//  console.log(Boolean(0));
//  console.log(Boolean(undefined));
//  console.log(Boolean(''));
//  console.log(Boolean(null));
//  console.log(Boolean({})); // truthy
//  console.log(Boolean(NaN));

//  const money = 0;
//  if (money) {
//    console.log("don't spend it all");
//  } else {
//    console.log("You should get a job LOL"); // this works because 0 is falsey so in the IF / ELSE condition, JS tries to convert any value to a Boolean
//  }

//  let height = 0;
//  if(height) {
//    console.log('Height is defined');
//  } else {
//    console.log('Height is UNDEFINED');
//  }


// const age = 18;

// if(age === 18) console.log('You became an adult. (strict - ===)');
// if(age == 18) console.log('You became an adult. (loose - ==)');

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 3) { // 3 === 3
//   console.log(`Cool! ${favorite} is an amazing number!`);
// } else {
//   console.log(`Too bad. 3 would've been a cooler number`);
// }

// if (favorite !== 3) {
//   console.log(`Why not pick 3?`);
// }


// ----------------------------------------------------------------

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // const shouldDrive = ;

// // if(hasDriversLicense && hasGoodVision) {
// //   console.log('Sarah is able to drive!');
// // } else {
// //   console.log('Someone else should drive...');
// // }

// const isTired = true; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired ) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// -----------------------------------------------------------------------

// const day = 'monday';

// switch(day) {
//   case 'monday': // day === 'monday' (strict equality)
//     console.log('Plan course structure');
//     console.log('Go to work');
//     break;
//   case 'tuesday':
//     console.log('Prepare workbook');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write coding exercises');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy weekend');
//     break;
//   default:
//     console.log('Invalid week day');
// }

// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to work');
// } else if ( day === 'tuesday') {
//   console.log('Prepare workbook');
// } else if ( day === 'wednesday' || day === 'thursday') {
//   console.log('Write coding exercises');
// } else if ( day === 'friday') {
//   console.log('Record videos');
// } else if ( day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy weekend');
// } else {
//   console.log('Invalid week day');
// }

// ----------------------------------------------------------------------------

// statements --> IF - ELSE / SWITCH / etc., like a complete sentence
// expressions --> can be placed inside statements. 

// in a template literal, we can expect ONLY expressions
// e.g. console.log(`I'm ${2037 - 1994} years old);