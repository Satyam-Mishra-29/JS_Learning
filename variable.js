const accountId = 144553 // Const can't be changed
let accountEmail = "satyam@gmail.com"
var accountPassword = 1233456
accountCity = "Thane"

//  ! accountId = 2    Assignment to constant variable. i.e not allowed

accountEmail = "hchc@gmail.com"
accountPassword = 1256
accountCity = "Bengaluru"

console.table([accountEmail,accountPassword,accountCity]) //~ console.table is used to represent a data in table format.

//& In JS Variable is declared by let and var keyword. But the var is most rarely used in JS in order to avoid scope problem.

/*
Prefer not to use var Because of the issue in block scope & function
*/

let accountState;
console.table([accountEmail,accountPassword,accountCity,accountState]) //~ console.table is used to represent a data in table format.
