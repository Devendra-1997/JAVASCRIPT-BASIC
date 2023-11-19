// single linke comment
/**
multi line comment 
alert("helowowow");
console.log("heyheheh");
 */

//=== Variable (only char, num, $ _)
// var let const

// var firstName = "Prem Acharya";
// let add = "somewhere in sydney";
// const dob = "2020";

// console.log(firstName);
// console.log(add, dob);

// firstName = "sam Smith";
// add = "rockdale";

// console.log(firstName);
// console.log(add, dob);

// =====Arithmetic
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Division Remainder)
// ++	Increment
// --	Decrement

// console.log(87 + 9430 - 24);
// let a = 5;
// const b = 3;

// const ans = a + b;
// const ans = a - b;
// const ans = a * b;
// const ans = a ** b;
// const ans = 15 / b;
// const ans = 10 % b;

// a++;
// a++;

// console.log(a++);
// console.log(++a);
// console.log(ans);

// ======== Comparisons
// ==
// ===
// >, >=
// <, <=

// const a = 6;
// const b = 6;

// const reasult = a == b;
// const reasult = a >= b;
// const reasult = a <= b;
// console.log(reasult);

// ===== Data types
// Primitives
// String  		// “prem acharya”
// Number 	//123
// Boolen		// true or false
// Undefined	// not defined in system memory
// Null  		// defined in system memory but no value assigned

// const val = "prem ";
// const val = "prem";
// const val = 1234567890;
// const val = undefined;
// const val = null;

// let name = "Prem";

// console.log(name);
// const pN = name;

// name = "sams";

// console.log(name, pN);

// console.log(typeof val, valdd);

// Reference Types
// Object 		//{key:”value”}
// Array		//[“data”, 1232, {}, []]
// Function 	// function()
// Es6 	// const sayHi ()=> “hi”

//OBJECT
// const person = {
//   name: "prem",
//   add: "sydney",
//   dob: 444,
// };

// const args = [123, "hehe", true, [12, 23], { name: "prem" }];

// let person = {

//   name: "prem",
// };

// console.log(person);

// const anotherP = person;

// person.name = "sam smith";

// console.log(person, anotherP);

// Math object
// const ans = Math.PI;
// const ans = Math.round(4.4);
// const ans = Math.ceil(4.1);
// const ans = Math.floor(4.7);
// const ans = Math.pow(8, 2);
// const ans = Math.sqrt(64);

// const ans = Math.min(0, 150, 30, 20, -8, -200);
// const ans = Math.max(0, 150, 30, 20, -8, -200);
// const ans = Math.random() * 100; // 0 - 0.999999....

// console.log(ans);

// Logical Operators
// &&
// ||
// !
// Ternary

// JS- Conditional statements
//// truthy: "sdjf", true, 1234, {}, [], ()=>
//// falsey: "", 0, NaN, false, undefined, null

// If
const age = 30;
const g = "m";

// if (age >= 18 && g == "f") {
// if (age && g) {
// if (age || g) {
// if (g !== "f") {

// true == !false
// if (!g) {
//   console.log("not allowed");
// }
// console.log(!!!age);

// !g && console.log("not allowed");

// If else
// if (age >= 18) {
//   console.log("Welcome to the Pub");
// } else {
//   console.log("not allowed, go home kido");
// }
//  condition ? "true, result" : "false, result"
// age >= 18
//   ? console.log("Welcome to the Pub")
//   : console.log("not allowed, go home kido");

// Else if
// const pet = "dogsadf";

// if (pet == "cat") {
//   console.log("meouw");
// } else if (pet == "dog") {
//   console.log("Woofff");
// } else if (pet == "cow") {
//   console.log("moooow");
// } else {
//   console.log("laj fhjaoh flasjdlfjlsdjfoiwejf lasldfj l");
// }

// Switch
// switch (pet) {
//   case "cat":
//     console.log("meouw");
//     break;

//   case "dog":
//     console.log("Woofff");
//     break;

//   case "cow":
//     console.log("moooow");
//     break;

//   default:
//     console.log("laj fhjaoh flasjdlfjlsdjfoiwejf lasldfj l");
// }

// JS- Error Handling

// try {
//   //
//   //   throw new Error("invalid phone number E2345");
//   const name = "5s";
//   console.log(name * 5);

//   //
//   //
// } catch (error) {
//   console.log(error);
//   //
// } finally {
//   console.log("loging ...");
// }

// JS- Scheduling

// setTimeout
// -> clearTimeout

// console.log("before set time out");
// setTimeout(() => {
//   console.log("from set time out");
// }, 3000); //1s

// setInterval
// -> clearInterval

// let i = 0;
// const counter = setInterval(() => {
//   console.log(i++);

//   if (i === 10) {
//     clearInterval(counter);
//   }
// }, 1000);

// ES6
// Let, Const
// Template literals
// const fn = "prem ";
// const ln = "acharay";
// const fullN = fn + ln;
// const add = "sydney";

// const bio = "hi my name is " + fn + "and I am from " + add;
// const bio = `
// hi my name is ${fn}
// and I am from ${add}
// `;
// console.log(bio);

// const a = "5";
// const b = 6;
// const ans = a + b;
// // console.log(ans);
// if (a === 5) {
//   console.log("you pass");
// }

// Functions in JS

// console.log("before function");
// fuction lifecycle
//carete
// function speak() {
//   console.log("hi there");
// }

// invoke/execute

// Arrow function
// const speak = () => {
//   console.log("hi there");
// };

// speak();
// Destructuring
// Default + Rest + Spread

////JS- Loops
// for(i = 0; i < cars.length; i++)

// Break out of loop
// Continue, in loop to skip 1 loop
// Break, break out the loop or switch

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i % 2 === 0) {
//     continue;
//   }

//   if (i == 4) {
//     break;
//   }
//   console.log(i);
/// 1000 line of codes
// }

// while (condition)
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// do/while |
// let i = 0;
// do {
//   console.log(i++);
// } while (i > 10);

// challange0:
console.log("1. first one");

const hehe = () => {
  console.log("2. hehe fuctioin");
};
setTimeout(() => {
  console.log("3. set time out");
}, 5000);
const yoyo = () => {
  console.log("4. hehe fuctioin");
};
console.log("5. after yoyo");
yoyo();
setTimeout(() => {
  console.log("6. set time out");
}, 0);
hehe();
console.log("7. last line");
