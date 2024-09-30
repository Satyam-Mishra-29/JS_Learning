// for of loop
// const arr = [1,2,3,4,5]

// for (const value of arr) {
//   console.log(value);   
// }

// const greeting = "Hello World";
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// }

//Map
// const map = new Map();
// map.set('In','India'); 
// map.set('USA','United State of America');

// console.log(map);

// for(const [key,value] of map){
//     console.log(key, "~" ,value);
// }

// For in Loop
// const myObject  ={
//     js : 'javascript',
//     cpp : 'C++',
//     rb : 'Ruby'
// }
// const programming = ["js","rb","py","html"];

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// } 

// It iterate the array keys i.e. Index of an Array
// for (const key in programming) {
//    console.log(key);
// }

// for each loop
// programming.forEach((element,index,arr) => {
//     console.log(element, index, arr);
// });

const values = programming.forEach((element,index,arr) => {
    console.log(element, index, arr);
});
console.log(values); 
