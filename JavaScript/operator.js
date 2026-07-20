// String concatenation
// let str1 = "Sanoj ";
// let str2 = "Yadav";

// + operator used for concatenation

// console.log("my name is  " + str1 + " " + str2);

// Destructuring

// let array = [1, 2, 3, 4, 5];
// console.log(array[0]); // Output: 1

// push, pop, shift, unshift, length
// array.push(6);
// console.log(array);

// array.pop();
// console.log(array);

// array.shift();
// console.log(array);

// array.unshift(2);
// console.log(array);

// console.log(array.length);

// let obj = {
//     name: "John",
//     age: 30,
//     Role: "Student"
// }


//  Slice and splice
// slice - copy/subset

// let subset = array.slice(1, 4);
// console.log(subset);

// let newsubset = array.splice(1, 2);
// console.log(newsubset);

// map, filter, reduce in array

// let numbers = [1, 2, 3, 4, 5];
// numbers.map((num) => num * num);
// console.log(numbers);

//  Map - size of array remains same, but values are changed
// let numbers = [45, 69, 89];
// let squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers);

// Filter - size of array changes, but values remain same
// let evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

// Reduce - size of array changes, but values remain same
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((total, num) => total * num, 1);
// console.log(sum);


// array destructuring

// let array = [1, 2, 3, 4, 5];

// const [x, y, z, w] = array;
// console.log(x, y, z, w); 

// // object destructuring

// let obj = {
//     name: "John",
//     age: 30,
//     role: "Student"
// };

// const { name, age, role } = obj;
// console.log(name);
// console.log(age);
// console.log(role);



// let obj1 = {
//     name: "Sanoj Yadav",
//     age: 21,
//     gender: "Male",
//     address: {
//         city: "Azamgarh",
//         state: "Uttar Pradesh",
//         "pincode": 276001
//     }
// };
// const { name: name1, age: age1, gender, address: { city, state, pincode } } = obj1;
// console.log(name1);
// console.log(age1);
// console.log(gender);
// console.log(city);
// console.log(state);
// console.log(pincode);

// Spread Operator

let obj2 = {
    name: "Sanoj Yadav",
    age: 21,
    gender: "Male",
}
let obj3 = {
    ...obj2,
    country: "India",
    state: "Uttar Pradesh"
}
console.log(obj3.gender); 