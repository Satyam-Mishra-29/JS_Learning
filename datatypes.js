"use strict"; //& treat all JS code as newer version

//&  alert(3+3); It can be used on browser not on server side i.e nodejs/terminals


// ~ DataTypes In JavaScript
// ^ Primitive Datatype : number, boolean, string, bigInt, null, undefined, NaN
// & Non Primitive Datatype : function, array, object

let num = 100;
console.log(num)
console.log(typeof num);

// ! typeof : Its used to check the type of data we are initialized during declaring variable...

//* Number: ==> range of datatype : 2 to power 53
let d = 29.76;
console.log(typeof d);

//* Boolean: ==> true/false
var a = true;
console.log(typeof a);

//* string:
const c = `luffy`;
console.log(typeof c);

let s1=`${10+20}`; //${} is used to perform interpolation inside backticks(template literals)...
console.log( s1);

//* bigint:
let num2 = 123n;
console.log(typeof num2)

//* null :  ==> standalone value
let o = new Object();
o = null;
console.log(o);
console.log(typeof o); //! The datatype of null is object 

//* undefined ==> 
let i ;
console.log(typeof i) //!  The datatype of undefined is undefined 

//* NaN
let sum = 1000-"40";
let str = "str" - 200;
console.log(str)
console.log(typeof str) //! The datatype of NaN is number...


// symbol ==> unique