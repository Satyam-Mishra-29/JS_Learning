//Destructuring of Object...
const course = {
    courseId : 1232,
    courseName : "Js",
    courseInstructor : "Sam",
}
const {courseInstructor : Instructor} = course //Destructuring the key of an Object
console.log(Instructor); //Sam

//APIs ---> Application Programming Interface 

// ========================================= JSON (JavaScript Object Notation)=====================================


/* 
 It is a kind of file format
 We need to use filename.json
 It is used to store the data in the format of array and object.
 The key in the form of string only.
 till 10Mb it should store the data.
 In JS JSON is an inbuilt class consist of method such as : 
 1.JSON.stringify :  JS object ----> JSON string. 
                     It take only one argument.
 2.JSON.parse : JSON ---> JS object.
 */  

 let o = {
    name : "xyz",
    id: 300,
    skills : ["js","react"]
 };

 let str = JSON.stringify(o);
 console.log(str);
 console.log(typeof str);

 let p = JSON.parse(str);
 console.log(p);

