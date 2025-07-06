// const coding = ["js","ruby", "java","python"]

// const values = coding.forEach ((item) => {
//     console.log(item);
    
// })

// console.log(values);

// const myNums = [1,2,3,4,5,6,7,8,9]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);


// const newNums = myNums.filter( (num) => { 
//     return num > 4})
// console.log(newNums);

// const newNums = []

// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
    {
        title: "safe",
        genre: "philosophy",
        publish: "2001"
    },
    {
        title: "dark",
        genre: "mystery",
        publish: "1990"
    },
    {
        title: "cold blood",
        genre: "horror",
        publish: "2010"
    },
    {
        title: "wild",
        genre: "greenery",
        publish: "2010"
    }
]

let userBooks = books.filter((bk) => bk.genre === 'mystery')

userBooks = books.filter((bk) => {
    return bk.genre === "horror" && bk.publish >=2010
})
console.log(userBooks);
