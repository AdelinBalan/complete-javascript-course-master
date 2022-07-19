"use strict";
// basic types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello'; // can set to anything else later
let age;
let ids = [1, 2, 3, 4, 5]; // array that only contains numbers
let arr = ['any', 3, 5, true];
// ids.push('hello') // error
// Tuple  --> You can specify the type in the array
let person = [1, 'yes', true];
// Tuple array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'Mike'],
    [3, 'Jill']
];
// Union --> variable that holds more than 1 type
let pid;
pid = '22';
// ENUM --> default values of 0 as arrays
var Direction1;
(function (Direction1) {
    Direction1["up"] = "up";
    Direction1["down"] = "down";
    Direction1["left"] = "left";
    Direction1["right"] = "right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.left); // 0
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
const mike = new Person(2, 'Mike');
console.log(brad.register());
console.log(brad, mike);
// subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(4, 'Michael', 'Manager');
console.log(emp.register());
console.log(emp);
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'john', 'jill']);
// numArray.push('hello') // generics made this push() give an error
console.log(numArray, strArray);
