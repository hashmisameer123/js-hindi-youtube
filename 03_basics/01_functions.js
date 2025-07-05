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



