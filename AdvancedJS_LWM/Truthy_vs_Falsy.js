/*
Whatever we write in Js, it can be categorized into two things i.e truthy and falsy.

- Falsy values : 0, false, undefined, null, NaN, document.all
- Truthy Values: All the values except falsy are truthy.
*/

if(-1){
    console.log('Hello, World')
}else{
    console.log('False');
}
// Here -1 is regarded as truthy, if block will run.
if(null){
    console.log('Hello, World')
}else{
    console.log('False');
}
//Here else block will run as null => falsy