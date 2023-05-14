const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  fs.createReadStream("./des.jpg").pipe(res);
  // res.end("hi")
}).listen(3000,()=>{console.log("connected on 3000...")})
