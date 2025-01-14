var arr = [1,2,3,4,5,6,7];

arr[0]; //1
arr[1]; //2

//-----Array functions -----------

arr.push(8); //add element at last index
arr.pop(); //delete last index element
arr.unshift(4); //add element at start
arr.shift(); //remmove element from start
arr.splice(2,1) //delete 1 elemnt form 2 index i.e 3
arr.splice(2,3) //delete 3 elemnt form 2 index i.e 3,4,5


//----------------------How Arrays are created bts-------------------------
/*
If we print typeof arr(*above), output will be object rather than array. Because Js by default convert it into object like :
Coded:
var arr = [1,2,3,5];
At the backend:
arr = {
    0 : 1,
    1 : 2,
    2 : 3,
    3 : 5
}
    So to find out what is array and what is object rather use function : arr_name.isArray()
*/
