//-----------Difference between var, let, const -------------------------------
/*
OLD JS
    var 
    * function scoped
    * adds itself to window object(add means add to the list of elemnts of window obj , not good)
                      |->  (window(not windows) object conatins elements(functions e.g. alert,console,prompt) which are not the part(feature) of js, but js can access it from window)
NEW JS
    let
    * braces scoped
    * does not add itself to window object.
    
    - const
    * braces scoped
    * does not add itself to window object.
*/
// -----------------Concept of function scoped and braces scoped ---------------------------------

function print(){
    for(var i = 0; i < 5; i++){
        console.log(i);
    }
    console.log(i);
}
//As here 'i' is initialized using var, and var is 'function scoped' that is within function we can access it so on second console.log it would print i = 6

function print(){
    for(let i = 0; i < 5; i++){
        console.log(i);
    }
    console.log(i);
}
//As here 'i' is initialized using let, and let is 'braces scoped' that is within immediate braces{}, so we can not access it so on second console.log it would print err.




