// const tinderUser = new Object()

const tinderUser = {}


tinderUser.id = 1
tinderUser.name = "sam"
tinderUser.isLoggedIn = false


// console.log(tinderUser);


const regularUser = {
    email: "sam1@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sam",
            lastname: "hash"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1,obj2,obj4)

const obj3 ={...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));

const course = {
    coursename: "js",
    price: "9000",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course
console.log(instructor);
