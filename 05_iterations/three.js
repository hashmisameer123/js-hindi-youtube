const arr =[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}


const greetings = "Hello World"
for (const element of greetings) {
    console.log(`Each char is ${element}`);
    
}

// console.log(greetings);


const map = new Map()

map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")

console.log(map);

for (const key of map) {
    console.log(key);
    
}

for (const [key,value] of map) {
    console.log(key, ':-', value);
    
}