// basic types
let id: number = 5;
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = 'Hello' // can set to anything else later
let age: number


let ids: number[] = [1, 2, 3, 4, 5]  // array that only contains numbers
let arr: any[] = ['any', 3, 5, true]

// ids.push('hello') // error


// Tuple  --> You can specify the type in the array
let person: [number, string, boolean]  = [1, 'yes', true]
// Tuple array
let employee: [number, string][]

employee = [
  [1, 'Brad'],
  [2, 'Mike'],
  [3, 'Jill']
]

// Union --> variable that holds more than 1 type

let pid: string | number 
pid = '22'



// ENUM --> default values of 0 as arrays

enum Direction1 {
  up = 'up',
  down = 'down',
  left = 'left',
  right = 'right'
}

console.log(Direction1.left) // 0

// Objects

type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'John'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
  return x + y
}

function log(message: string | number): void {
  console.log(message)
}


// Interfaces
interface UserInterface {
  readonly id: number,
  name: string,
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'John'
}

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y


interface PersonInterface {
  id: number,
  name: string,
  register(): string,
  age?: number
}

// Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, 'Brad')
const mike = new Person(2, 'Mike')

console.log(brad.register())

console.log(brad, mike)


// subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string){
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(4, 'Michael', 'Manager')
console.log(emp.register())
console.log(emp)

// Generics
function getArray<T>(items: T[]): T[] { // <T> is a placeholder for the type when using this function later
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'john', 'jill'])

// numArray.push('hello') // generics made this push() give an error

console.log(numArray, strArray)
