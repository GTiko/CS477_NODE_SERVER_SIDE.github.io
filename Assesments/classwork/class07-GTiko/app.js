const express = require("express");
const app = express();
const voterRoutes = require("./routes/voterRoutes");
const mongoose = require("mongoose")

async function main(){
    return mongoose.connect("mongodb://127.0.0.1:27017/voterdatabase");
}
main().then(testDb).catch(err =>console.log(err))

function testDb(){
    console.log("DB connected");
}

app.use(express.json());

app.listen(4000, ()=>console.log("connected on 4000..."));

app.use("/voters", voterRoutes);

// Error Handling

app.use((req, res)=>{
    res.status(404).send("API not supported");
})

app.use((error, req, res, next)=>{
    if(error && error.message){
        res.status(501).send(error.message);
    }else{
        res.status(501).send("Backend error");
    }
});
