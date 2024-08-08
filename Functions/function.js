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

// function using rest operator
function calculateCartPrice(val1,val2,...num1){
    console.log(val1,val2);
    return num1
}
console.log( calculateCartPrice(200,300,500,20000));

// Object Passing in function
const user = {
    product: "Mobile Cover",
    price : 200
}

function handleObject(AnyObject){
console.log(`USername is ${AnyObject.product} and and price is ${AnyObject.price}`);
}
handleObject(user);

// Array passing in function
const newArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(newArray));
