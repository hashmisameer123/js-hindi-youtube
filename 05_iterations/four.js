const myObject = {
    js: 'javascript',
    py: 'python',
    rb: 'ruby',
    swift: 'swift by apple'
} 

for (const key in myObject) {
    // console.log(key);
    
}

for (const key in myObject) {
    // console.log(`${key} is shortcut of ${myObject[key]}`);
    
}

const programming = ["js","py","rb"]

for (const key in programming) {
    console.log(`key ${key} value is ${programming[key]}`);
    
}



