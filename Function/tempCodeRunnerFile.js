p = {
    id :104,
    name : "Rupesh",
    age : 24
};
Object.freeze(emp)
emp.id = 60;
emp.name = "Pradhan";
console.log(emp);