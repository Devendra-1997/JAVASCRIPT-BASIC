// Object, property, and method
// Object => must have property and method
// const person = (name, add) => {
//   return {
//     personName: name,
//     address: add,
//     bio() {
//       // console.log(this);
//       return `Hey there, this person name is ${this.personName} and they lives at ${this.address}.`;
//     },
//     upperCase() {
//       this.personName = this.personName.toUpperCase();
//       this.addrsss = this.address.toUpperCase();
//     },
//     lowerCase() {
//       this.personName = this.personName.toLowerCase();
//       this.addrsss = this.address.toLowerCase();
//     },
//   };
// };
// const prem = person("Prem", "Rockdale");
// console.log(prem.upperCase());
// console.log(prem.bio());

// class oop
// syntax
// constructor
// super
// this

// class Person {
//   constructor(n, a) {
//     this.personName = n;
//     this.address = a;
//   }
//   bio() {
//     return `Hey there, this person name is ${this.personName} and they lives at ${this.address}`;
//   }
//   lowerCase() {
//     this.personName = this.personName.toLowerCase();
//   }
//   upperCase() {
//     this.personName = this.personName.toUpperCase();
//   }
// }
// const prem = new Person("prem", "sydney");
// prem.phone = "98763994";

// const str = prem.bio();

// console.log(str);

// This keywords: it refers to the object which is the owner of the function that has used this keyword

// constructor: this method in the class execute as soon as you instanciate a class

// Encapsulation: you have access to the method but dont know how it work.

// Abstraction: the properties or methods are only accessible with in the class but not accessible to out side the class world

// polymorphism: you can make multiple instances from same class

// Inheritance: check the code above for the details

// Functional programming
// side effects
// let counter = 0;
// const add = (a, b) => {
//   counter++;
//   return a + b;
// };

// console.log(counter);

// pure function
//   high order function
// const add = (num1, num2) => {
//   return num1 + num2;
// };
// const substract = (num1, num2) => {
//   return num1 - num2;
// };
// const value = add(2, 3);
// console.log(value);

// const val2 = add(3, 4);
// console.log(value);

// add to value and return multiply functions
// const addAndMultiply = (a, b) => {
//   const ttl = a + b;

//   const multiply = (times) => {
//     return ttl * times;
//   };
// }
// recursion

// let i = 0;
// const Increase = () => {
//   console.log(i++);
//   if (i == 10) {
//     return;
//   }
//   increase();
// };

// increase();

const amount = [52, 3, 647, 56, 54, 63, 4];
let sum = 0;
const totaling = (arg) => {
  sum += arg.pop();

  if (!arg.length) {
    return sum;
  }

  return totaling(arg);
};

const ttl = totaling(amount);
console.log(ttl);
