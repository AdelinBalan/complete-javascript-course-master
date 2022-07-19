'use strict';

 

/////////////////////////////////////////////////////////////////
// Constructor Functions and the new Operator
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // NEVER do this 
//   // this.calcAge = function() {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const adelin = new Person('Adelin', 1994);
// console.log(adelin);

// // 1. New {} is created
// // 2. function is called, this(keyword) = {} (obj from 1.)
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1970);
// console.log(matilda, jack);

// console.log(adelin instanceof Person);

// // Add a static method
// Person.hey = function() {
//   console.log(`Hey there!`);
//   console.log(this);
// };

// Person.hey();


// // Prototypes 
// console.log(Person.prototype)

// Person.prototype.calcAge = function() {
//   console.log(2037 - this.birthYear);
// };


// adelin.calcAge();

// console.log(adelin.__proto__);
// console.log(adelin.__proto__ === Person.prototype); // true

// console.log(Person.prototype.isPrototypeOf(adelin)); // true
// console.log(Person.prototype.isPrototypeOf(matilda)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// Person.prototype.species = 'Homo Sapiens';
// console.log(adelin.species, matilda.species)

// console.log(adelin.hasOwnProperty('firstName'));
// console.log(adelin.hasOwnProperty('species')); // adelin INHERITS the method from the Person.prototype WHICH INHERITS from Object.prototype!

// console.log(adelin.__proto__.__proto__.__proto__); // adelin.__proto__ --> Person.prototype --> Object.prototype --> null (classic prototype chain)

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 6, 9, 3, 9, 19, 34, 2, 34]; // same as: new Array = [];
// console.log(arr.__proto__ === Array.prototype); // true

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function() {
//    return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// //////////////////////////////////////////////////////////////////////////////
// // ES6 Classes

// // class expression
// // const PersonCl = class {

// // };

// // class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // below are instance methods
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2040 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey, ${this.fullName}`);
//   }

//   get age() {
//     return 2044 - this.birthYear;
//   }

//   // Important! Set a property that already exists!!
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // static method (as opposed to instance methods)
//   static hey() {
//     console.log(`Hey there!`);
//     console.log(this);
//   }
// };

// const jessica = new PersonCl('Jessica Davies', 1994);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// PersonCl.hey()
// console.log(jessica.__proto__ === PersonCl.prototype); 

// // PersonCl.prototype.greet = function() {
// //   console.log(`Hey, ${this.firstName}`);
// // };

// jessica.greet();

// // 1. Classes are NOT hoisted
// // 2. Classes are first-class citizens (pass them into functions and return them from functions)
// // 3. Class body is ALWAYS executed in strict mode


// const walter = new PersonCl('Walter White', 1968);




// const account = {
//   owner: 'adelin',
//   movements: [200, 530, 420, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   }
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements)


////////////////////////////////////////////////////////////////////////
// Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
  
//   // similar to constructor in ES6 classes
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);

// sarah.init('Sarah', 1992);
// sarah.calcAge();

/////////////////////////////////////////////////////////////////////////////
// Inheritance between "classes": construction functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear)
//   this.course    = course;
// };

// // Linking prototypes (the correct way)
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// // below version doesn't work
// // Student.prototype = Person.prototype;

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}.`);
// };

// const mike = new Student('Mike', 1994, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// console.dir(Student.prototype.constructor);

/////////////////////////////////////////////////////////////////////////////
// Inheritance between "classes": ES6 Classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // below are instance methods
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2040 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey, ${this.fullName}`);
//   }

//   get age() {
//     return 2044 - this.birthYear;
//   }

//   // Important! Set a property that already exists!!
//   set fullName(name) {
//     // console.log(name);
//     if (name.includes(' ')) this._fullName = name
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   };

//     // static method (as opposed to instance methods)
//   static hey() {
//     console.log(`Hey there!`);
//     console.log(this);
//   }
// };

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // this always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}.`);
//   }

//   calcAge() {
//     // return 2022 - this.birthYear;
//     console.log(`I'm ${2022 - this.birthYear} years old, but as a student I feel more like ${2050 - this.birthYear}.`);
//   }
// };

// const martha = new StudentCl('Martha Jones', 1994, 'Computer Science');
// martha.introduce();
// martha.calcAge();

/////////////////////////////////////////////////////////////////////////////
// Inheritance between "classes": Object.create()

// Parent class
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
  
//   // similar to constructor in ES6 classes
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function(firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}.`);
// }

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2004, 'Computer Science');
// jay.introduce();
// jay.calcAge();



/////////////////////////////////////////////////////////////////////////////
// More class examples

// Public fields
// Public methods
// Private fields
// Private methods
// there is also the STATIC version --> simply add "static" keyword --> used mainly for helper functions



class Account {
  // 1. PUBLIC FIELD (instances)
  locale = navigator.language; 
  
  // 2. PRIVATE FIELD (instances, NOT ON PROTOTYPE)
  #movements = [];
  #pin; // set to undefined, will be defined in the constructor function

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}!`);
  }

  // All of below are PUBLIC METHODS
  // Public interface (API)
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)){
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4. PRIVATE METHODS
  #approveLoan(val) {
    return true;
  }
};

const acc1 = new Account('Adelin', 'RON', 1111);

// acc1.#movements.push(250);
// acc1.#movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.#approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();
// console.log(acc1.#pin);

acc1.deposit(300).deposit(540).withdraw(35).requestLoan(30000).withdraw(5000);
console.log(acc1.getMovements());
