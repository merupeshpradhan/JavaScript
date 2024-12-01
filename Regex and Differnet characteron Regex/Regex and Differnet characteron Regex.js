let pattern = 'pw';

let regExOne = new RegExp(pattern)
let flag = 'gi'
let regExTwo = new RegExp(pattern,flag)
let regExThree = /pw/gi
const strTochekc = "pw is growing at a rapid speed and recently they are working on pwskills to create skill based PwContent"
const result = regExThree.test(strTochekc)
console.log(result);
//output :- true or false

const anotherResult = strTochekc.match(regExThree)
console.log(anotherResult);
//output :- [ 'pw', 'pw', 'Pw' ]

const oneMoreResult = strTochekc.replace(regExThree,'p-w')
console.log(oneMoreResult);
//output :-  p-w is growing at a rapid speed and recently they are working on p-wskills to create skill based p-wContent

// const webUrl = "https://pwskills.com/rupesh%20pradhan"
// const useablUrl = webUrl.replace(/%20/,'-')
// console.log(useablUrl);
//output :- https://pwskills.com/rupesh-pradhan

const webUrl = "https://pwskills.com/rupesh%375pradhan"
// const useablUrl = webUrl.replace(/%\d0/,'-')
// const useablUrl = webUrl.replace(/%\d\d/,'-')
const useablUrl = webUrl.replace(/%\d\d\d/,'-')
console.log(useablUrl);