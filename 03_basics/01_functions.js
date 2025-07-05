// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,4)

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result
// }

// const result = addTwoNumbers(5,7)
// console.log(result);


function loginUser(username){
    return `${username} just logged in`
}

// console.log(loginUser("sam"))


function loginUser(username){
    if(username === undefined){
        console.log("PLease enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUser())


function loginUser(username = "sam"){
    if(!username){
        console.log("PLease enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUser("hash"))


const user={
    username: "sam",
    price: 200
}

// function handleObject(anyObject){
//     console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`);
    
// }

// handleObject(user)

// const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[4]
}
// console.log(returnSecondValue(myNewArray));

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
    // console.log(website);
    
}
// console.log(username);
