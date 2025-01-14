//Hold details of an elemnt like a person so his name,age,....
var a = {
    name : 'John',
    age : 12,
    id : 3,
    func_name : function(){
        console.log(`Hello, I am ${name}. My ag is ${age}.` )
    }

}

//Access value 
console.log(a.age);
console.log(a.id);
console.log(a.name);

//How to delete object prop :
var b = {
    name : 'John',
    age : 12,
    id : 3,
    func_name : function(){
        console.log(`Hello, I am ${name}. My ag is ${age}.` )
    }

}
//To delete let's say id:
delete b.id;

