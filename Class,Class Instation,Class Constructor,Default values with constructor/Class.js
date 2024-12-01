// ----------------------- Class , Class Instation ---------------------------------

// class product {
//     name;
//     price;
//     rating;

//     display() {
//       console.log("displaying the current product");
//     }
//   }

//   const p = new product();
//   console.log(p);
//   p.display()

// ----------------------- Class Constrution defalut values with constroctor ---------------------------------

// class product {
  // name;
  // price;
  // // rating;
  // #rating;

  // constructor(n, p, r) {
  //   console.log("colling the constroctor");
  //   this.name = n;
  //   this.price = p;
  //   this.rating = r;
    // this.#rating = r;

  // }
  // display() {
  //   console.log("this reffers to ", this);
  //   console.log("Disply In Curent Product", this.name, this.price, this.rating);
    // console.log("Disply In Curent Product", this.name, this.price, this.#rating);
//   }
// }
// const p = new product("ipose", 100000, 5);
// console.log(p);
// p.display();
// output :=
// colling the constroctor
// product { name: 'ipose', price: 100000, rating: 5 }
// this reffers to  product { name: 'ipose', price: 100000, rating: 5 }
// Disply In Curent Product ipose 100000 5

// function product(n, p, r) {
//   this.name = n;
//   this.price = p;
//   this.rating = r;
// }
// const p = new product("Mackbook", 1500000, 5);
// console.log(p);
// output := product { name: 'Mackbook', price: 1500000, rating: 5 }

// function product(n, p, r) {
//   this.name = n;
//   this.price = p;
//   this.rating = r;
// }
// const p = new product("Mackbook", 1500000, 5);
// let x = {
//   p: product,
// };
// x.p("airpods", 2000, 5);
// console.log(x);
// output := { p: [Function: product], name: 'airpods', price: 2000, rating: 5 }

// const Product = function(n, p, r) {
//   this.name = n;
//   this.price = p;
//   this.rating = r;
// }
// const p = new Product("Rupesh",4000000000,9000000000);
// console.log(p);
// output := Product { name: 'Rupesh', price: 4000000000, rating: 9000000000 }

// let obj = {
//   x: 10,
//   fun() {
//     console.log(this.x);
//   },
// };
// obj.fun();
// output := 10

// let obj = {
//   x: 10,
//   fun() {
//     y = {
//       gun: () => {
//         console.log(this.x);
//       },
//     };
//     y.gun();
//   },
// };
// obj.fun();
// output := 10

// ----------------------- class Method and propertis with initial value ---------------------------------

// class product {

//     static custom() {
//       console.log("Calling a Static method");
//     }
  
//   }
//   product.custom()
// output := Calling a Static method