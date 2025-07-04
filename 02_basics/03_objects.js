//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "sam",
    "full name": "sameer hashmi",
    [mySym]: "mykey1",
    age: 20,
    location: "patna",
    email: "sameer1@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "sameer2@microsoft.com"
// Object.freeze(JsUser)
JsUser.email = "sameer2@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


