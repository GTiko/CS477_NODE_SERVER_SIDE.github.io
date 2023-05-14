const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
const data = require('./data.json');

app.listen(3000,()=>{console.log("connected on 3000...")});

function middleware(req, res, next){
    const {phone} = req.query;
    if(phone.length != 10){
        return next (new Error("Phone number should have 10 digits"));
    }
    for(let i of phone){
        if(i < "0" || i > "9"){
            return next (new Error("Wrong phone number format"))
        }
    }
    next();
}

app.post("/voters/:name", middleware, (req, res) => {

    data.push({
        name: req.params.name,
        address: req.query.address,
        phone: req.query.phone,
        president: req.body.president,
        vice_president : req.body.vice_president,
    });

    fs.writeFile("./data.json", JSON.stringify(data), (err)=>{
        if(err) throw err;
    });

    res.send("Voted");
})

// Result of the vote for the president

app.use("/result",(req, res) =>{
    let map = {};
    for(let i=0; i<data.length; i++){
        let count = 0;
        for(let j = 0; j< data.length;j++){
            if(data[i].president == data[j].president){
                count++;
            }
        }
        map[data[i].president] = count;
    }
    res.send(JSON.stringify(map))
});


app.use((req, res, next)=>{
    res.status(501).send("API not supported");
});
app.use((error, req, res, next)=>{
    if(error || error.message){
        res.status(501).send(error.message);
    }else{
    res.status(501).send("Back end error");
    }
});
