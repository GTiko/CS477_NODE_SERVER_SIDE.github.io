const express = require("express");
const app = express();
app.use(express.json());

app.listen(3000, console.log("3000"))

app.post("/string", mid, (req,res)=>{
    res.send("Accepted");
})

function mid (req, res, next){
    try {
        const {upper, lower} = req.body;
        if(upper != upper.toUpperCase()){
            return res.send("Wrong format");
        }
        if(lower != lower.toLowerCase()){
            return res.send("Wrong format");
        }
        next() 
    } catch (error) {
        res.send(error)
    }
}