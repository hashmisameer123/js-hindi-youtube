const user = {
    username: "sam",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        
    }
}

user.welcomeMessage()
user.username  = "hash"
user.welcomeMessage()

console.log(this);


function chil(){
    let useranme = "sam"
    console.log(this.username);
    
}

chil()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3,4));
