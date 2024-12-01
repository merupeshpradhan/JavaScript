let myHeros = ["thor", "spiderman"];
let dcHeros = ["de", "flash", "superman"];

let heropower = {
  thor: "hammer",
  spiderman: "sling",
  getSpidermanPower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`Hitesh is presnt in all object`);
};

console.log(myHeros.hitesh());
console.log(heropower.hitesh());

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hi`);
};

console.log(myHeros.heyHitesh());
// console.log(heropower.heyHitesh()); //some eror here
// output :-
// Hitesh is presnt in all object
// undefined
// Hitesh is presnt in all object
// undefined
// Hitesh says hi
// undefined

// Inheritance :=
const User = {
  name: "top name",
  email: "top@gmail.ocm",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TAAssistant = {
  makeAssignment: "js Assigment",
  fullTime: true,
  __proto__: TeachingSupport,
};
// console.log(TAAssistant.isAvailable);

// Teacher.__prot0__ = User

Object.setPrototypeOf(TeachingSupport,Teacher);

console.log(TAAssistant.isAvailable);

String.prototype.truelength = function () {
  console.log(`True length is ${this.trim().length}`);
};

"hitesh    ".truelength()
"anurag    ".truelength()

// output :-
// Hitesh is presnt in all object
// undefined
// Hitesh is presnt in all object
// undefined
// Hitesh says hi
// undefined
// false
// True length is 6
// True length is 6
