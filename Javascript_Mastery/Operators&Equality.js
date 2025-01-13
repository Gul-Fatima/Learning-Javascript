//------------------Operators and Equality-------------------
//comparision operator compare two value and return value as true or false.
const a = 5;
const b = 2;
console.log(a>b);//true
console.log(a<b);//false
console.log(a==b);//false
console.log(a>=b);//false
console.log(a!=b);//true
console.log(a===b);///strict equality   false
console.log(a!==b);//false

///--------------Strict Equality in JS--------------------
//      === : Comapres values and data types
//      == :  Compares only values, not dt
console.log(2===2);//true
console.log("Hello" === "Hello");//true
console.log(5=='5');//true
console.log(5 === '5') //false 

/*
Good Twins : ===
Evil twins : ==
*/

//console.log(" " == '0')//false
//console.log(0 == '')//true
//console.log(0 == '0')//true
//These unexpected results are due to evil twins
//Therefore usually it is better to use strict equality.

//--------------------------------------------------------------------------------------------------------------------------------------------------------
//Logical operators

//or  ||
//and &&
//not  !





