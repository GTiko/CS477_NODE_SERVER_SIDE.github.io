const express = require("express");
const routers = require("./routes/routers");
const {MongoClient} = require("mongodb");
const app = express();

const client = new MongoClient("mongodb://127.0.0.1:27017");
let db = null;

async function main(){
    await client.connect();
    db = client.db("modernVoteSystem");
}

main().then(()=>console.log("DB connected")).catch(err=>console.log(err))

app.use((req, res, next)=>{
    req.db = db;
    next();
})

app.use(express.json());
app.listen(2000, ()=>{console.log("connected on 2000...")});

app.use("/voters", routers);

app.use((req, res, next)=>{
    res.status(404).send("API not supported");
});
app.use((error, req, res, next)=>{
    if(error && error.message){
        res.send(error.message);
    }else{
        res.send("Backend error");
    }
})