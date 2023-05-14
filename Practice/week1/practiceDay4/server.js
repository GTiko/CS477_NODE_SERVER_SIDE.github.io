//1
// const http = require("http");
// http.createServer((req,res)=>{
//     if(req.url == "/" && req.method == "GET"){
//         res.write("Hello World!");
//         res.end();
//     }
// }).listen(3000,()=>{console.log("connected on 3000...")})

//2     get value from url

// const http = require("http");
// const querystring = require('querystring');

// http.createServer((req,res)=>{
//     let url = new URL(`${req.headers.host}${req.url}`);
//     let params = url.searchParams;
//     console.log(querystring.parse(`${params}`))
//     res.end(params.toString())
// }).listen(3000,()=>{console.log("connected on 3000...")});

//3     POST
// const http = require("http");
// http.createServer((req, res) => {
//     if (req.url == "/users/add" && req.method == "POST") {
//       const body = [];
//       req.on("data", (chunk) => {
//         body.push(chunk);
//       });
//       req.on("end", () => {
//         const parsedBody = Buffer.concat(body).toString();
//         console.log(parsedBody);
//       });
//       res.end("Done");
//     }
//     res.end()
//   }).listen(3000, () => {
//     console.log("connected on 3000...");
//   });
