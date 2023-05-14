const express = require("express");
const app = express();
app.use(express.json());
app.listen(3000,()=>console.log("3000..."));

app.get("/greeting/:greet",(req, res) => {
    const {greet} = req.params;
    res.send(greet)
});

app.get("/greeting",(req, res) => {
    const {greet} = req.query;
    console.log(greet)
    res.send(greet)
});