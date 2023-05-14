let fileName = "q.jpg";
let fs = require("fs");
const http = require("http");
const server = http.createServer();

function fileSize(fileName) {
  fs.stat(fileName, (err, fileStats) => {
    if (err) {
      console.log(err);
    } else {
      console.log(fileStats.size);
      if (fileStats.size > 300000) {
        server.on("request", function (req, res) {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.write(`Big image. size of ${((fileStats.size)/1000000).toFixed(2)} MB`);
          res.end();
        });
        server.listen(3000, () => console.log("connected to 3000..."));
      }
      return fileStats.size;
    }
  });
}
fileSize(fileName);
