const bcrypt  = require("bcryptjs");
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
app.use(express.json());

app.listen(3000, console.log("3000..."));

const data = require("./data/data.json");

middleware = (req, res, next) =>{
    try {
        const {phone} = req.query;
        if(phone.length != 10){
            return next(new Error("Wrong phone format"));
        }
        for(let all of phone){
            if(isNaN(all)){
                return next(new Error("Phone shouldn't contain letters!"));
            }
        }

        for(let each of data){ 
               if(bcrypt.compareSync(phone, each.phone)){
                return next(new Error("Already voted"));
            }
        }
        next();
    } catch (error) {
        return next(new Error(error));
    }
}

app.post("/voters/:name", middleware, (req ,res)=>{
    try {
        const {name} = req.params;
        let {address, phone} = req.query;
        const {president, v_president} = req.body;
        phone = bcrypt.hashSync(phone, 3);
        let voter = {
            name:name,
            phone:phone,
            address:address,
            voted:{
                president:president,
                v_president:v_president
            }
        }
        data.push(voter);
        fs.writeFileSync(path.join("./data", "data.json"), JSON.stringify(data), (error)=>{console.log(error)});
        res.status(200).send("Voted")
    } catch (error) {
        res.send("error...2");
    }
});

app.use((req, res, next)=>{
    res.send("API not supported")
});
app.use((error, req, res, next)=>{
    if(error && error.message){
        res.send(error.message)
    }else{
        res.send("Backend error");
    }
});