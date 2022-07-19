'use strict';

// -------------------------------------------------------------------------------------------------
// Immediately Invoked Function Expressions (IIFE)

// const runOnce = function() {
//   console.log(`this will never run again`);
// }
// runOnce();


//IIFE
// (function () {
//   console.log(`this will never run again`);
//   const isPrivate = 23;
// })();

// // console.log(isPrivate);

// (() => console.log(`This too`))();

// {
//   const isPrivate = 23;
//   var notPrivate = 23;
// }

// // console.log(isPrivate)
// console.log(notPrivate)

// -------------------------------------------------------------------------------------------------
// CLOSURES

// const secureBooking = function() {
//   let passengerCount = 0;

//   return function() {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`)
//   }
// };

// const booker = secureBooking();
// // console.log(booker);
// booker();
// booker();
// booker();
// console.dir(booker);

// -------------------

// Example 1
let f;

const g = function() {
  const a = 23;
  f = function() {
    console.log(a * 2);
  }
}

const h = function() {
  const b = 777;
  f = function() {
    console.log(b * 2);
  }
}

g(); // creates and stores (by returning) the f(); function
f(); // executes (calls) f();
console.dir(f)

h(); // reassigns the f variable 
f(); // executes (calls) f();
console.dir(f)

// Example 2
const boardPassengers = function(n, wait) {
  // const perGroup = n / 3;

  setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

// setTimeout(function(){
//   console.log(`TIMER`);
// }, 1000);







// -------------------------------------------------------------------------------------------------
// The CALL and APPLY methods

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline ?? this.name} flight ${
//         this.iataCode
//       }${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Adelin Balan');
// lufthansa.book(635, 'Mike Smith');
// console.log(lufthansa.bookings);

// const eurowings = {
//   name: 'EuroWings',
//   iataCode: 'EW',
//   bookings: [],
//   // book,
// };

// const book = lufthansa.book;

// // DOES NOT WORK
// // book(23, 'Sarah Williams')

// //Call Method

// book.call(eurowings, 23, 'Sarah Williams');
// book.call(lufthansa, 62, 'Cristi Matac');
// console.log(lufthansa);
// console.log(eurowings);

// const swiss = {
//   name: 'Swiss Airlines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 523, 'Olivia Balan');
// console.log(swiss);

// // Apply Method

// const flightData = [435, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// // Using SPREAD, we can use call() instead of apply()
// book.call(swiss, ...flightData);

// // Bind Method
// // book.call(swiss, 523, 'Olivia Balan');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookLH(777, 'Bianca Cojocaru');
// bookLX(341, 'Cristina');
// bookEW(586, 'Georgian Negrea');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Adelin Balan');

// // Bind Method with Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application (preset parameters)

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.10, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addVAT(400));

// const addTax2 = function(rate) {
//   return function (value) {
//     console.log(value + value * rate)
//   }
// }

// const addVAT23 = addTax2(0.23);
// addVAT23(100)

// -------------------------------------------------------------------------------------------------

// Functions returning other Functions

// const greet = function (greeting) {
//   return function(name) {
//     console.log(`${greeting} ${name}`);
//   }
// }

// // above function, using Arrow Fn

// const greetArr = greeting => name => console.log(`${greeting} ${name}`)

// const greeterHi = greetArr('Hi');
// greetArr('Adelin');
// const greeterHey = greet('Hey');
// greeterHey('Adelin');
// greeterHey('Steven');

// greet(`Hello`)('Adelin');

// Functions accepting CALLBACK FUNCTIONS
// --------------------------------------------------------------------------------------------------------------------

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// }

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// }

// // Higher order function (takes in a function as an argument)
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// }

// // "upperFirstWord" -> callback function (it's called by the transformer() fn)
// transformer(`JavaScript is the best!`, upperFirstWord);

// // "oneWord" -> callback function (it's called by the transformer() fn)
// transformer(`JavaScript is the best!`, oneWord);

// // JS uses callbacks all the time
// const high5 = function() {
//   console.log('hello');
// }

// document.body.addEventListener('click', high5);

// ['adelin', 'martha', 'adam'].forEach(upperFirstWord)

// console.log(oneWord( `Ad e LI N Bal an` ));
// console.log(upperFirstWord( `AdeLIN Balan` ));

//  DEFAULT PARAMETERS
// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) { //<-- ES6 way of Setting Default Params

//   // ES5 - Setting default param
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     // flightNum: flightNum,
//     flightNum,
//     numPassengers,
//     price
//   }
//   console.log(booking);
//   bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 62);
// createBooking('LH123', 23);

// createBooking('LH123', undefined, 1000);

// PASSING ARGUMENTS: VALUE VS REFERENCE

// const flight = `LH234`;
// const adelin = {
//   name: 'Adelin Balan',
//   passport: 2354362315125,
//   // value: 28,
//   // inc: function() {
//   //   this.value++;
//   //   console.log(adelin)
//   // }
// }
// console.log(adelin)

// const checkIn = function( flightNum, passenger ) {
//   flightNum = `LH999` // not a good practice
//   // manipulating the 'adelin' object
//   passenger.name = 'Mr. ' + passenger.name;

//   if(passenger.passport === 2354362315125) {
//     alert('Checked in')
//   } else {
//     alert('Wrong passport!')
//   }
//   // console.log(arguments)
// }

// // checkIn(flight, adelin);
// // console.log(flight);
// // console.log(adelin);

// // is the same as doing...

// // copying a PRIMITIVE
// const flightNum = flight;
// // copying the HEAP reference of the `adelin` OBJECT
// const passenger = adelin;

// const newPassport = function(person) {
//   person.passport = Math.trunc(Math.random() * 1000000000000);
//   console.log(adelin)
// }
// newPassport(adelin);
// checkIn(flight, adelin);
