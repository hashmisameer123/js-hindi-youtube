//  for (let i = 0; i <= 10; i++) {
//         const element = i;
//         if(element == 5){
//             console.log("5 is selected");
//         }
//         console.log(element);
        
//  }

// for (let i = 0; i <= 10; i++){
//    console.log(`Outer loop value: ${i}`);
   
//   for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner loop avlue ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

for (let index = 0; index <= 20; index++) {

    if(index == 5){
        console.log("Detected number 5");
        break;
    }
    console.log(`value of i is ${index}`);
    
    
}