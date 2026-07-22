// // HTTP - GET - USER DETAIL FETCHING
// // POST - USER DETAIL INSERTION
// // PUT - USER DETAIL UPDATION
// // DELETE - USER DETAIL DELETION
// // PATCH - USER DETAIL PARTIAL UPDATION

const express = require("express");

const app = express();
const PORT = 4000;

// app.get("/", (req, res) => {
//     res.send("Home page....");
// })
// app.get("/about", (req, res) => {
//     res.send("About page....");
// })
// app.get("/contact", (req, res) => {
//     res.send("Contact page....");
// })
// app.get("/project", (req, res) => {
//     res.send("My Projects");
    
// });
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const userRoutes = require("./routes/userRoute");
// const productRoutes = require("./routes/productRoutes");

app.use("/users", userRoutes);
// app.use("/products", productRoutes);

app.listen(4000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});