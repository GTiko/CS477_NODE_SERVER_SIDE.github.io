const http = require("http");

http.createServer((req,res)=>{
    let url = new URL(`${req.headers.host}${req.url}`);
    let obj = {
        name : url.searchParams.get("name"),
        lName :url.searchParams.get("lName"),
        zip : "52556"
    }
    res.end(JSON.stringify(obj));
}).listen(3000,()=>{console.log("connected on 3000...")})