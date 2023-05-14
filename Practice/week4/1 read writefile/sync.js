const fs = require("fs");

async function writeSync(content){
    new Promise((resolve, reject) => {
        fs.writeSync("./", content, (err)=>console.log(err));
    })
  
}