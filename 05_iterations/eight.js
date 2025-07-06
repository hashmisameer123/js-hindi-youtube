const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
    
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)
 console.log(myTotal);
 

const shoppingCart = [
    {
        itemName: "Brush",
        price: 100
    },
    {
        itemName: "shoes",
        price: 9100
    },
    {
        itemName: "shirt",
        price: 1000
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)

console.log(priceToPay);
