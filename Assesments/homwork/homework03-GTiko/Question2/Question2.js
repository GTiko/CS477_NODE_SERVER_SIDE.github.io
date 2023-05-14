//  2. Create the route of “/” which returns 'Hello World' using http GET.
// For example, sending a GET request http://localhost:3000,
// the result is "Hello World"

let http = require("http");

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text");
    if (req.url == "/") {
      res.end("Hello World");
    }
  }).listen(3000, () => {
    console.log("connected on 3000...");
  });

