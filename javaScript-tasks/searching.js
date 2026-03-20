let name = "Sameera"; 
let age = 30;
let isStudent = false;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);

let firstName = "Vishmi";
let lastName = "Nethara";
let finaleName = "Aththanayake";

console.log(`I Love You ${firstName} ${lastName} ${finaleName}`);

let text = "javascript";

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("script"));
console.log(text.slice(0,6));
console.log(text.split("v"));
console.log(text.replace("java","type"));


let a = 10;
let b = 4;
console.log(a + b); 
console.log(a ** b);

let num = 12.6789;
console.log(num.toFixed(2));
console.log(Math.round(num)); // Math.round() rounds to the nearest integer, while Math.floor() always rounds down and Math.ceil() always rounds up.
console.log(Math.floor(num)); // Math.round() rounds to the nearest integer, while Math.floor() always rounds down and Math.ceil() always rounds up.
console.log(Math.ceil(num)); // Math.round() rounds to the nearest integer, while Math.floor() always rounds down and Math.ceil() always rounds up.
console.log(Math.max(5, 9, 2));
console.log(Math.min(5, 9, 2));
console.log(Math.random());

let user = { name: "Sam", age: 25 };
for (const key in user) {
  console.log(key, user[key]);
}

