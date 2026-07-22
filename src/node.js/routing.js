const http = require('http');

const server = http.createServer((req, res) => {
    // res.setHeader("content-type", "text/html");

    if (req.url === "/") {
        res.write("Home Page....");

    } else if (req.url === "/about") {
        res.write("About Page.....");

    } else if (req.url === "/contact") {
        res.write("Contact Page.....");

    } else if (req.url === "/project") { 
        res.write("My Projects");

    } else {
        res.write("<h1>404 Page Not Found</h1>");
    }
    res.end();

}).listen(4000,() => {
    console.log('Server running properly');
})