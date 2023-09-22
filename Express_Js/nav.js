// Routing in Express.js

// Routing refers to determining how an application responds to a client request to a particular endpoint,
// which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

// Each route can have one or more handler functions, which are executed when the route is matched.

// Routing and serving Normal Text, HTML, JSON, and array of JSON and Serving HTML File in Express.js

const express = require("express");
const app = express();

// "/" This represent the blank path means home page
// app.get("route",callback(req,res))

app.get("/", function (req, res) {
  // For Normal Text
  // res.send("Hello From the Express");

  // For HTML Text
  //   res.write("<h1>Welcome to my homepage</h1>");
  //   res.write("<h1>Welcome to my homepage 2</h1>");
  //   res.send();

  //   For JSON Text
  // res.send({
  //   id: 1,
  //   name: "Lokesh Singh",
  //   roll : "0902CS201025"
  // });

  //   For array of JSON Text
  //   res.send([
  //     {
  //       id: 1,
  //       name: "Lokesh Singh",
  //       roll : "0902CS201025"
  //     },
  //     {
  //       id: 2,
  //       name: "Akash Singh",
  //       roll : "0902CS201004"
  //     },
  //     {
  //       id: 3,
  //       name: "Durgesh Singh",
  //       roll : "0902CS201017"
  //     },
  //     {
  //       id: 4,
  //       name: "Diwakar Singh",
  //       roll : "0902CS201016"
  //     },
  // ]);

  // For Serving HTML File
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", function (req, res) {
  // res.send("<h1>Welcome to my about page</h1>");
  res.sendFile(__dirname + "/about.html");
});
app.get("/contact", function (req, res) {
  // res.send("<h1>Welcome to my contact page</h1>");
  res.sendFile(__dirname + "/contact.html");
});
app.get("/temp", function (req, res) {
  res.send("<h1>Welcome to my Temp page</h1>");
});


app.listen(2000)
// app.listen(5000, () => {
//   console.log("Listening at port 5000");
// });
