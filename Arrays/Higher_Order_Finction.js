
//filter method
// const Number = [1,2,3,4,5,6,7,8,9,10]
// const returnedValue = Number.filter((num) =>{
//     return num >4;
// } );
// console.log(returnedValue);

//map method
// const returnedVal = Number.map((num) =>{
//    return num+10;
// }
// )
// console.log(returnedVal);

// reduce method
// const myNums = [1,2,3];

// const finalVal = myNums.reduce((acc,cv)=>{
// console.log(`acc value :${acc} and current value : ${cv}`);
//    return acc + cv;
// },0);

// console.log(finalVal);

// ==================================================RTE of reduce ===============================================//
const myCoursePurchase = [
    {
    courseName : "Js Basic",
    fees : 499
    },
    {
    courseName : "Ethical Hacking",
    fees : 999
    },
    {
    courseName : "Mobile Dev",
    fees : 5000
    },
    {
    courseName : "Data Science",
    fees : 10000
    },

]

const PricetoPay = myCoursePurchase.reduce((acc,item)=> acc+item.fees,0);
console.log(PricetoPay);

// loop chaining
const returiningValue = Number.map((num) =>num*10)
                              .map((num)=>num-10)
                              .filter((num)=> num >=40);

 console.log(returiningValue);
 
