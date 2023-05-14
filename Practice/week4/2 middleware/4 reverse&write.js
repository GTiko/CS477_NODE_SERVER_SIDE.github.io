const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());

app.listen(3000,console.log("3000..."));

app.get("/reverse" , async (req, res)=>{
    try {
        const {string} = req.query;
        let str = "";
        for(let i = string.length-1; i>= 0; i--){
            str += string[i];
        }
        let revData = fs.readFileSync(path.join(__dirname, 'rev.txt'), "utf-8", (err)=>{console.log("err")});
        revData= revData +" "+ str;
        fs.writeFileSync(path.join(__dirname, 'rev.txt'), revData, (err)=>{console.log(err)});
        res.send(revData);
    } catch (error) {
        res.send("error");
    }
})