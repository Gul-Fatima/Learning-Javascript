var a = [1,2,3,4,5]
var b = [...a] // ... is a spread operator, here ...a copies whole list a to list b. Here b = [1,2,3,4,5]

/*
Now if i do b.pop(), b will become [1,2,3,4] while a remains [1,2,3,4,5]

If I have made var a = [1,2,3,4,5] 
               and b = a;
And then done b.pop(), then both list a and b had become [1,2,3,4]
*/

//Copying objects:
var obj = {
    name : 'Harsh',
    age : 21
}

//Copy
var copyobj = {...obj};