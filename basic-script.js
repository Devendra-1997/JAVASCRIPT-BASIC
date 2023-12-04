// single linke comment
/**
multi line comment 
alert("hello");
console.log("heyheheh");
 */

//=== Variable (only char, num, $ _)
// var let const

// var firstName = "Devendra Dhakal";
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
// String  		// “devendra dhakal”
// Number 	//123
// Boolen		// true or false
// Undefined	// not defined in system memory
// Null  		// defined in system memory but no value assigned

// const val = "devendra ";
// const val = "devendra";
// const val = 1234567890;
// const val = undefined;
// const val = null;

// let name = "devendra";

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
//   name: "devendra",
//   add: "sydney",
//   dob: 444,
// };

// const args = [123, "hehe", true, [12, 23], { name: "prem" }];

// let person = {

//   name: "devendra",
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
// const age = 30;
// const g = "m";

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
// console.log("1. first one");

// const hehe = () => {
//   console.log("2. hehe fuctioin");
// };
// setTimeout(() => {
//   console.log("3. set time out");
// }, 5000);
// const yoyo = () => {
//   console.log("4. hehe fuctioin");
// };
// console.log("5. after yoyo");
// yoyo();
// setTimeout(() => {
//   console.log("6. set time out");
// }, 0);
// hehe();
// console.log("7. last line");

//// JS- Data manipulation
// Number : safe number range = -2^53 -1 to 2^53 -1

// const num = 3_452_345_673_475_033_456;
// console.log(num);

//downcasting
// const ans = +num;
// NaN = not a number

// const ans = parseInt(num);
// const ans = parseFloat(num);

//if ans is not "not a number" === ans is a number
// isNaN(ans);
//text

// console.log(typeof ans, ans, isNaN(234)); //false

// String
// const str = "Hfsdfsd";

// Escape character
// const str = 'hi there my name is "devendradhakal", thank you';
// const str = 'hi i\'m "devendradhakal", thank you';
// const str = `hi i\'m "devendradhakal", thank\` you`;

// const name = "Sam";
// const age = 20;

// const str = " Hi my name is " + name + "i'm " + age + "years old";
// const str = `Hi my name is ${name} i'm a ${age} years old`;

// Length

// const value = str.length;

// toUpperCase, toLowerCase
// const value = str.toUpperCase();
// const value = str.toLowerCase();

// indexOf, lastIndexOf, search

// const value = str[6];
// const value = str.indexOf("a");
// const value = str.lastIndexOf("a");
// const value = str.search("Sam");

// Slice, substring, substr
// const value = str.slice(3, 5);
// const value = str.slice(-3);
// const value = str.substring(3, 5);

// Replace, concat, trim

// const value = str.replace("Sam", "devendra");
// const value = str.replace("i", "u");
// const value = str.replaceAll("i", "u");
// const value = str.trim();
// const value = str.concat(" => more info soon");

// charAt, [], split
// const value = str.includes("Sam");
// const value = str.charAt(4);
// const value = str.charCodeAt(0);
// const value = str.split("i");

// console.log(str);
// console.log(value);

// . Array[]
// Length, push , pop, shift, unshift, toString, join, [], splice, slice, indexOf

// const arg = ["kfl", 23, true, undefined, NaN, ["lkdfj", 33], {}, () => {}];

// const fruits = ["banana", "apple", "orange", "pear"];
// const veg = ["potato", "tomato"];
// fruits.length

// fruits.push("mango");
// fruits.unshift("Pear");

// const value = fruits.pop();
// const value = fruits.shift();

// const value = fruits.slice(1, 2);
// const value = fruits.splice(3, 0, "watermelon");
// const value = fruits.toString();
// const value = fruits.join("|");
// const value = fruits.indexOf("orange");

// console.log(fruits);
// Short, reverse
// console.log(fruits.sort((a, b) => b - a));
// console.log(fruits.reverse());

// forEach, map
// Filter, reduce, every
// forOf, fill

// for
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// const newArg = [];
// const arg = fruits.forEach((item, i) => {
//   newArg.push(item.toUpperCase());
// });

// const arg = fruits.map((item, i) => {
//   return "ID_" + item.toUpperCase();
// });

// const arg = fruits.map((item, i) => {
//   console.log(item);
//   if (item.includes("p")) {
//     return item + " good";
//   }
// });

// const arg = fruits.filter((item, i) => {

//   return item.includes("p") // ture or false
//   // if (item.includes("p")) {
//   //   return true;
//   // }
// });

// const arg = fruits.filter((item) => item.includes("p"));
// const arg = [3, 2, 1, 5, 4];

// const total = arg.reduce((subttl, item) => {
//   return subttl + item;
// }, 0);
// console.log(total);

// const ans = fruits.every((item) => item.includes("p"));

// for (let item of fruits) {
//   console.log(item);
// }

// const dt = Array(100).fill("❤️");
// console.log(dt);

// console.log(ans);

// Challange #1
// 1. create an array of 50 rando bumbers range between 1 and 100 programmatically

// const numArr = [];

// for (let i = 0; i < 50; i++) {
//   const num = Math.floor(Math.random() * 100) + 1; //0 - 0.9999
//   numArr.push(num);
// }

// // 2. sort the array in descending order
// numArr.sort((a, b) => b - a);
// console.log(numArr);

// //3. Get the total value of the array
// const total = numArr.reduce((subTtl, item) => subTtl + item, 0);
// console.log(total);
// //4. from the original array created above, create another 2 arrays that contains even or odd numbers individually
// const evenNumber = numArr.filter((item) => item % 2 === 0);
// const oddNumber = numArr.filter((item) => item % 2 !== 0);
// // console.log(evenNumber, oddNumber);

// //5. remove the duplicate number for the original array
// // const noDupArg = [...new Set(numArr)];
// const noDupArg = numArr.filter((item, i) => i === numArr.indexOf(item));
// console.log(noDupArg);

// #2 challange
// 1. create an array of 50 unique random numbers range between 1 and 100 programmatically

// const uniqueArg = []; // length 0
// let i = 0;
// while (uniqueArg.length < 90) {
//   const num = Math.floor(Math.random() * 100) + 1;

//   if (!uniqueArg.includes(num)) {
//     uniqueArg.push(num);
//   }
//   console.log(i++);
// }

// console.log(uniqueArg.sort());

// Objects{}
// Property, assign, delete, convert to array, loop

// const obj = {
//   name: "devendra",
//   phone: 3456,
// };

// console.log(obj);

const person = {
  name: "sam smith",
  number: 3454,
  add: "20 george st sydney",
  married: false,
  skills: ["html", "css", "javascript"],
  parent: {
    f: "harry",
    m: "merry",
  },
};

// const value = person["name"];
// const value = person.name;
// const value = person.parent.m;
// const value = person.skills[2];

// person.age = 33; // adding
// person.number = "042352"; // override
// person.parent.gar = "someone";
// person.skills.push("kjhg");

// delete person.parent;

// console.log(person);
// const p1 = {
//   name: "Devendra",
//   age: 22,
//   phone: "345",
// };

// const p2 = p1; // refrencing to the same data in the memory
// const p2 = Object.assign({}, p1);
// const p2 = { ...p1 };

// p1.age = 44;

// console.log(p1);
// for (let key in p1) {
//   const value = p1[key];
//   console.log(key, value);
// }

// const keys = Object.keys(p1);
// const values = Object.values(p1);
// const entires = Object.entries(p1);
// console.log(entires);

// Arrow function
// const myFunction = (devendra, dhakal) => {
//   console.log(devendra, dhakal);
// };

// const output = myFunction("devendra is my name", 99);
// console.log(output);

// const p1 = {
//   name: "Sam",
//   age: 22,
//   phone: "345",
//   email: "skdljf@mail",
//   m: "Terisa",
//   f: "John",
// };

// const p2 = {
//   name: "Harry",
//   age: 42,
//   phone: "888",
//   email: "sfs@mail.com",
//   m: "Merry",
//   f: "Sam",
// };

// const career = {
//   job: "fsd",
//   pay: 100,
// };
// Destructuring

// const name = p2.name;
// const age = p2.age;
// const { name, age } = p2;
// const { m, f, ...newObj } = p2;

// delete p2.m;
// console.log(newObj);
//  const newP =

// const parentInfo = ({ m, f }) => {
//   return ` And their parent name is ${f} and ${m}`;
// };

// const bio = (obj) => {
//   console.log(obj);
//   const { name, age, phone = "0987654", ...rest } = obj;

//   return (
//     `This is all about a peron called ${name}. He is ${age} years old. You can call him anytime at ${phone}` +
//     parentInfo(rest)
//   );
// };

// const samBio = bio(p1);
// console.log(samBio);

// const harryBio = bio(p2);
// console.log(harryBio);

// Default + Rest + Spread

// const fullInfo = {
//   ...p2,
//   ...career,
// };

// console.log(fullInfo);

// const arr1 = [23, 45, 6, 7, 67];
// const arr2 = ["lklj", "kljhg", "kl"];
// const newArg = [...arr1, ...arr2];

// console.log(newArg);

//// Date()

// const dt = new Date("1990-10-24");
// const nowTime = Date.now() / (1000 * 60 * 60 * 24 * 365);
// Formate
// const timing = dt.toDateString();
// const timing = dt.toLocaleDateString();
// const timing = dt.toLocaleTimeString();

// Get Methods
// const timing = dt.getDate();
// const timing = dt.getDay();
// const timing = dt.getMonth();
// const timing = dt.getFullYear();
// console.log(timing);

// Set Methods
// console.log(dt.toLocaleDateString());
// dt.setDate(dt.getDate() - 5);
// console.log(dt.toLocaleDateString());

// const today = new Date()

// ========
// challange #3:
// - create food object that contains the name and exp date of the food
// const foods = [
//   {
//     name: "A2 Milk",
//     exp: "2023-11-24",
//   },
//   {
//     name: "Tuna",
//     exp: "2023-12-24",
//   },
//   {
//     name: "Fish",
//     exp: "2023-12-22",
//   },
//   {
//     name: "sugar",
//     exp: "2022-12-24",
//   },
// ];

// - create a function that takes food object that create above and return on of the following:
// const aDay = 1000 * 60 * 60 * 24;
// const checkExp = ({ name, exp }) => {
//   const today = Date.now();
//   const expDate = new Date(exp).getTime();

//   const diffDay = (expDate - today) / aDay;
//   if (diffDay < 1) {
//     return `${name} is expired ${Math.floor(Math.abs(diffDay))} days ago`;
//   } else {
//     return ` You have ${Math.floor(diffDay)}  days to use the ${name}`;
//   }

//   // 1.if food expired: ABC is expired 4 days ago
//   // 2. if not expired: You have 10 days to use this product.
// };

// foods.forEach((item) => {
//   const expireData = checkExp(item);
//   console.log(expireData);
// });
