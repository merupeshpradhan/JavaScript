// function greet() {
//     console.log("Rupesh pradhan");
// }
// greet();

// function greet(x) {
//     console.log(x);
// }
// greet(10);

// function greet(x) {
//     console.log(x+x);
//     return x+x;
// }
// let vlaue = greet(5);
// console.log(vlaue);

// function passMessge() {
//     return "my name is Rupesh";
// }
// let message = passMessge();
// console.log(message);
// let newMessag = message + " Pradhan";
// console.log(newMessag);

// function messge(displye) {
//     console.log(displye);
// }
// messge("Rupesh Pradhan")

// function messge(displye = "Rupesh") {
//     console.log(displye);
// }
// messge("Pradhan rupesh");

// function add(x,y) {
//     return x+y;
// }

// console.log(add(2,3));
// let result = add(2,3);
// console.log(result);

// function numbers([num1,num2,num3,num4]) {
//     return num1+num2+num3+num4;
// }
// let number = [4,6,2,2];
// let result = numbers(number);
// console.log(result);

/////// Number of Parameto /////////

// function sumOfAllParametor() {
//   let sum = 0;
//   for (let index = 0; index < arguments.length; index++)
//     sum += arguments[index];
//   return sum;
// }
// let result = sumOfAllParametor(1, 2, 3, 4, 5);
// console.log(result);



//////////////// Arrow Function /////////////////

//////// -> One parameter and a single return Statment <- ////////

// const square = (x) => x*x;
// console.log(square(2));

//////// -> multiple metor and a single return expression <- ////////

// const sumOfNumber = (x,y,z) => x+y+z;
// console.log(sumOfNumber(4,5,1));

//////// -> multiple metor and a single return expression <- ////////

// const sumOfNumber = (x,y,z) => x+y+z;
// console.log(sumOfNumber(4,5,1));

//////// -> multiple statement in Function expression <- ////////

// const sum = (x,y) => {
//     console.log("Adding",x,"and",y);
//     console.log(`Adding ${x} and ${y}`);
//     return x+y;    
// }
// console.log(sum(1,2));

//////// -> Return an Object <- ////////

// const SumandDiffirence =  (x,y) => ({sum: x+y, differenc: x-y})
// console.log(SumandDiffirence(5,3));



//////////////// Anonymous Function /////////////////

// let x = function () {
//     console.log("rupesh");
// }
// x();

// (function exec() {
//     console.log("Rupesh");
// })();

// (function exec(x) {
//     console.log(x*x);
// })(5);

// let x = function exec() {
//     console.log("rupesh");
// }
// x();



//////////////// Creating Object and manipulating value in object /////////////////

// let obj = {id:12,name:"Rupesh",salery:10000}
// console.log(obj);

// let emp = new Object();
// emp.id = 102;
// emp.name = "Rupesh";
// console.log(emp);

{// (hae nahi)
    // function Emp(i,n,s) {
    //     Emp.id = i;
    //     Emp.name= n;
    //     Emp.salery = s;
    // }
    // const e = new Emp(103,"Rupesh",12000);
    // console.log(e);
    
    // console.log(e.id);
    // console.log(e["name"]);
    
    // Emp['salery'] = 13000;
    // Emp.id = 13;
    // Emp['name'] ='pradhan';
    // console.log(Emp());
}//


//////////////// object methods /////////////////

///// keys
// let emp = {
//     id :101,
//     name : "Rupesh",
//     age : 24
// };
// let keys = Object.keys(emp);
// console.log(keys);

/////Values
// let emp = {
//     id :101,
//     name : "Rupesh",
//     age : 24
// };
// let keys = Object.values(emp);
// console.log(keys);

/////Entries
// let emp = {
//     id :101,
//     name : "Rupesh",
//     age : 24,
//     rupesh : 1
// };
// let keys = Object.entries(emp);
// console.log(keys);

/////Change id
// let emp = {
//     id :104,
//     name : "Rupesh",
//     age : 24
// };
// emp.id = 100;
// console.log(emp);

///// Donot exchange
// let emp = {
//     id :104,
//     name : "Rupesh",
//     age : 24
// };
// Object.freeze(emp)
// emp.id = 60;
// emp.name = "Pradhan";
// console.log(emp);

///// Change item
// let emp = {
//     id :104,
//     name : "Rupesh",
//     age : 24
// };
// Object.seal(emp)
// emp.id = 100;
// console.log(emp);

///// assign

////same output here
// let emp = {
//     id :104,
//     name : "Rupesh",
//     age : 24
// };
// Object.assign({},emp)
// console.log(emp);

////Alga output here
let emp = {
    id :104,
    name : "Rupesh",
    age : 24
};
let a = Object.assign({x:"myname"},emp)
console.log(a);






