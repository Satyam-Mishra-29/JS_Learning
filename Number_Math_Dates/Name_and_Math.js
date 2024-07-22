// Printing a number value
const score = 400
console.log(score);

// fixing the datatype of balance value using Number class.
const balance = new Number(100.46454)
console.log(balance);

// Fixing the digit of given value upto given decimal.
console.log(balance.toString().length);
console.log(balance.toFixed(2));

// Converting number exponential or fixed-point notation with a specified number of digits
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); //Must be in the range 1 - 21, inclusive.

//Converting the number into indian number system.
const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));

//Returning the maximum, minimum value of Number class...
let r1 = Number.MAX_VALUE;
console.log(r1); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991  

//============================================================ Math =======================================================================

/* */

console.log(Math);
console.log(Math.abs(-5)); //5
console.log(Math.round(4.3)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2));  //5
console.log(Math.floor(3.7)); //3
console.log(Math.min(1,5,-67,89,5)); //-67
console.log(Math.max(1,5,-67,89,5)); //89

console.log(Math.random()); // gives the value from 0 - 1

// formula to take a random value from given range
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1) + min)); // gives the value from 10 -20
