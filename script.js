// Basic Operators : allows us to tranform or combine values
// --------------------------------------------------

// Math Operators
// --------------------------------------------------
// const ageVeries = 2025 - 1977;
// console.log (ageVeries);

// Console.log() multiple 
// --------------------------------------------------
// const ageSarah = 2037 - 2018;
// console.log (ageVeries, ageSarah);

// Add Varible to keep from repeating
// --------------------------------------------------

const now = 2037;
const ageVeries = now - 1977;
const ageSarah = now - 2018;
console.log (ageVeries, ageSarah);

// exponents are written like this 2 ** 3 means 2 * 2 * 2
console.log(ageVeries * 2, ageVeries / 10, 2 ** 3);

// Expected Result
// --------------------------------------------------
// 120 6 8

// The plus operator can be used to concatinate strings
// --------------------------------------------------

const firstName = "Veries";
const lastName = "Seals";
// Create a space between strings + " " +
console.log(firstName + " " + lastName);

// Expected Result
// --------------------------------------------------
// VeriesSeals

// Assignment Operators 
// --------------------------------------------------

let x = 10 + 5;
x += 10; // this means: x = x + 10
// Expected Result
// --------------------------------------------------
// 25
x *= 4; // this means: x = x * 4
// Expected Result
// --------------------------------------------------
// 100
x ++; // this means: x = x + 1
// Expected Result
// --------------------------------------------------
// 101
x --; // this means: x = x - 1
x --; // this means: x = x - 1
// Expected Result
// --------------------------------------------------
// 99
console.log(x);

// Comparison Operators (Boolean Values)
// >, <, >=, <=
// --------------------------------------------------

console.log(ageVeries > ageSarah); 

// Expected Result
// --------------------------------------------------
// true

console.log(ageSarah >= 10);
// Expected Result
// --------------------------------------------------
// true

const isFullAge = ageSarah >= 10; 

console.log(now - 1991 > now - 2018);
// Expected Result
// --------------------------------------------------
// true

// Operator Precedence
// --------------------------------------------------