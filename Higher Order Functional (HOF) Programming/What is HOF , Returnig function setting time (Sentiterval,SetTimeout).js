// Example 1

// const powerTwo = (n) =>{
//     return n ** 2;
// }

// function powerCube(powerTwo,n) {
//     return powerTwo(n) * n;
// }  

// console.log(powerCube(powerTwo,3));


// Example 2

// function sayHello (){
//     return () =>{
//         console.log("Hello Rupesh"); 
//     }
// }

// let guessValue = sayHello();
// console.log(guessValue);
// guessValue();


// Example 3

// const higherOrder = n =>{
//     const oneFun = m =>{
//         const twoFun = p =>{
//             return n+m+p ;
//         }
//         return twoFun;
//     }
//     return oneFun;
// }

// console.log(higherOrder(2)(3)(4));


// Example 4

// const myNumes = [2,3,4,5];

// const sumArray = arr => {
//     let total = 0
//     arr.forEach(function(element) {
//         total += element
//     });
//     return total
// }

// console.log(sumArray(myNumes));


// Example 5

const myNumes = [2,3,4,5];

function oneMoreHello() {
    console.log("Hello Rupesh !");
}
// setInterval(oneMoreHello,1000)
setTimeout(oneMoreHello,2000)