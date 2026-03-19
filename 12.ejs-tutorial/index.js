const express = require("express");
const path = require("path");

const app = express();

//set the view engine as ejs
app.set("view engine", "ejs");

//set the directory for the views
app.set("views", path.join(__dirname, "views"));

const products = [
    {
        id: 1,
        title: "李瑶 1",
    },
    {
        id: 2,
        title: "李瑶 2",
    },
    {
        id: 3,
        title: "李瑶 3",
    },
];

app.get("/", (req, res) => {
    res.render("home", { title: "Home", products: products });
});

const port = 3000;

app.listen(port, () => {
    console.log("server is running");
});