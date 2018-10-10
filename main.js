// CONST & LET
// let name = 'Jack';
// name = 'John';

const person = {
  name: 'Jack',
  age: 20
};

person.name = 'John';
console.info(person);

const num = [1, 2, 3, 4];
num.push(5);

console.info(num);

// ARROW FUNCTIONS

// function sayHello() {
//   console.info('hello');
// }

// const sayHello = () => {
//   console.info('welcome');
// };

//const sayHello = name => console.info('hello ' + name);

const sayHello = (name, greet) => console.info(`hello ${name}`);

sayHello('hi', '');

// FOREACH

const fruits = ['Apples', 'Oragnes', 'Grapes'];

fruits.forEach((fruit, index) => {
  console.log(`${index} : ${fruit}`);
});

// MAP
// is similar to foreach
//const singleFruit = fruits.map(fruit => fruit.slice(0, -1));
//const singleFruit = fruits.map(fruit => fruit.slice(0, 1));
const singleFruit = fruits.map(fruit => fruit.toUpperCase());
console.log(singleFruit);

// FILTER
const people1 = [
  { id: 1, name: 'Karen' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Sharon' }
];

const people2 = people1.filter(person => person.id !== 2);
console.log(people2);

// SPREAD
const arr = [1, 2, 3];
const arr2 = [...arr, 4];
console.log(arr2);

const arr3 = [...arr.filter(num => num !== 2)];
console.log(arr3);

const person3 = {
  name: 'nicejames',
  age: 43
};

const person4 = {
  ...person3,
  email: 'nicejames@gmail.com'
};

console.log(person4);

// DESTRUCTURING
const profile = {
  name    : 'John Doe',
  address : {
    street: '40 Main st',
    city  : 'Boston'
  },
  hobbies : ['movies', 'music']
};

const { name, address, hobbies } = profile;

console.log(name, address.street, hobbies[0]);

const { street, city } = profile.address;
console.log(street, city);

// this.state.profile;
// this.props.name;

// CLASSES
class Person {
  constructor(name, age) {
    this.name = name;
    this.age  = age;
  }

  greet() {
    return `my name is ${this.name}, my age is ${this.age}`;
  }
}

const person10 = new Person('Jack', 10);
const person11 = new Person('Shar', 20);

console.log(person10.name);
console.log(person11.name);
console.log(person10.greet());

// SUBCLASSES
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes ${this.balance}`;
  }
}

const customer1 = new Customer('Kevin', 30, 300);
console.info(customer1.info());



// MODULES

// // file1 (file1.js)
// export const name10 = 'Jeff';
// export const nums10 = [1,2 ,3];
// export default Person;


// // file2 (file2.js)
// import { name10, nums10 } from './file1.js';
// import Person from './file1.js';

// console.log(name10);




