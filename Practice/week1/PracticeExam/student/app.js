const fs = require("fs");
const http = require("http");

let stdId;
let coursesId;

http.createServer((req, res) => {
      let url = new URL(`${req.headers.host}${req.url}`);
      stdId = url.searchParams.get("studentId");
      coursesId = url.searchParams.get("coursesId");

      let data = fs.readFileSync("./student.txt", "utf-8", (err, data) => {
        if (err) throw err;
      });

      data = JSON.parse(data);

      let result ;

       for (let each of data) {
        if (each.studentId == stdId) {
          for (let all of each.courses) {
            if (all.coursesId == coursesId) {
              result = all;
              break;
            }
          }
          break;
        }
      }

    res.end(JSON.stringify(result));

  }).listen(3000, () => {
    console.log("connected on 3000...");
  });
