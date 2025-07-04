// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,12,23,5, 3)
// console.log(myCreatedDate.toString());

// console.log(myCreatedDate.getTime());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth());
console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
    weekday: "long",
})
