// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

//create a function (const <name> = () => {}) -> bigString
//inputs two strings (string1 , string2) --> output (return) bigger string
// I think of comparing -> decision making-conditionals (boolean) - if(this){do this}
//what if strings are = ?
//invoke the function using console.log() - input the test variables, and other data.

//could also use string interpolation to say how many characters each string was, or how much bigger the string was from the other
//`${string1} was bigger by ${string1.length-string2.length}`

const bigString = (string1 , string2) => {
  if(string1 > string2){
    return string1
  }else if(string1 === string2){
    return "They are the same!"
  }else{
    return string2
  }
}
console.log(bigString(fruit2 , fruit3))
console.log(bigString(fruit1 , fruit4))
console.log(bigString("fruit2" , "fruit3"))
console.log(bigString(1234 , "abcdefghi"))

//My outputs:
// cherry
// kiwi
// fruit3
// abcdefghi


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

//make a function atTemp
//it has to make a decision based on input numbers
//conditionals-> if(this){then do this} for each tempRange + ANY given number
//the output will return the number given and a string -> string interpolation `${}`
//invoke the function using console.log()

const atTemp = (temp) => {
  if(temp > 212){
    return `${temp} is above boiling point.`
  }else if(temp === 212){
    return `${temp} is at boiling point.`
  }else{
    return `${temp} is below boiling point.`
  }
}
console.log(atTemp(temp1));
console.log(atTemp(temp2));
console.log(atTemp(temp3));
console.log(atTemp(8990));
console.log(atTemp(0));
// my outputs:
// 42 is below boiling point.
// 350 is above boiling point.
// 212 is at boiling point.
// 8990 is above boiling point.
// 0 is below boiling point.
//I wanted to try negative numbers but wasn't sure how to do that since it recognized the "-" symbol as minus (math)
// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]
//combine 2 arrays as an input and output the length of the array.
//i know .concat can combine 2 different arrays, but that would then need to be stored in something like a var -> because it would have to be accessed later.
//.length counts each index in an array, which would give the expected output.

var combNums = myNumbers1.concat(myNumbers2)
console.log(combNums.length);
//my output:
//10

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"

const currentCohort = "Charlie 2022"
//.reverse() reverses the order of an array.
//the only problem is the variable being a const - it cannot be reassigned as a const - and .reverse() is a mutator which changes (reassigns) the variable - it also has to be used on an array
//try a function? - did not work since invoking the function using currentCohort as a string is outside of the scope.
//try a for loop that goes through each index and saves it in reverse?
//output method is the modified array console.log()
// for(i = 0; i < currentCohort.length; i++){
//   if(i != reversed){
//     reversed = + [i]
//   }
// } - I feel like this method could work, but couldnt figure out how to save the data from the for loop in the variable so I tried different methods
//maybe .reverse() only works in arrays? -> .split turns string to an array. then .reverse() and .join to fix it back into a string?
console.log(currentCohort.split("").reverse().join(""))
//my output:
//2202 eilrahC - i did not know I could combine many methods in one to accomplish a task. seems strange to make it an array, reverse it and to put it back together as a string but it worked? -and seems efficient




// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

//to solve this problem I thought of a for loop since the variable is an array. for loop can go through each index and then use a conditional to check if it is even or odd. the for loop can also log each value in order as it goes through the index. using .length would allow the statement to check each index, and ++ would count to the next index since arrays start at the zeroth place (0,1,2,3,etc)

// if(number is even)- output even, else - output odd.

for(i = 0; i < myArray.length; i ++){
  if(myArray[i]%2 === 0){
    console.log("even");
  }else{
    console.log("odd");
  }
}
//output:
// odd
// even
// odd
// even
// odd
// even

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

//make a function called subtractor
//the function checks (makes a decision -> conditional) which input (argument) num1 , num2  is bigger than the other.
//then the function subtracts the larger number from the smaller number.
//the output is then invoked using console.log();because it is a function
//what if both numbers are the same value?

const subtractor = (num1 , num2) => {
  if(num1 > num2){
    return `${num1 - num2}`
  }else if(num2 > num1){
    return `${num2 - num1}`
  }else{
    return `The numbers are the same value, but lets carry on. ${num1 - num2}`
  }
}
console.log(subtractor(number1 , number2));
console.log(subtractor(number3 , number4));
console.log(subtractor(number1 , number3));
console.log(subtractor(number2 , number4));
console.log(subtractor(42 , -42));
console.log(subtractor(3 , 3));
//my outputs:
// 42
// 3
// 31
// 76
// 84
// The numbers are the same value, but lets carry on. 0
