// 'use strict';


// //example of SCOPE CHAIN and SCOPE LOOKUP

// // // GLOBAL SCOPE
// // function calcAge(birthYear) {
// //   // LOCAL SCOPE (OR FUNCTION SCOPE)
// //   const age = 2022 - birthYear;

// //   function printAge() {
// //     // ANOTHER FUNCTION SCOPE
// //     let output = `${firstName}, you are ${age}, born in ${birthYear}.`
// //     console.log(output);

// //     if(birthYear >= 1981 && birthYear <= 1996) {
// //       // BLOCK SCOPE
// //       var millenial = true; 
// //       // Creating NEW variable with same name as outer scope`s variable
// //       const firstName = 'Adi'

// //       // Reassigning outer scope`s variable
// //       output = 'NEW OUTPUT!';

// //       const str = `Oh, and you're a millenial, ${firstName}`;
// //       console.log(str);

// //       function add(a, b) {
// //         return a + b;
// //       }
// //       // END OF BLOCK SCOPE
// //     }
// //     // END OF FUNCTION SCOPE
// //     // console.log(str);
// //     console.log(output);
// //     console.log(millenial); // var < ES6, AS SUCH, var doesn't care about BLOCK SCOPES
// //     // add(2, 3); // OUTSIDE BLOCK SCOPE -> ReferenceError . !!!!!!! ONLY TRUE FOR STRICT MODE
// //   }
// //   printAge();

// //   return age;
// //   //END OF FUNCTION SCOPE
// // };

// // const firstName = 'Adelin';
// // calcAge(1994);
// // END OF GLOBAL SCOPE



// // -------------------------------------------------------------------

// // HOISTING AND TDZ


// // // Variables
// // console.log(me);
// // // console.log(job);
// // // console.log(year);

// // var me = 'Adelin';
// // let job = 'Programmer';
// // const year = 1994;

// // Functions

// // console.log(addDecl(2, 3));
// // console.log(addExpre(2, 3));
// // console.log(addArrow(2, 3));

// // Works fine because of HOISTING
// // function addDecl(a, b) {
// //   return a + b;
// // };

// // // Error - addexpre IS NOT A FUNCTION (becuase using var)
// // var addExpre = function(a, b) {
// //   return a + b;
// // };

// // // Error - using const before declaration --> TEMPORAL DEAD ZONE (TDZ)
// // const addArrow = (a, b) => a + b;


// // // Example 

// // console.log(undefined);
// // if(!numProducts) {
// //   deleteShoppingCart();
// // }

// // var numProducts = 10;

// // function deleteShoppingCart() {
// //  console.log(`All products deleted!`);
// // };

// // var x = 1;
// // let y = 2;
// // const z = 3;

// // console.log(x === window.x);
// // console.log(y === window.y);
// // console.log(z === window.z);


// // ----------------------------------------------------------------

// // The THIS KEYWORD

// console.log(this);

// const calcAge = function(birthYear) {
//   console.log( 2022 - birthYear );
//   console.log(this); // it's undefined, but it's the function's own "this"
// };

// calcAge(1994);


// const calcAgeArrow = (birthYear) => {
//   console.log( 2022 - birthYear );
//   console.log(this); // ARROW FUNCTIONS DO NOT get their own "this" SO it'll point to Window
// };

// calcAgeArrow(1994);

// const adelin = {
//   birthYear: 1994,
//   calcAge: function() {
//     console.log(this);
//     console.log(2022 - this.birthYear);
//   }
// }

// adelin.calcAge();

// const matilda = {
//   birthYear: 2017,
// };

// // Copying the adelin.CalcAge method to the matilda object (borrowed)
// matilda.calcAge = adelin.calcAge;
// matilda.calcAge();

// const f = adelin.calcAge;
// f(); // regular function call will give error because "this" is undefined!


// Stack Data Structure in JavaScript ----->  implementation of brackets closing validation

// const isValid = (string) => {

//   // hashmap of bracket types
//   const bracketsMap = {
//     '(' : ')',
//     '[' : ']',
//     '{' : '}'
//   }

//   // the array called `stack` 
//   const stack = [];

//   // loop through input
//   for (let char of string) {

//     // if input is in hashmap, push to stack
//     if (bracketsMap[char]){
//       stack.push(char);
//     }

//     // if stack IS NOT empty AND last element (top of the stack) is the character, remove character
//     else if (stack.length > 0 && bracketsMap[stack[stack.length - 1]] === char) {
//       stack.pop();
//     }

//     // if character was not found in the hashmap, return false
//     else {
//       console.log(false);
//       return false;
//     }
//   }

//   // log stack elements, true and stack length
//   console.log(stack)
//   console.log(true);
//   return stack.length === 0;
// }

// isValid('{[()]}')

// -----------------------------------------------------------
// regular functions vs arrow functions

// var firstName = "Matilda";

// const adelin = {
//   firstName: 'Adelin',
//   year: 1994,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2022 - this.year);

//     // without 'self' JS WAS SUPPOSED TO GIVE AN ERROR of undefined (as per the isMillenial is a regular function call)

//     const self = this;
//     const isMillenial = function() {
//       console.log(self.year >= 1981 && this.year <= 1996);
//     }
//     isMillenial();
//   },

//   //example of how "this" gives UNDEFINED using arrow function
//   greet: () => console.log(`Hey, ${this.firstName}`),


// };

// adelin.greet();
// adelin.calcAge();


// // ARGUMENTS keyword
// const addExpr = function(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// addExpr(2, 6);
// addExpr(2, 6, 3, 16);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// }
// addArrow(3, 5, 1)

// --------------------------------------------------------------------
// PRIMITIVES VS OBJECTS

// let age = 28;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Adelin',
//   age: 30,
// };

// const friend = me;
// friend.age = 25;
// console.log(
//   'Friend:', friend,
//   'Me:', me
// );

//Primitive types

let lastName = 'Balan';
let oldLastName = lastName;
lastName = 'Davies';
console.log(lastName, oldLastName);


// Reference types

const jessica = {
  firstName: 'Elena',
  lastName: 'Mihalache',
  age: 24,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davies';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {};

// Copying objects
const elena = {
  firstName: 'Elena',
  lastName: 'Mihalache',
  age: 24,
  family: [
    'Diana',
    'George',
    'Bob'
  ]
};


// Object.assign() WILL CREATE A COPY OF YOUR OBJECT IN THE HEAP !!
// WILL NOT WORK THE SAME if you have an object INSIDE an object  (Deep Clone)
const elenaCopy = Object.assign({}, elena);
elenaCopy.lastName = 'Davies';
console.log(elena);
console.log(elenaCopy);

elenaCopy.family.push('Adelin');
elenaCopy.family.push('Olivia');

// object.assign() did not work as a deep clone because it still added the array object modifications to the 2nd object
console.log(elena);
console.log(elenaCopy);