'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// below is an object literal
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced obj literal (if it has the same name as the variable name, we can use it like this)
  openingHours,

  // function returning an array to be destructured
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // ES6 enhanced obj literal: no need for the "function" keyword
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `20:00`,
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1} ${ing2} and ${ing3}.`
    );
  },

  orderPizza: function (ing1, ...otherIng) {
    console.log(ing1, otherIng);
  },
};

// ----------------------------------------------------------------------------------------
// WORKING WITH STRINGS

const airline = `TAP Air Portugal`;
const plane = `A320`;

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in name
const passenger = 'aDeLIn';
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// check email
const email = `hello@adelin.com`;
const loginEmail = `   Hello@Adelin.com \n`;

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

const checkEmail = function (correctEmail, inputEmail) {
  const checkMail = inputEmail.toLowerCase().trim();
  correctEmail === checkMail
    ? console.log(`Your email is correct`)
    : console.log(`Please check your spelling`);
};

checkEmail(`adelin@yahoo.ro`, `\n \n AdeLIN@YeAhoO.rO  `);

// replacing parts of strings
const priceGB = `288,97£`;
const priceUS = priceGB.replace(`£`, `$`).replace(`,`, `.`);
console.log(priceUS);

const announcement = `All passengers come to boarding door 23. Boarding door 23!`;
// .replaceAll() is new, but we can also use
console.log(announcement.replaceAll('door', 'gate'));
// Regular Expression: / instead of ` + g (global)
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('neo'));
console.log(plane2.startsWith('A320'));
console.log(plane2.startsWith('Air'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo'))
  console.log(`Part of the new Airbus family`);

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log(`You are not allowed on board`);
  else console.log('Welcome aboard');
};
checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// SPLIT AND JOIN
console.log(`a+very+nice+string`.split('+'));
console.log(`Adelin Balan`.split(' '));

const [firstName, lastName] = `Adelin Balan`.split(' ');
console.log(firstName, lastName);

const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
  // SOLUTION 1
  // namesUpper.push(n[0].toUpperCase() + n.slice(1));
  // SOLUTION 2
  namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('adelin balan');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '-'));
console.log(`Adelin`.padStart(25, '_').padEnd(35, '+'));

// use case for Padding (credit card numbers)
const maskCreditCard = function(number) {
  const str = number + ''; //converts the number to a string by using + ''
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(54295810358392034));
console.log(maskCreditCard(5429581));
console.log(maskCreditCard('54230591835020395'));

// REPEAT

const message2 = 'Bad weather ahead. All departures delayed';
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line `);
}
planesInLine(5)
planesInLine(42)


//---------------------------------------------------------------------------------------------

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(`B737`[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// // + 1 because lastIndexOf(' ') will return the last word with an empty space before it
// // using negative numbers will start counting from the END
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function(seat) {
//   //B and E are middle seats on a plane
//   const s = seat.slice(-1)
//   if (s === 'B' || s === 'E') console.log(`You got the middle seat`);
//   else console.log('You got lucky');
// }
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('Adelin'));

//----------------------------------------------------------------------------------------
// MAPS ITERATION

const question = [...new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'You are correct...sort of'],
  [false, 'Try again until you are right']
])];
console.log(question);

// // Convert object to MAP
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // quizz app
// console.log(question.get('question'))
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
// }
// // const answer = Number(prompt(`Your answer`));
// // console.log(answer);
// const answer = 2;

// console.log(question.get(question.get('correct') === answer));

// // Convert map to ARRAY
// console.log([...question]);
// console.log(...question.entries())
// console.log(...question.keys())
// console.log(...question.values())

//----------------------------------------------------------------------------------------
// MAPS

// const rest = new Map();
// rest.set('name:', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest.get('name:'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 10;
// console.log(
//   rest.get(time > rest.get(`open`) && time < rest.get('close') ? true : false)
// );

// const arr = [1, 2];
// console.log(rest.has('categories'));
// rest.delete(2);

// rest.set(arr, 'test')
// rest.set(document.querySelector('h1'), 'Heading')

// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// ------------------------------------------------------------------------
// SETS

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);
// console.log(new Set('Adelin'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Pizza');
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example
// // SETS are used TO REMOVE ARRAY DUPLICATES
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(staff).size
// );

// console.log(new Set('adelinbalan').size)

// ----------------------------------------------------------------------------------------
// Looping over Objects

// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Loop over ENTIRE OBJECT
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [day, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}.`);
// }

// ------------------------------------------------------------------------------------------
// Optional chaining (?.)

// if (restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open);

// // with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open || 'Error');

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for(const day of days){
//   console.log(day);
//   // use brackets to access a property which IS A VARIABLE, AND NOT AN OBJ PROP
//   const open = restaurant.openingHours[day]?.open ??
//   `closed`;
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Optional chaining on methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist.');

// // Optional chaining on Arrays
// const users = [{
//   name: 'Adelin',
//   email: 'hello@adelin.com'
// }];

// console.log(users[0]?.name ?? 'User array empty');

// -------------------------------------------------------------------------

// if(restaurant.openingHours.fri)
// console.log(restaurant.openingHours.fri.open);

// --------------------------------------------------------------------------------------------
// THE FOR-OF LOOP

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`); // old school. but because "item" is an array, we can destructure it
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

// --------------------------------------------------------------------------------------
// LOGICAL OPERATORS

// const rest1 = {
//   name: `Capri`,
//   // numGuests:20,
//   numGuests:0,
// };

// const rest2 = {
//   name: `La Piazza`,
//   owner: `Giusseppe Rossi`,
// };

// longer version ( OR assignment operator)
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// shorter version
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assigment operator --> excluding FALSY values, taking only KNOWLEDGE (null, undefined) values
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// --------------------------------------------------------------------------------------
// NULL COALESCING OPERATOR

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (not 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// -------------------------------------------------------------------------------------
// AND && and OR || operators and short-circuiting

// console.log(`---------OR---------`);

// // use ANY Data type, return ANY data type, short-circuiting
// console.log( 3 || 'Adelin' ); // 3 is TRUTHY
// console.log('' || 'Adelin'); // '' iS FALSY
// console.log(true || 0); // TRUE
// console.log(undefined || null); // all of them are false, so returns null

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// //TERNARY USE
// restaurant.numGuests = 23;
// // restaurant.numGuests = 0; //WON'T WORK!!
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// // SHORT-CIRCUITTING USING 'OR' OPERATOR
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log(`---------AND---------`);
// console.log(0 && `Adelin`);
// console.log(7 && `Adelin`);
// console.log(`Hello` && 23 && null && `Adelin`);

// //practical example
// if ( restaurant.orderPizza ) {
//   restaurant.orderPizza(`mushrooms`, `cheese`)
// }

// restaurant.orderPizza && restaurant.orderPizza('ham', 'bacon');

// restaurant.orderPizza('cheese', 'mushrooms', 'pineapple');
// restaurant.orderPizza('mushrooms');

// --------------------------------------------------------------------------------------
// REST PATTERN AND PARAMETERS

// 1) DESTRUCTURING

// Arrays (REST)
// const arr = [1, 2, 4, ...[5, 7]]; // SPREAD, on the RIGHT
// const [a, b, ...others] = [1, 2, 3, 4, 5]; // REST, on the LEFT
// console.log(a, b, others);

// const [pizza, , risotto, focaccia, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, focaccia, otherFood);

// Objects (REST)
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
// console.log(sat);

// 2) FUNCTIONS
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(6, 2, 8, 9, 3, 5, 2);

// const x = [23, 5, 7, 88];
// add(...x);

// -----------------------------------------------------------------------------------------
// THE SPREAD OPERATOR (...arr)
// const arr = [7, 8, 9];
// // const badnewArr = [1, 2, arr[0], arr[1], arr[2]];

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, `Gnocci`];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(restaurant.mainMenu);
// console.log(mainMenuCopy);

// // Joing 2 Arr
// const joinedArray = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(joinedArray);

// // Iterables: arrays, strings, maps, sets, NOT OBJECTS --> the SPREAD operator can be used on ALL ITERABLES

// const str = `Adelin`;
// const letters = [...str, ` `, `B.`];
// console.log(letters);
// console.log(...str);
// // console.log(`${str} Balan`);

// // Real world example
// const ingredients = [
//   // prompt(`Let's make pasta! Ingredient 1?`),
//   // prompt(`Ingredient 2?`),
//   // prompt(`Ingredient 3?`),
// ];
// // console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: `Giuseppe`};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name)
// console.log(restaurant.name)

// ----------------------------------------------------------------------------
//Destructuring OBJECTS

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: `Via del Sole, 21`,
//   starterIndex: 1
// })

// // OBJECT DESTRUCTURING

// // very useful for situations of using data retrieved from a Web API

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //assigning different names than the object properties names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // setting default values for obj properties that don't exist

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating variables while destructuring

// let a = 111;
// let b = 999;
// const obj = { a: 24, b: 64, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // nested objects and destructuring

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// ARRAY DESTRUCTURING

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;

// console.log(main, secondary);

// Switching Variables - without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// with destructuring

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // destructuring values from the restaurant.order() function (which returned an array)
// const [starterCourse, mainCourse] = restaurant.order(2, 0);
// console.log(starterCourse, mainCourse);

// // nested arrays (and destructuring)
// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i, j);
// const [i, ,[j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
