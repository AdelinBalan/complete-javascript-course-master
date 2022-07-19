'use strict'

// 1st CODING CHALLENGE

// 1.
const Car = function(make, speed) {
  this.make = make;
  this.speed = speed;
};

// 2.
Car.prototype.accelerate = function() {
  this.speed += 10;
  console.log(`${this.make} is going at a speed of ${this.speed} km/h.`);
};

// 3. 
Car.prototype.brake = function() {
  this.speed -= 5;
  console.log(`${this.make} is going at a speed of ${this.speed} km/h.`);
};

// 4.
const bmw = new Car(`BMW`, 120);
bmw.accelerate();
bmw.brake();

const mercedes = new Car('Mercedes', 95);
mercedes.accelerate();
mercedes.brake();


// 2nd CODING CHALLENGE

// 1. 
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6
  }
};

const ford = new CarCl('Ford', 120);
console.log(ford);
ford.speedUS = 30;
// ford.accelerate();
// ford.brake();
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();

const audi = new CarCl('Audi', 180);
console.log(audi);
audi.speedUS = 85;
// audi.accelerate();
// audi.accelerate();
// audi.accelerate();


// 3rd CODING CHALLENGE

// 1. 
// const EV = function(make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// // 2.
// EV.prototype.chargeBattery = function(chargeTo) {
//   this.charge = chargeTo;
//   console.log(`Current battery is at ${this.charge}% capacity.`)
// };

// // 3. (POLYMORPHISM)
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}%.`); 
// };

// // 4.
// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);
// tesla.accelerate();
// tesla.chargeBattery(90);
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// tesla.brake();
// tesla.brake();
// tesla.brake();
// tesla.brake();
// tesla.brake();

// 4th CODING CHALLENGE

// 1. 
class EVCl extends CarCl {

  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery = function(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Current battery is at ${this.#charge}% capacity.`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  accelerate () {
    this.speed += 10;
    this.#charge--;
    console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.#charge}%.`); 
    return this;
  }
};

const rivian = new EVCl('Rivian', 110, 24);
rivian.accelerate().brake().accelerate().accelerate().brake().accelerate().chargeBattery(72);
console.log(rivian.speedUS);
// rivian.accelerate();
// rivian.chargeBattery(25);
// rivian.brake();
// rivian.brake();
// rivian.brake();
// rivian.brake();