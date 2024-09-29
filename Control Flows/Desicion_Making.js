/*
Conditional Operator
< --> greater than
> --> lesser than
<= ---> greater than equals too
>== ----> less than equals to
=== ---> strick equals check
!== ---> strick not equals check
*/
// if-else
// temperature =20;
// if(temperature ===40){
//     console.log("less than 50");
// }
// else{
//     console.log("Nah its more than 50");
// }

// const balance = 1000;
// if(balance >5000) console.log("your wallet is not empty");

// if-else if
// if(balance < 500){
//     console.log("less than");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("more than 1000");
// }



//===================================================== RLE --- Real Life Example ========================================
// const userLoggedIn = true;
// const DebitCard = true;

// if(userLoggedIn && DebitCard ){
//     console.log("Allow to buy course");
// }
// else{
//     console.log("Not Allowed to buy course");
// }


// Switch Case 
let month = 3;
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;

    default:
        console.log("Months not comes under Winter Season");
        break;
}

// Truthy Values 
// "0", 'false', " ",[],{},function(){}

// Falsy Value
// false , 0 , -0, BigInt 0n, "", null, undefined, NaN 

// nullish Coalescing Operator (??): null undefined --> used to avoid null and undefined value

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15;

console.log(val1);

// Ternary Operator

//  condtion ? true : false
const iceTea = 100
iceTea >= 80 ? console.log("PRICE LESS THAN 80") : console.log("MORE THAN 80");
