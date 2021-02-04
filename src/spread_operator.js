// ...

// import { ControlCameraTwoTone } from "@material-ui/icons";

// array , object, iterable 

// ES6 

// => expand iterable things to individual elements

// => used to make shallow copies of js objects

var arr = [10,20,30,40]; // 

console.log(...arr);

var arr1 = [2,3,4]; 

arr1 = [1,...arr1]
console.log(arr1);
// inserting the array 
var arr2 = [5,6, ...arr1, 7]

var arr3 = [...arr1]
console.log(arr3);

// Array to function arguments

function person(fname, lname, city){

}

var pers = ['Divyansh', 'Dixit', 'kanpur'];

person(...pers) // (Divyansh, Dixit, kanpur)

function mul(num1, num2, num3){
    return num1*num2*num3;
}

console.log(mul(1,2,3));
console.log(mul(...arr1));

// Minimum value in the array :- [10,20,12,1]

Math.max( ...arr1)

// object
var obj = {
    name: 'Divyansh'
}



console.log({...obj,name:'Abhishek'});
