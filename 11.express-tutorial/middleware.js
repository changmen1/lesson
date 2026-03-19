const express = require("express");
const app = express();

//define middleware function
const myFirstMiddleware = (req, res, next) => {
    console.log("第一个中间件将在每个请求时运行");

    next();
};
const myFirstMiddleware2 = (req, res, next) => {
    console.log("第二个中间件将在每个请求时运行");

    next();
};

app.use(myFirstMiddleware, myFirstMiddleware2);

app.get("/", (req, res) => {
    res.send("Home page");
});

app.get("/about", (req, res) => {
    res.send("About page");
});

app.listen(3000, () => {
    console.log(`Server is now running on port 3000`);
});
