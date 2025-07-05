const user={
    username: "sam",
    price: 200
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`);
    
}

handleObject(user)

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[4]
}
console.log(returnSecondValue(myNewArray));

let a = 300

if (true){
    let a = 10
    const b = 20
    console.log("INNER:", a);
}
console.log(a);


if(true){
    const username = "sam"
    if(username === "sam"){
        const website = " utube"
        console.log(username + website);
        
    }
    console.log(website);
    
}
console.log(username);