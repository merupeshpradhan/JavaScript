// ----------------------- Getter and Setter ---------------------------------

// class product {
//   #rating;
//   constructor(n, p, r) {
//     console.log("colling the constroctor");
//     this.#rating = r;
//   }
//   getRating() {
//     console.log(this.#rating);
//   }
//   setRating(r) {
//     if (r < 0) return;
//     this.#rating = r;
//   }
// }
// const p = new product("ipose", 100000, 5);
// p.setRating(10);
// p.getRating();
// output :=
// colling the constroctor
// 10

// class complexNumber {
//   #real;
//   #image;
//   constructor(r, i) {
//     this.#real = r;
//     this.#image = i;
//   }
//   display() {
//     console.log(this.#real, "+i", this.#image);
//   }
//   get real() {
//     return this.#real;
//   }
//   get image() {
//     return this.#image;
//   }
//   addComplexNumber(c) {
//     this.#real += c.real;
//     this.#image += c.image;
//   }
// }

// const c1 = new complexNumber(2, 3);
// c1.display();
// const c2 = new complexNumber(4, 5);
// c1.addComplexNumber(c2);
// c1.display();
// output :=
// 2 +i 3
// 6 +i 8