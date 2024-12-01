class product {
  name;
  price;
  rating;

  constructor(n, p, r) {
    console.log("colling the constroctor");
    this.name = n;
    this.price = p;
    this.rating = r;
  }
  display() {
    console.log("this reffers to ", this);
    console.log("Disply In Curent Product", this.name, this.price, this.rating);
  }
}
const p = new product("ipose", 100000, 5);
console.log(p);
p.display();