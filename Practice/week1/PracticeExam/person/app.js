//1
const person = require("./person.js");
person.getName();
person.name = "jack";
person.getName();

//2
// const http = require("http");
// http.createServer((req,res)=>{
//     let url = new URL(`${req.headers.host}${req.url}`)
//     console.log(url.pathname)
//     res.end()
// }).listen(3000)