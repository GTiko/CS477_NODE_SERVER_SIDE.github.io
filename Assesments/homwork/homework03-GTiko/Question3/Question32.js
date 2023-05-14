// 3. Create the route which returns query strings using http GET.
// For example, sending a GET request http://localhost:3000?id=1&&name=abc,
// the response is {id: 1, name: 'abc'}

let http = require("http");
const querystring = require('querystring');

http.createServer((req, res) => {
    let url = new URL(`${req.headers.host}/${req.url}`);
    let params = url.searchParams;

    const result1 = querystring.stringify({
      id: params.get("id"),
      name: params.get("name")
    });

    const result2 = querystring.parse(result1);

    console.log(JSON.stringify(result2))

    res.end(JSON.stringify(result2));

  }).listen(3000, () => {
    console.log("connected on 3000...");
  });
