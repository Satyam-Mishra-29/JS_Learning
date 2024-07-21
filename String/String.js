// String is an indexed data Structure in JS ( JAVASCRIPT )

const Myname = "Satyam"
const repocount = 4;
console.log(`Hello I am ${Myname} and my repocount is ${repocount}`);

//Accessing index of the given String.

console.log(Myname[0]); //S

//Returning the length of String.

console.log(Myname.length); //6

//Returning String a into Uppercase & LowerCase

console.log(Myname.toUpperCase()); //SATYAM
console.log(Myname.toLocaleLowerCase()); //satyam

//Checking character position in String

console.log(Myname.charAt(0)); //S       //takes a number as a value 
console.log(Myname.indexOf('t')); //S     //takes the string value as an argument


// Returning the part of String 
gameName = 'LuciferSinner06'
const str = gameName.substring(5, 7); //takes a number as a value only positive integer
console.log(str); //Lucifer 

let str2 = gameName.slice(-2) //takes a number as a value but it also takes negative values
console.log(str2); //06 

// Note : When we pass negative value slice return the string values from last index position


// Trimming extra spaces from an  String
let NewString = "                      Sam                    "
console.log(NewString); //                      Sam
console.log(NewString.trim()); //Sam

// Replacing the given String with new value..
const URL = "https://www.google.com%20"
console.log(URL.replace('google','code-pen')); //https://www.code-pen.com%20

// Finding the value inside a following String
console.log(URL.includes("https")); //true

// Note : includes return a boolean values

//Convert the following String into an Array
const GameName = "Clash Royale"
console.log(GameName.split(' ')); // [ 'Clash', 'Royale']


// Reversing the String value 
const stringValue = "JavaScript"
let res1 = stringValue.split("").reverse().join(""); //tpircSavaJ
console.log(res1);

// In Order to reverse the string we use the split to convert into an Array...
// Reverse to reverse a string value (converted array value) & join is used to convert array into a String

// Finding the ASCAI value of following character 
let res4 = stringValue.charCodeAt(1);
console.log(res4); //a ----> 97

