// IF ELSE  CONDITIONAL STATEMENT

const temperature = 41
if(temperature  === 4) {
    console.log("yes it is  true");
} else {
    console.log("no it is not true");
}

// <, >, <=, >=, =, ==, ===, !=, !==

const  score = 200 
if (score > 100) {
   let power = ' he can fly'
    console.log(`user power : ${power}`);
}
// console.log(`user power : ${power}`);
//if we use var instead of let then we can access the console.log outside the scope which is 
// completely wrong that it should be in scope but var can access global scope 

const balance = 1000
if (balance < 500) {
    console.log("it is less than 700");    
} else if (balance < 600) {
    console.log("it is less than 700");
}
  else if(balance < 6500){
    console.log("it is more than 1000");
}
  else {
    console.log("it is less than 1200");
}

const userloggedIn  = true
const debitCard = true 
const loggedInFromGoogle = false
const loginFromEmail = true 

if (userloggedIn && debitCard) {
    console.log("user is logged in and debit card is available");
}

if (loggedInFromGoogle || loginFromEmail) {
    console.log("u can login ");
    
}

// ++++++++++++++++++++++++++++++++++++++++ SWITCH CASE +++++++++++++++++++++++++++++++++++++++++
                         // BASIC SYNTAX
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("januray");
        break;
    case 2:
        console.log("febrary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("not available");
        break;
}
  
//=+==================================================================================

// FALSY VALUES : "", BIGINT , 0, -0 , false , null, undefined, Nan
// TRUTHY VALUES : " ", {}, [], "FALSE", '0', FUNCTION(){}

userEmail= ""
if (userEmail.length === 0) {
    console.log("Array is empty");
    }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
console.log("object is empty  ");
}

//=+==================================================================================

// nullish coalescing operator (??) : null , undefined 

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

// console.log(val1);

//=+==================================================================================

//ternary operator
// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice>=80 ? console.log("more than 80") : console.log(" less than 80");

