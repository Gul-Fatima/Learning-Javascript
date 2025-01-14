/*
There is a concept in Js according to which we can use function as a value.
*/
function abcd(param){
    param(); /*Here param is our argument, but while calling function abcd below, we passed a function as paramter rather than some value. Therefore here param is 
               behaving as a function and in the main function if i want i can call this as param() 
               - Now when i call abcd function, it goes to it's declaration in which we are calling param() and param() will print 'hey' */
}

abcd(function(){console.log('hey');})//Calling function : abcd