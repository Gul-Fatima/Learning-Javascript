const age = 18;
if(age >= 18){
    console.log('You can register');
}else if(age === 18){
    console.log('You may register');
}else{
    console.log('You can not');
}

//-----------------------------------loops----------------------------
//While loops:
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}
//Do While loop:
do{
    console.log(i);
    i++;
}while(i < 4)

//For - loop
for(let i = 0 ; i < 10 ; i++){
    console.log(i);
}

//For Each loop, works only for array:
var a = [1,2,3,4,5,6,7,8];
a.forEach(function(val){
    console.log(val+2);
})  //The changes made through forEach loop are temporary. Any changes made through it don't affect the actual array.

//For in : use to loop over 'objects'
var obj = {
    Name : 'Tom',
    Age : 21,
    City : 'Karachi'
}
for (var key in obj){
    console.log(key); // output : Name, Age, City
    console.log(obj[key]) //output: Tom, 21, Karachi
    console.log(key , obj[key]); //output : print both key and value
}