const { MongoClient } = require("mongodb");
const routers = require("./routes/routes");
const express = require("express");
const app = express();
app.use(express.json());

let client = new MongoClient("mongodb://127.0.0.1:27017");
let db = null;
async function main() {
  await client.connect();
  db = client.db("myapp");
}

app.use((req, res, next)=>{
  req.db = db;
  next();
})

main().then(testDB).catch((err) => console.log(err));

function testDB(){
    console.log("DB connected")
}

app.listen(3000, ()=>{console.log("connected on 3000...")});

app.use("/schools", routers);


app.use((req, res, next)=>{
  res.send("API not supported");
})

app.use((error, req, res, next)=>{
  if(error && error.message){
    res.send(error.message);
  }else{
    res.send("Backend error");
  }
})