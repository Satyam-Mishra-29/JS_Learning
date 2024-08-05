function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("T");
    console.log("Y");
    console.log("A");
    console.log("M");
}
sayMyName(); 
/*
S
A
T
Y
A
M 
*/

// function addTwoNum (number1 , number2){
//  console.log(number1 + number2); 
// }
addTwoNum(3,4); //7
addTwoNum(3,null); //3
addTwoNum(3,"2") //32
addTwoNum(3,"a") //3a

// Function with return value
function addTwoNum (number1 , number2){
    return (number1 + number2); 
    console.log("Satyam");
   }

const sum = addTwoNum(3,2);
console.log(`The sum of given two number : ${sum}`); //The sum of given two number : 5


// function to return username
// function loginUsermessage(username){
//     return `${username} just logged In`;
// }
// console.log(loginUsermessage("Satyam")); //Satyam just logged In
// console.log(loginUsermessage()); // if value not passed ---> undefined just logged In



// if statement in function
function loginUsermessage(username){
    if (!username) {
        console.log("Enter the username");
        return
    }
    return `${username} just logged In`;
}
console.log(loginUsermessage(""));
