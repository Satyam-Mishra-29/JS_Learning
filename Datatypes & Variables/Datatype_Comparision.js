console.log("2" > 1); //true
console.log("02" > 1); // true


// Recommendation : When you comparing values make sure datatype should be same.

console.log(null > 0);   //false
console.log(null == 0);  // false
console.log(null >= 0); //true

/*

The equality check == and comparison > < >= <= works differently.
Comparison convert null to a number, treating as a 0
That's why (3) null >= 0 is true and null > 0 is false..

*/

console.log(undefined == 0); //false

// === : it is used to check the datatype of that value also.

console.log("2"===2); //false

// ===================== Datatype Summary ===================================================//

/* primitive :  7 types 
All the datatype is call by value data...

1. String
2. Number
3. Boolean
4. null
5. undefined
6. Symbol
7. Bigint
*/
const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let UserEmail;

const id =Symbol('123')
const anotherId = Symbol('123')

console.log(Symbol==anotherId); //false

const bigNumber = 34353232343247346347424673644n

/*
Reference type : Non-primitive type

1. Array
2. Objects
3. functions
*/

const heros =["hulk","hanuman","batman","vision"]; //Array

let myObj = {
    name : "Satyam",
    age : 23,
} //object

let myFunction = function(){
   
   return "Hello World" 
}

console.log(myFunction());