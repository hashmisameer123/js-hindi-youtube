// -----------------datypes summary----------------------

const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
console.log(typeof id);        //symbol

console.log(typeof anotherId);    ///symbol


const bigNumber = 3342433423442353423423n;

console.log(typeof bigNumber);      //bigInt

let Array = ['sam', 'has', 'ayan', 'arsalan']
console.log(typeof Array);   //object

let objects = {
    name: 'sam',
    age: '22'
}

console.log(typeof objects);   //object



let myfunction = function(){
    console.log("Hello");
}

console.log(typeof myfunction);  //function


