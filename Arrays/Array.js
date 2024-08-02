// array --> Homogeneous(same datatype value) & Heterogeneous(diff datatype values)

const myArr =[10,1,2,3,5];
const Marvels =["Hulk","Ironman","Deadpool"];

console.log(myArr[0]); //10

// Methods to add element in array: 
// push --> add element at a last index. It modifies the original array...
myArr.push(6);
myArr.push(7);
console.log(myArr); // [10, 1, 2, 3,5, 6, 7]

// unshift ---> add element at a first index.It modifies the original array...
myArr.unshift(16);
myArr.unshift(12);
console.log(myArr); //[12, 16, 10, 1, 2, 3,  5,  6, 7]

// pop --> add element at a last index. It doesn't take any value as an argument. It modifies the original array...
myArr.pop();
console.log(myArr); //[ 12, 16, 10, 1,  2,  3,  5,  6]

// shift ---> add element at a first index. It doesn't take any value as an argument. It modifies the original array...
myArr.shift();
console.log(myArr); //[16, 10, 1, 2, 3,  5,  6, 7]

// Boolean Methods :
// Includes : It return true and false value
console.log(myArr.includes(8)); //false
console.log(myArr.includes(16)); //true

// Index Return Methods :
console.log(myArr.indexOf(3)); //4
console.log(myArr.indexOf(15)); //-1 ---> False value

// Array to String Conversion method :
newArr = myArr.join();
console.log(newArr); //16,10,1,2,3,5,6
console.log(typeof newArr); //string

//Section Returning Method 
// slice : It doesn't change the Original Array and it take input as an index of an array.
console.log("A", myArr); //A [16, 10, 1, 2, 3,  5, 6]
const myn1 = myArr.slice(1,3);
console.log(myn1);//[ 10, 1 ]
console.log("B",myArr); //B [16, 10, 1, 2, 3,  5, 6]

// splice : It change the Original Array and it take input as an index of an array.
const myn2 = myArr.splice(1,3);
console.log(myn1);//[ 10, 1 ]
console.log("C", myArr); //C [ 16, 3, 5, 6 ]

//pushing array inside another array..
const marvels_hero = ["IronMan","thor","loki"];
const dc = ["superman","aquaman","flash"];

marvels_hero.push(dc);
console.log(marvels_hero); //[ 'IronMan', 'thor', 'loki', [ 'superman', 'aquaman', 'flash' ] ]
console.log(marvels_hero[3][1]); //aquaman

// concat array
let c = marvels_hero.concat(dc);
console.log(c); //[ 'IronMan', 'thor', 'loki', 'superman', 'aquaman', 'flash' ]

// spread operator
const all_heros = [...marvels_hero,...dc]
console.log(all_heros); //[ 'IronMan', 'thor', 'loki', 'superman', 'aquaman', 'flash' ]

// flat method --> if it doesn't find coma it consider as a last array and return undefine for futher element 
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const OG_array = another_array.flat(Infinity)
console.log(OG_array); //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5 ]


// is method
console.log(Array.isArray("Satyam"));  //false

// from method
console.log(Array.from("Satyam")); //[ 'S', 'a', 't', 'y', 'a', 'm' ] --> It convert the other datatype in Array
console.log(Array.from({name :"Satyam"})); //[] ---->{It return empty array because it confuses between key and value pair in order to take 
// as Array element} intresting concept.

//of method
let score1 =100;
let score2 =200;
let score3 =300;
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]
