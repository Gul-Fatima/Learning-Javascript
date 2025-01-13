// ---------------Execution Control ------------------

/*
Whenever we run function, the function creates an imaginary container of itself containing 3 elements.This container is called execution context.
    1. Variables
    2. Functions inside parent function
    3. Lexical environment of function. (Helps to determine the scope)

*/

function main(){
    var a = 4;
    function sub_func(){
        var b = 12;
    }
}
/*
In above function 'a' can be accessed by main as well as sub_func however as b is in only sub_func so can not be accessed by main.
*/