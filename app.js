const express = require('express');
const app = express();
app.use(express.static('public')); // configure express to use "public" as the directory for static content

//routes
app.get("/", (request, response) => {
    response.sendFile(__dirname + '/views/home-page.html');
});

app.get("/about", (request, response) => {
    response.sendFile(__dirname + '/views/about-page.html');
});

app.get("/gallery", (request, response) => {
    response.sendFile(__dirname + '/views/gallery-page.html');
});

app.get("/works", (request, response) => {
    response.sendFile(__dirname + '/views/works-page.html');
});



app.listen(3000, () => console.log("express app listening in port 3000"));

