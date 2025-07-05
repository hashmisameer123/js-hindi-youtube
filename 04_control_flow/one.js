const score = 200

// if(score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

const balance = 1000

// if(balance < 500){
//     console.log("les than");
// }else if(balance < 750){
//     console.log("less than 750");
// } else if(balance <900){
//     console.log("less than 900");
// }else{
//     console.log("greater than 1000");
// }

const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard) {
    console.log("Allow to buy course"); 
}

const loggedInFromGoogle = false
const loggedInFromEmial = true

if(loggedInFromGoogle || loggedInFromEmial){
    console.log("user logged in");
    
}