const express = require("express");
const vRouter = require("./route/vroute");
const app = express();

app.use(express.json());
app.listen(4000, ()=>{console.log("connected on 4000...")});

app.use("/voter", vRouter);

app.use((req, res, next)=>{
    res.send("API not supported");
});

app.use((error, req, res, next)=>{
    if(error && error.message){
        res.send(error.message);
    }else{
        res.send("Backend Error");
    }
});