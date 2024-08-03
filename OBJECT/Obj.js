// Objects --->It is a key and value pair
//  1. If we create using constructor it called as singleton array.
// 2. Literal way


// How to access Object keys ?
//   ---> By using Object notation such as dot notation (.), bracket notation([])
const myAge = Symbol("age");

const JsUser = {
        name : "Satyam",
        psswd: 1234567,
        [myAge] : "20",
        isLoggedIn: false,
        deployData : null,
        skills : ["JS","Java","SQL"]
    };

    console.log(JsUser);
    /*

    {
        name: 'Satyam',
        psswd: 1234567,
        isLoggedIn: false,
        deployData: null,
        skills: [ 'JS', 'Java', 'SQL' ]
      }

    */
//    console.log(JsUser[name]); // name is not defined
console.log(JsUser["name"]); //Satyam
console.log(JsUser.skills); //[ 'JS', 'Java', 'SQL' ]
console.log(JsUser[myAge]); //20
console.log(typeof myAge); //symbol


// Methods in Object : 1.Object.freeze
// Object.freeze(JsUser);
JsUser.email = "sm90052@gmail.com";
console.log(JsUser); 
/**
 * 
 {
  name: 'Satyam',
  psswd: 1234567,
  isLoggedIn: false,
  deployData: null,
  skills: [ 'JS', 'Java', 'SQL' ],
  [Symbol(age)]: '20'
}
 * 
 */

JsUser.greet = function(){
    console.log("Hey Coders !");
}
JsUser.greet2 = function(){
    console.log(`Hey Coders !  I am ${this.name}`);
}
console.log(JsUser.greet()); //Hey Coders !
console.log(JsUser.greet2()); //Hey Coders !  I am Satyam ---> It will accept the object property
