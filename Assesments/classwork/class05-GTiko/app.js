const express = require("express");
const app = express();
const voterRoutes = require("./routes/voterRoutes");

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
})