let name = "Sanoj Yadav";
let age = 22;
let role = "Full Stack Web Developer";

function add(a, b) {
    return a + b;
}

let obj = {
    name,
    age,
    role
};

console.log(add(10, 20));
console.log(obj);

module.exports = { add, name, age, role, obj };