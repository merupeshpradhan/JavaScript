let arr = [2, 3, 4];
// arr.forEach(function(element,index,arr){
//     console.log(index,element,arr);

// })

// arr.forEach((element,index,arr)=>{
//     console.log("Arrow : ",index,element,arr);
// })

// const heros = ["nagraj","doya","dhruv","maniraj"];
// heros.forEach((el)=>{
//     console.log(el.toUpperCase());
// })

// arr.map(function(element,index,arr){
//     console.log(element,index,arr);
// })

// heros.map(function(element,index,arr){
//     console.log(element,index,arr);
// })

// heros.map((h) => console.log(h.toUpperCase()))

//fiter
// const heros = ["nagraj","doya","dhruv","maniraj"];

// console.log(heros);
// const herosWithRaj = heros.filter((h) =>{
//    return h.endsWith('raj')
// })
// console.log(herosWithRaj);

//Shoping Cart

// const cartBill = [20, 30, 50];
// const sumcumOfCartBill = cartBill.reduce((prev,curr) => prev + curr,0)
// console.log(sumcumOfCartBill);

// const gameScore = [200,300,310,230,150];
//check if all values are numbers
// console.log(typeof gameScore[1]);

// const gameScoreCheck = gameScore.every((v)=> typeof v =="number")
// console.log(" Check : ",gameScoreCheck);

//Find score above 200

const gameScore = [200,250,310,250,150]
const above200 = gameScore.find((score) => score > 200)
console.log(above200);
