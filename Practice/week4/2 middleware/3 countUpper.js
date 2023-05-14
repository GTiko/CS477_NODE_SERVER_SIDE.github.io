const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
app.use(express.json());

app.listen(3000, console.log("3000..."));

app.get("/count", (req, res)=>{
    try {
        const {string} = req.query;
        let count = 0;
        for(let each of string){
            if(each == each.toUpperCase()){
                count++;
            }
        }
        fs.writeFileSync(path.join(__dirname, "count.txt"), ""+count, (err)=>{console.log(err)});
        res.send(""+count);
    } catch (error) {
        res.send(error);
    }
});