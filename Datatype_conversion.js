//! String Conversion
let score = "33abc";
console.log(typeof score);

let valueinnumber = Number(score) 
console.log(typeof valueinnumber);
console.log(valueinnumber);

//~ "33" => 33
//~ "33abc" => NaN
//~ true => 1; false => 0
//~ null => true;

//! Boolean Conversion
let isLoggedIn = null
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

//~ If you passed the number rather than 0 it take as a true value
//~ empty string("") => false
//~ undefined,null => false;

//! Number Conversion
let sumNumber = 33 
let stringNum =String(sumNumber)
console.log(stringNum);
console.log(typeof stringNum);

//==================================================== TypeCasting ====================================== //
//! Type Casting:
//? implicit : 
let x ="10";
let y =20;
let z = x+y;
console.log(z); 

/*
when one of the value is passed in string and one in number and when we use "+" the values converted into string and the concatination operation are being performed..
Even you passed both as string and when we use operator "+" it converted into string and the concatination operation can be performed..
*/

console.log(true+false);
console.log("100"-30);  
console.log("100"*30);

/*
 when one of the value is passed in string and one in number and when we don't use "+" the values converted into number..
 Even you passed both as string and use operator other than "+" it converted into string and the operation can be performed..
*/

// //? explicit
let a = "2000.1232";
let b ="123str";
let num = parseInt(a);
console.log(num);
console.log(typeof num);

console.log(parseInt(b));
console.log(parseFloat(a));

/*
When the ParseInt() is being used the string value being converted into number which contain number inside it...

2000.1232 ==> 2000 
123str ==> 123
str ==> NaN

WhereAs, ParseFloat() is used to convert the string value in float format...
2000.1232 ===> 2000.1232

*/