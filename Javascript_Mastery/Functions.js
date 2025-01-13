/*block of code to perform task
    - a function call
    -a function declaration
*/

//--------------------------------------------------func dec----------------------------------------------------
function func_name(x){
    console.log(2*x);
    return x*x;
}

//---------------------------------
const name = function(params){
    //code
}

//-----------Arrow functions--------------
const n = (params)=>{
    //code
}//don't have 'this' keyword

//another way
const sq = (y) => y*y;
const ans = sq(3);
console.log(ans); //9

//-----------------------------------------func call -------------------------------------------------------------

//func call
// func_name(4); //o/p = 8 , it will only execute the console log , not return for return we have to save it in variable i..e
let y = func_name(8);
console.log(y); // 64

//Every function in js returns undefined unless otherwise defined.