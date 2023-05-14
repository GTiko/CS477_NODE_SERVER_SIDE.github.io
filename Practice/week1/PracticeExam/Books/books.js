const http = require("http");
const fs = require("fs");

http.createServer((req,res)=>{
    if(req.url == "/books" && req.method == "GET"){
      let file = fs.readFileSync(("./books.txt"),"utf-8",(err,data)=>{
            if(err) throw err;
        })
        res.end(file)
    }
    else if(req.url == "/books/topSellers" && req.method == "GET"){
     let file =  fs.readFileSync("./topSeller.txt","utf-8",(err,data)=>{
            if(err) throw err;
        })
        res.end(file);
    }
}).listen(3000,()=>{console.log("connected on 3000...")})