//Create your module here using fs modules
const fs = require("fs");
const path = require("path");

let saveFileSync = function (fileName, content) {
  fs.writeFileSync(path.join("./data", fileName), content, (err, data) => {
    if (err) console.log("error");
    console.log(data);
  });
};

let readFileSync = function (fileName) {
  let data = fs.readFileSync(
    path.join("./data", fileName),
    "utf-8",
    (error, data) => {
      if (error) console.log(error);
      console.log(data);
    }
  );
  return data;
};

// let saveFile = function (fileName, content) {
//     fs.writeFileSync(path.join("./data", fileName), content, (err, data) => {
//       if (err) console.log("error");
//       console.log(data);
//     });
//   };

async function saveFile(fileName, content) {
  const filePath = path.join("./data", fileName);
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

module.exports = { saveFileSync, readFileSync, saveFile };
