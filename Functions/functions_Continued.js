// this --> it is a keyword which referred to current context
const user = {
    username : "satyam",
    price : 999,

    welcomeMessage : function()  { {}
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
};

// user.welcomeMessage() //satyam , welcome to website
// user.username = "luffy"
// user.welcomeMessage() //luffy , welcome to website --> the value of username  is being change(updated)

console.log(this); //server side ---> empty object{}
                  //browser side ---> window object


//==================================Function Type=====================================//

//  Function with Name
function chai(){
    let username = "Satyam"
    console.log(this.username);
}
chai() //undefined


//  Function with Expression
const biscuit = function(){
    let username = "sam"
    console.log(this.username);
}
biscuit() //undefined

// Arrow Function
const addTwo = (num1,num2) =>{
    return num1+num2
}
console.log(addTwo(2,3)); //5  

// Implicit Return Arrow Function 
// const multTwo = (num1,num2) => (num1*num2)
const multTwo =  (num1,num2) => ({username : "sam"}) //implicit arrow function in order to return object
console.log(multTwo(2,3)); //6 

// Immediately Invoked function Expressions (IIFE)
//named IIFE
(function sqlconnect(){
    console.log(`DB Connected`);
})(); //DB Connected  

// Immediately Invoked function Expressions (IIFE) with Arrow Function
((Connection_type)=>{
    console.log(`DB CONNECTED 2 using ${Connection_type}`);
})(`JDBC`); //DB CONNECTED 2 using JDBC
