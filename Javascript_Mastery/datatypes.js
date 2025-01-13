// ----------------------DATA TYPES----------------------------//

//STRING:
console.log('Hello,World!');

const exString = 'Hello, World';
const singleQuotes = 'Hello ';
const doubleQuotes = "Hello!!";
const backTicks = `Hello!!!`; //backticks provide extended functionality, they allow us to embed variables and expressio into strings by wrapping them into ${}
const name = 'John';
const bT=  `Hello, ${name}`;
console.log(bT);
console.log(typeof bT);     //to find the data type use function : typeof var_name
const ab =  `2+2`; // o/p = is string data type

//Numbers/Integers
const wholeNo = 5;
const decNo = 0.3;
const first = 10;
const second = 5;
const resultNo = first + second; // 15
const div = second/first; //0.5
const ans = name/first; //Nan (Not a number) bcz string/int, but if use typeof function : number (bcz Nan is of dt: number) 
const a =  `${2+2}`; // o/p = 4, int datatype

//Boolean
const x = true;
const y = false;
const age = 20;
if(age > 12); // true

//Null
// it has value null, it doesn't belong to any of the data type above(object)

//Undefined
//a variable not been assigned any value is called undefined
let q;
let p = undefined; // it is not a standard,it is actually a variable w/o value
console.log(q); ///undefined
console.log(typeof q); ///undefined

//Object
const person = {
    Name : 'Tom',
    Age : 44,
}
console.log(person.Age); //44
console.log(person.Name); //Tom
console.log(typeof person); //object
console.log(typeof person.Name); //string
console.log(typeof person.Age); //int
//an object of class Date
const date = new Date();
console.log(date); //gives the current date


//Array
const arr = [1,2,3,4];
console.log(arr); //prints whole arr
console.log(typeof arr); //object


//----------Statically and dynamically typed------------------------//
let msg = 'Hello,World!';
console.log(typeof msg);  // string
msg = 5;
console.log(typeof msg);  // number
//but 
const message = 'Hello,World!'; //----this will give err bcz one time dt defined as const can not be modified.
console.log(typeof msg);  // string
msg = 5;
console.log(typeof msg);  // number

//JavaScript is dynamically typed.


