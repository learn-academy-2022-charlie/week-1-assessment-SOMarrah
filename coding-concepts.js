// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: correct, .push() outputs the index number inside of an array.


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: correct, .length counts the number of symbols inside of the string. I think it would count the index number for an array too.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer:"o" || unidetified/error
// b) Verify and explain: correct, Strings can act as an index in certain cases. Both strings and arrays are zero indexed


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "Ruby" || unidentified
// b) Verify and explain: Correct, but I wasn't sure. It is interesting to see that you can use a variable with stored numbers (maybe other things) as a reference for an array.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer:Saturday, Sunday
// b) Verify and explain: incorrect, type error. the toUpperCase method works on strings, not arrays.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: number || error
// b) Verify and explain: correct, but I was not sure. My thinking was .length would output as the number index and typeof would identify that. 
