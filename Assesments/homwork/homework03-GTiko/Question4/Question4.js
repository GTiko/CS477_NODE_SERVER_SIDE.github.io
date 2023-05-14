// 4. Create the route which returns body of POST request.
// For example, sending a POST request http://localhost:3000/users/add
// with the body is {first_name: 'thao', last_name: 'vu'},
// the response will be {first_name: 'thao', last_name: 'vu'}.

let http = require("http");

http.createServer((req, res) => {

    if (req.url == "/users/add" && req.method == "POST") {
      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
      });
      res.end("End");
    }
  }).listen(3000, () => {
    console.log("connected on 3000...");
  });
