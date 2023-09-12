// The http.createServer() method includes request and response parameters which is supplied by Node.js.

// The request object can be used to get information about the current HTTP request e.g. url, request header, and data.

// The response object can be used to send a response for a current HTTP request.

// If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:

const http = require("http");

// Example 1 - Create a server object

// const server = http.createServer((req, res) => {
//   res.end("Hello from the other side");
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listening to the port no 8000");
// });




// Example 2 - Create a server object
const server1 = http
  .createServer((req, res) => {
    setTimeout(() => {
      console.log("request received");
    }, 3000);
    res.end("This is response from the server");
  })
  .listen(8001, "127.0.0.1", () => {
    console.log("Listening to the port no 8001");
  });
