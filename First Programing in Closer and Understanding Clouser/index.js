// MDN Plus (Cloures)
//example -1
let score = 4;
function three() {
  console.log(score);
}
// three();

//example - 2
function outerFun() {
  let outerVar = "i am sope 1";
  function innerFun() {
    let innerVal = "i am sope 2";
    console.log(outerVar);
  }
  console.log(innerVal);
  innerFun();
}
// outerFun();
/*
output :-
Some Error Therier
*/

//example -3
const myGlobalValue = 0;
function func() {
  const val1 = 1;
  console.log(myGlobalValue);
  function innerOfFunc() {
    const val2 = 2;
    console.log(val2, val1), myGlobalValue;
    function innerofInneFun() {
      const val3 = 3;
      console.log(val3, val2, val1, myGlobalValue);
    }
    innerofInneFun();
  }
  innerOfFunc();
}
// func();
/*
output :-
0
2 1
3 2 1 0*/

//-------------------- Closer --------------------------

//example - 1
function superFunc() {
  let outervalue = "I am Outer";
  function minorFun() {
    console.log(outervalue);
  }
  minorFun();
}
// superFunc();

//example - 2
const errorMessage = "File not Found";
setTimeout(function callBack() {
  console.log(errorMessage);
}, 1000);

/*
output :-
1 second then out put is come : File not Found */

//example - 2
let pageCount = 0;
const items = [2, 4, 5, 7, 8];
items.forEach(function iterator(num) {
    pageCount++
    console.log(num);
})
console.log("page Copunt ",pageCount);
