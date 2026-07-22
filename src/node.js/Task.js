const http = require('http');

http.createServer((req, res) => {
    res.setHeader("content-type", "text/html");

    if (req.url === "/") {
        res.write("Home Page....");

    } else if (req.url === "/detail") {
        res.write("Detail Page.....");

    } else if (req.url === "/report") {
        res.write("Report Page.....");

    } else if (req.url === "/login") {
        res.write("Login page.....");

    } else {
        res.write("<h1>404 Page Not Found</h1>");
    }
    res.end();
}).listen(4000, () => {
    console.log("Server is running on port 4000");
}); 