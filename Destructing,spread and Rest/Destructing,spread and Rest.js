// const oneArray = [1,2,3,4]
// const twoArray = [5,6,7,8]
// const threeArray = oneArray.concat(twoArray)
// console.log(threeArray);
// output :=
// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
// ]

// const threeArray = [oneArray,twoArray]
// console.log(threeArray);
// output := [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]

// const threeArray = [...oneArray,...twoArray]
// console.log(threeArray);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function manyArgument() {
//   let args = Array.from(arguments);
//   let finalArr = args.map((e) => e)
//   let finalArr = args.map((e) => e*2)
//   console.log(finalArr);
// }
// output := [ 1, 2, 3 ]
// [
//   1, 2, 3, 4,
//   5, 6, 7
// ]

//REST
// function manyArgument() {
//   console.log(typeof arguments);
//   let args = Array.from(arguments);
//   let finalArr = args.map((e) => e)
//   let finalArr = args.map((e) => e*2)
//   console.log(finalArr);
// }

// function manyArgumentv2(...args) {
//   console.log(typeof arguments);
// let finallArr = args.map(e => e)
// console.log(finallArr);
// }

// manyArgument(1, 2, 3);
// manyArgumentv2(1, 2, 3);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let emptySet = new Set();
// console.log(emptySet.size);

// let myArray = [1,2,3,4]
// let newSet = new Set(myArray);
// console.log(newSet);

// newSet.add(2);
// console.log(newSet);

// newSet.clear()
// console.log(newSet); 
// output :=
// Set(4) { 1, 2, 3, 4 }
// Set(4) { 1, 2, 3, 4 }
// Set(0) {}


// Set Difference
// function setDifference(setA,setB){
//     return new Set([...setA].filter(el => !setB.has(el)))
// }

/// Map 

let map = new Map();
// console.log(map.size);

let arr = [
    [1,"Rupesh"],
    [2,"Pradhan"],
    [3,"Bhalubahal"],
    [4,"Ardabahal"],
]

arr.map((arryItem) => map.set(arryItem[0],arryItem[1]))


