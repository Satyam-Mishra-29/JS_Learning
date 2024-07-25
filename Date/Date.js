// Dates 
let myDates = new Date();
console.log(myDates); //2024-07-25T15:11:05.143Z
console.log(myDates.toString()); //Thu Jul 25 2024 20:41:05 GMT+0530 (India Standard Time)
console.log(myDates.toJSON()); //2024-07-25T15:11:05.143Z

console.log(myDates.toISOString()); //2024-07-25T15:12:14.675Z
console.log(myDates.toLocaleString()); //25/7/2024, 8:43:05 pm

console.log(typeof myDates);  //object

// let MyCreatedDate = new Date(2023,0,23,5,3);
// console.log(MyCreatedDate.toString()); //Mon Jan 23 2023 05:03:00

let MyCreatedDate = new Date("2023-01-14"); //Invalid Date
console.log(MyCreatedDate.toString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(MyCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); // to convert milliseconds into seconds

let newDate = new Date();
console.log(newDate); 
console.log(newDate.getMonth()+1); //7
console.log(newDate.getDay()); //4

console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`); //4 and the time is 1721921549217

let weekday = newDate.toLocaleString('default',{
    weekday : "narrow",
});
console.log(weekday);
