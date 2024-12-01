// example - 1
// function h(x, fn) {
//   console.log(x * x);
//   fn();
// }
// h(10, function () {
//   console.log("Done with callbck");
// });

/* Output :-
 100
 Done with callbck
*/

// example - 2

function h(x, fn) {
  fn(x * x);
}
function exec(n) {
  console.log("sequare value is ", n);
}

// h(10, exec);

/* Output :-
sequare value is  100
*/

// example - 3

// setTimeout(function f(arams) {
//   console.log("timer done");
// },3000);

/* Output :-
timer done
*/

// example - 4

// console.log("start");

// setTimeout(function f(arams) {
//   console.log("timer done");
// }, 3000);

// console.log("end");

/* Output :-
start
end
timer done
*/

// example - 5

console.log("start");

setTimeout(function f(arams) {
  console.log("timer done");
}, 3000);

for (let i = 0; i < 1000000; i++) {
  console.log(i);
}
console.log("end");

/* Output :-
start
end
timer done
*/
