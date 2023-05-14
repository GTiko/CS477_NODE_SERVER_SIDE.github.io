// 3. Create the route which returns query strings using http GET.
// For example, sending a GET request http://localhost:3000?id=1&&name=abc,
// the response is {id: 1, name: 'abc'}

let http = require("http");
const { url } = require("inspector");

// http.createServer((req, res) => {

//     let url = new URL(`${req.headers.host}/${req.url}`);
//     let params = url.searchParams;
//     let result = `{id: ${params.get("id")}, name: '${params.get("name")}'}`

//     console.log(result)
//     res.end(result);

//   }).listen(3000, () => {
//     console.log("connected on 3000 ...");
//   });

http.createServer((req,res)=>{
  let url = new URL(`${req.headers.host}${req.url}`);
  let obj = {
    name : url.searchParams.get("name"),
    id : url.searchParams.get("id")
  }
  console.log(JSON.stringify(obj))
  res.end(JSON.stringify(obj))
}).listen(3000,()=>{console.log("connected on 3000...")})
