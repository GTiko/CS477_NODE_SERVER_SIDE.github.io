const express = require("express");
const app = express();

app.use(express.json());

function middleware (req,res,next){
    let name = req.body.name;
    console.log(name);
    const flag = true;
    if(flag){
        next();
    }else{
        res.send("wrong!");
    }
}

app.use('',middleware,(req,res)=>{
    res.send("hello");
})

app.listen(3000,()=>{console.log("connected...")})
