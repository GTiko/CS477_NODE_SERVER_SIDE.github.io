// 1. Create a https server which is listen to 3000 port.

const https = require("https");
const fs = require("fs")

const options = {
  key: fs.readFileSync('private.key'),
  certificate: fs.readFileSync('certificate.crt')
}

https.createServer(options,(req, res) => {
    res.end("Hello World");
  }).listen(3000, () => {
    console.log("connected on 3000...");
  });
