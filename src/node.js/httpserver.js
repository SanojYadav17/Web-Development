// // creating HttpServer using http module

// const http = require(`http`);
// const server = http.createServer((req, res) => {
//     res.write("hii I am Sanoj Yadav Student of BTECH CSE");
//     res.end();
// });


// server.listen(4000, () => {
//     console.log('Server running properly');
// });



// const http = require(`http`);

// const server = http.createServer((req, res) => {
//     res.setHeader("content-type", "text/html");
//     res.end(`<h1>Hii I am Sanoj Yadav Student of BTECH CSE</h1>
//         <p>Lucknow, Uttar Pradesh, 226028</p>`);
// });

// server.listen(3000, () => {
//     console.log('Server running properly');
// });


// Passing JSON Data

const http = require("http");

const server1 = http.createServer((req, res) => {
    res.setHeader("content-type", "application/json");

    const obj = {
        name: "Sanoj Yadav",
        age: 21,
        role: "Student",
    }
    res.end(JSON.stringify(obj));
})
server1.listen(4000, () => {
    console.log('Server running properly');
}); 