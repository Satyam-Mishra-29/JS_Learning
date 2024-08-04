const tinderUser = new Object();
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false;
console.log(tinderUser); //{ id: '123abc', name: 'Sam', isLoggedIn: false }

const regularUser ={
    email : "some@gmail.com",
    fullname : {
        username: {
            myFirstname : "Satyam",
            Mylastname : "Mishra"
        }
        
    }
}

console.log(regularUser.fullname); //{ username: { myFirstname: 'Satyam', Mylastname: 'Mishra' } }
console.log(regularUser.fullname.username.myFirstname); //Satyam

// Object Combination
const Obj1 = {1: "a", 2: "b"};
const oBJ2 = {3: "a", 4: "b"};


// const Obj3 = {Obj1,oBJ2} ---> Wrong Approach
// console.log(Obj3); //{ Obj1: { '1': 'a', '2': 'b' }, oBJ2: { '3': 'a', '4': 'b' } } 


//  Object.assign() : It is used to merge two and more Objects. It affect only first object {target object}.
const res = Object.assign({},Obj1,oBJ2); 
console.log(res); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// Using spread Operator ---> Mostly Used 
const res2 = {...Obj1,...oBJ2}
console.log(res2); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


console.log(tinderUser);
// Object.key() : It will return array with the key present  inside an Object.
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]


// Object.values() : It will return array with the values present  inside an Object.
console.log(Object.values(tinderUser)); //[ '123abc', 'Sam', false ]


// Object.entries() : It will return array with the key & values present inside an Object.
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
console.log(tinderUser.hasOwnProperty('isLogged')); //false
