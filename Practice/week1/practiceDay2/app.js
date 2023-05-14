//0
// const test0 = require("./2calculate/result")
// console.log(test0.add(1,2))
// console.log(test0.difference(5,2))
// console.log(test0.product(3,2))
// console.log(test0.divide(100,10))

//1
// const test1 = require("./2calculate/result")
// console.log(test1.add(1,2))

//2
// const getName = require("./3pattern/pattern")
// getName.getName()

//3     export class
// const std = require("./class/student")
// let std1 = new std("Mesiye");
// let std2 = new std("Judy")

// std2.setName("Maya")

// console.log(std1.getName())
// console.log(std2.getName())

//4     util
// const util = require("util");
// const sayHi = util.format("Hi, %s ","Mesiye","123")
// console.log(sayHi)

//5     util
// function testUtil(){
//     const myUtil = require("./5Util/myUtil");
//     let res = myUtil.convertDate("2023",12,24);
//     console.log(res)//printed : 2023-12-24
// }
// testUtil();

//6     Buffer
// function testBuffer(){
//     const increaseOne = require("./6Buffer/muBuffer")
//     const res = increaseOne("123");
//     console.log(res)    //printed: 234
// }
// testBuffer()

//7         path
// const path = require("path");
// console.log(path.dirname("./class/student.js"))

//8         path
// const path = require("path")
// let name = "Mesiye"
// console.log(path.join("/","users",name,"note.txt"))

//9         fs Module  readFile

// const fs = require("fs");
// const path = require("path");

// const greet = fs.readFileSync("./greet.txt", "utf-8"); //or
// console.log(greet);

//  OR

// fs.readFile(path.join("./", "greet.txt"),"utf-8",
//     function (err, data) {
//         console.log(data)
//     }
// );
// console.log("Done!");

//10        fs Module writeFile

// const path = require("path");
// const fs = require("fs");

// fs.writeFile(path.join("./","greet.txt"),"Mesiye",(err)=>{
//     if(err) throw err;
//     console.log("Done!")
// })

//11        Stream

// const fs = require("fs");
// const path = require("path");

// const readable = fs.createReadStream(path.join("./", "card.jpg"), {
//   highWaterMark: 16 * 360,
// });

// const writable = fs.createWriteStream("./des.jpg")

// readable.on("data", function (chunk) {
//   console.log(chunk.length);
//   writable.write(chunk);
// });

//      OR

//12
// const fs = require("fs");
// const path = require("path");

// const readable = fs.createReadStream(path.join("./", "card.jpg"));
// const writable = fs.createWriteStream("./des.jpg")

// readable.pipe(writable)

//13        Zlib

// const fs = require('fs');
// const zlib = require('zlib');
// const path = require('path');
// const gzip = zlib.createGzip();
// const readable = fs.createReadStream(path.join("./", 'greet.txt'));
// const compressed = fs.createWriteStream(path.join("./", 'destination.txt.gz'));
// readable.pipe(gzip).pipe(compressed);

// 14       moment
// const moment = require("moment")
// console.log(moment().format("LLLL"))

//15        Http

// const fs = require("http");
// const http = require("http");

// http.createServer((req,res)=>{
//     // res.setHeader("content-type","text/html");
//     res.write(`<html>`);
//     res.write(`<head>
//                     <body>
//                         <h1>Mesiye</h1>
//                     </body>
//               </head>`);
//     res.write(`</html>`);
//     res.end();
// }).listen(3000,()=>{console.log("connected on 3000...")})

//16        URL

// const http = require("http");

// http
//   .createServer((req, res) => {
//     let url = req.url;
//     console.log(url);
//     if (url === "/") {
//       res.write("<html>");
//       res.write("<head><title>Enter Message</title></head>");
//       res.write(
//         '<body><form action="/messsage" method="POST">Enter Message: <input name="message"><button type="submit">Send</button></form></body>'
//       );
//       res.write("</html>");
//       res.end();
//     } else if (url === "/messsage" && req.method === "POST") {
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
//   })
//   .listen(3000, () => {
//     console.log("connected on 3000...");
//   });
