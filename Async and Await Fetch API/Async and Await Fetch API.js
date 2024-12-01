// Example - 1
// function creatPromis() {
//   return new Promise(function exec(resleve, reset) {
//     setTimeout(function f() {
//       console.log("timer done");
//       resleve(10);
//     }, 3000);
//   });
// }

// async function consume() {
//   console.log("inside function");
//   const response = await creatPromis();
//   console.log("respone is ", response);
// }
// console.log("start");
// consume();
// console.log("end");

/* Output :-
start
inside function
end
timer done
respone is  10
*/

// Example - 2
function creatPromis() {
  return new Promise(function exec(resleve, reject) {
    setTimeout(function f() {
      console.log("timer done");
      reject(10);
    }, 3000);
  });
}

async function consume() {
  try {
    console.log("inside function");
    const response = await creatPromis();
    const response1 = await creatPromis();
    console.log("respone is ", response);
  } catch (err) {
    console.log("handdled", err);
  }
}
console.log("start");
consume();
console.log("end");

/* Output :-
start
inside function
end
timer done
handdled 10
*/
