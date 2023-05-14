const http = require("http");
const fs = require("fs");

http.createServer((req,res)=>{
    let html = fs.readFileSync("./index.html","utf-8");
    html = html.replace('{Message}', 'Mesiye Love');
    res.end(html);
}).listen(3000,()=>{console.log("connected on 3000...")});