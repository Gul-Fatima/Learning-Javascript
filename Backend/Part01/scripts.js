// Fundamentals of Js
//arrays and objects
//functions return
//async js coding

var arr = [1,2,3,4]

//foreach   filter find indexOf-----------------------------------------------------------------------------------------------------------------------------------

arr.forEach(function(val){
    console.log(val); //1 then 2 then 3 then 4
})

//map--------------------------------------------------------------------------------------------------------------------------------------------
//returns a new array of same size of existing array
//use case: let i want an array whose each element is twice the value of existing element.  [2,4,6,8]
var newarr = arr.map(function(val){
    return val*2;
})
//calling function
console.log(newarr); //[2,4,6,8]

//filter--------------------------------------------------------------------------------------------------------------------------------------------
//usecase : let we want an arr that have even elements of existing array, i.e array size will not be defined , therefore it returns array according to elemnts(following the specified condition)
var arr2 = arr.filter(function(val){
    if(val%2 == 0){return true;} //when true it auto adds the element to the arr
    else return false;
})
console.log(arr2);

//find--------------------------------------------------------------------------------------------------------------------------------------------
//usecase: return the first occurence of an element, if not found = undefined
var ans = arr.find(function(val){
    if(val===3 ){return val;}
})

//indexOf--------------------------------------------------------------------------------------------------------------------------------------------
var ans2 = arr.indexOf(function(val){
//usecase:returns the index of required value, if not found = -1
    if(val === 4){return ans;}
})



// -----------------------------------OBJECTS --------------------------------------------------------------
let obj1 = {
    name : 'Gul',
    age : 19,
}
//Accessing elements of object
console.log(obj1.age);
console.log(obj1.name);
//or
console.log(obj1['name']);
console.log(obj1['age']); //19
//We can update the valueoutside object if want i.e.
obj1.name = 23;
console.log(obj1['age']); ///23

//To avoid changes, use freeze
Object.freeze(obj1);
obj1.name = 'Fritz'; //will not change value

//length of A function:
arr.length()
/////////////////----------------------------------LENGTH OF A FUNCTION---------------------------------------///////////////////////////////////////
//We can say it equates to the no of params passed, bcz functions are basically objects in Js.
function func(a,b,c,d){
 //code             //len of func = 4
}
