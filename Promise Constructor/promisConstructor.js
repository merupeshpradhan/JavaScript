// Example - 1
// function createPromis() {
//   return new Promise(function exec(resovlve, reject) {
//     setTimeout(function () {
//       console.log("timer Done");
//       reject("done");
//     }, 3000);
//   });
// }
// console.log("start");
// let x = createPromis();
// console.log("got a new promise");

// x.then(function f(value) {
//   console.log("promis done ", value);
// }).catch(function g(value) {
//   console.log("handled", value);
// });
// console.log("end");

// for (let i = 0; i < 100000000; i++) {
  //some code
// }

/* Output :-
start
got a new promise
end
timer Done
handled done
*/

// Example - 2
function createPromis() {
  return new Promise(function exec(resovlve, reject) {
    setTimeout(function () {
      console.log("timer Done");
        resovlve(10);
    }, 3000);
  });
}
console.log("start");
let x = createPromis();
console.log("got a new promise");

x.then(function f(value) {
  console.log("promis done ", value);
}).catch(function g(value) {
  console.log("handled", value);
});
console.log("end");

for (let i = 0; i < 100000000; i++) {
  //some code
}

/* Output :-
start
got a new promise
end
timer Done
promis done  10
*/