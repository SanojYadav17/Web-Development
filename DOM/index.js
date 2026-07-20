// function change() {
//     let elements = document.getElementById("new");
//     console.log(elements);

//     let element3 = document.getElementsByClassName("new");
//     console.log(element3);

//     let element4 = document.getElementsByTagName("h3");
//     console.log(element4);

// }

// function update() {
//     let element = document.getElementById("new");
//     console.log(element);

//     let element1 = document.getElementsByClassName("new");
//     console.log(element1);

//     let element2 = document.getElementsByTagName("p");
//     console.log(element2);

// }

// // changing text Content
// function update(){
//     let changeText = document.getElementById("new").innerText = "New Heading";
//     console.log("Change text Successful");
// }

// // Changing HTML Tags

// function changeHTML(){
//     let changeHTML = document.getElementsByClassName("IOTBC")[2].innerHTML = "<p>Sanoj Yadav</p>";
//     console.log("Change HTML Successful");
// }

// // Change Style
// function changeStyle(){
//     let changeStyle = document.getElementById("new").style.color = "Purple";
//     console.log("Change Style Successful");

//     let changeStyle1 = document.getElementsByClassName("IOTBC")[1].style.color = "Yellow";
//     console.log("Change Style Successful");
// }

// // Getting Attributes
// function getAttributes() {
//     let getAttr = document.getElementById("new").getAttribute("class");
//     console.log(getAttr);
// }

// // creating new Attributes
// function createAttributes() {
//     let createAttr = document.getElementById("new").setAttribute("class", "CSE-IOTBC");
//     console.log("New Attribute Created");
// }

// // removing Attributes
// function removeAttributes() {
//     let removeAttr = document.getElementById("new").removeAttribute("class");
//     console.log("Attribute Removed");
// }

// // Creating an element
// function addHeading() {
//     let newHeading = document.createElement("h1");
//     newHeading.innerText = "New Heading";
//     document.body.appendChild(newHeading);
// }

// // Creating an image
// function addImage() {
//     let newImage = document.createElement("img");
//     newImage.src = "./apple.jpeg";
//     newImage.alt = "Apple Image";
//     document.body.appendChild(newImage);
// }

// // removing an element
// function removeHeading() {
//     let removeHeading = document.getElementById("new");
//     removeHeading.remove();
// }

// // inline Events (Event in js)
// // Syntax : event.addEventListener("event", functionName);
// const btn = document.getElementById("mainButton");
// btn.addEventListener("click", function() {
//     alert("Button clicked!");
// });

// const button = document.getElementById("doubleClickButton");
// button.addEventListener("dblclick", function() {
//     alert("Button double clicked!");
// });

// const butt = document.getElementById("MouseOverButton");
// butt.addEventListener("mouseover", function() {
//     alert("Mouse Button");
// });


// const butto = document.getElementById("MouseLeaveButton");
// butto.addEventListener("mouseleave", function() {
//     alert("Mouse Button");
// });

// const butn = document.getElementById("MouseMoveButton");
// butn.addEventListener("mousemove", function() {
//     alert("Mouse Button");
// });

// // ES6 Features in javascript

// {
//     let count = 0;
//     count = 1;
//     console.log(count);
// }
// console.log(count); // ReferenceError: count is not defined

//     const count1 = 0;
//     count1 = 1;
//     console.log(count1);
    
// // Named Function
// function add(a, b) {
//     return a + b;
// }
// add(2, 3);

// // Arrow Function

// let Arrow = (a, b) => { return a + b };
// console.log(Arrow(2, 3));

// const sq = (a) => { return a * a };
// console.log(sq(5));


// Callback Function (08/07/2026)

// f2 passed as argunment in f1

// function f1() {

// }

// function f2() {
// }

// f1(f2);
// function greet(name, callback) {
//     console.log(`Hi i am ${name}`);
//     callback();
// }

// function happen() {
//     console.log(`I am a Student of CSE-IOTBC`);

// }
// greet("Sanoj", happen);

// Practice Question

// function checkresult(marks, callback, f3) {
//     if (marks > 40) {
//         console.log("Passed");
//         callback();
//     } else {
//         console.log("Failed");
//         f3();
//     }
// }
// function result() {
//     console.log("Student are passed");
// }
// function f2() {
//     console.log("Student are failed");
// }
// checkresult(30, result, f2);


// Asynchronous Callbacks

// function async() {
//     console.log("I am a Student of CSE-IOTBC");
// }
// setTimeout(async, 10000);

// Practice Question

// function logging(){
//     console.log("Logging");
// }
// setTimeout(logging, 1000);

// function loginsuccessfull() {
//     console.log("Login Successfull");
// }
// setTimeout(loginsuccessfull, -3000);

// function logout() {
//     console.log("Logout");
// }
// setTimeout(logout, 5000);

// callback hell (pyramid of doom)

// setTimeout(() => {
//     console.log("Step 1: Task1 uncomplete.....");
//     setTimeout(() => {
//         console.log("Step 2: Task2 uncomplete.....");
//         setTimeout(() => {
//             console.log("Step 3: Task3 uncomplete.....");
//             setTimeout(() => {
//                 console.log("Step 4: Task4 complete.....");
//             }, 4000);
//         }, 3000);
//     }, 2000);
// }, 1000);
    
// Question Practice  : Student Registration

// setTimeout(() => {
//     console.log("Registering Students.....");
//     setTimeout(() => {
//         console.log("Verify otp.....");
//         setTimeout(() => {
//             console.log("Generate Student Id.....");
//         }, 3000);
//     }, 2000);
// }, 3000);


// function RegisteringStudents(callback) {
//     setTimeout(() => {
//         console.log("Registering Students.....");
//         callback();
//     }, 3000);
// }
// function VerifyOTP(callback) {
//     setTimeout(() => {
//         console.log("OTP Verified.....");
//         callback();
//     }, 4000);
// }
// function GenerateID(callback) {
//     setTimeout(() => {
//         console.log("Generate ID Students.....");
//         callback();
//     }, 2000);
// }

// RegisteringStudents(() => {
//     VerifyOTP(() => {
//         GenerateID(() => {
//         });
//     });
// });

// Promise in javascript

// 3 Stages -----------> 1.pending 2.resolved 3. rejected

// let mypromise = new Promise((resolve, reject) => {
//     let result = true;
//     if (result) {
//         resolve("Promise Resolved");
//     } else {
//         reject("Promise Rejected");
//     }
// })
// mypromise.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });



// then --> promise resolved
// catch --> promise rejected
// finally ---> run whether promise success or fail


// Using promise check weather a number is even or odd also display result
// function checkn(n) {
//     return new Promise((resolved, reject) => {
//         if (n % 2 == 0) {
//             resolved("Number is Even");
//         } else {
//             reject("Number is odd");
//         }
//         })
// }
// checkn(5).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

// Using promise check the transaction through bank is successfull (withdraw, balance)

// function transaction(accountBalance, withdrawAmount) {
//     return new Promise((resolved, reject) => {
//         if (withdrawAmount <= accountBalance) {
//             resolved("Transaction Successfull")
//         } else {
//             reject("Transaction Failed");
//         }
//     })
// }
// transaction(3000, 5000).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

// fetch API in javascript

// fetch("https://jsonplaceholder.typicode.com/photos")
//     .then(result => result.json())
//     .then(data => console.log(data))
//     .catch(err => console.error("error", err));

// Async Await in javascript
    
// introduced in 2017 (ES8)

// async function

// Syntax of async
// async function check() {
//     // return a promise
//     // Asyncronous code
// }

// async function hello() {
//     return "Hello I am a Sanoj Yadav";
// };
// hello().then(result => console.log(result)).catch((error) => console.log(error));

// Await pause the execution of async function until the promise is resolved.....
// Syntax

// const result = await Promise
// Example

function getUserDetails(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 40) {
            resolve("Provide Details");
        } else {
            reject("Access Denied");
        }
    });
}

// asynchronous function showing user details

async function displayUserDetails() {
    try {
        // Await pause the execution until promise resolved
        let result = await getUserDetails(50);
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}