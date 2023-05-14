const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

//# 1
app.listen(3000,()=>{console.log("connected on 3000...")})

//# 2
app.use("/hello", (req, res) => {
  return res.send("Hello World");
});

//# 5 

function middleware(req, res, next) {
  let {first_name,last_name} =  req.body

  for (let elem of first_name) {
    if (!isNaN(elem)) {
      return next(new Error("Contains numeric value"));
    }
  }
  for (let elem of last_name) {
    if (!isNaN(elem)) {
      return next(new Error("Contains numeric value"));
    }
  }
  next();
}

app.use(middleware);


//# 3
  app.post("/users/add", (req, res) => {
    let data = JSON.stringify(req.body);
    fs.writeFileSync("myfile.json", data, (err, file) => {
      if (err) throw err;
    });
    res.send(data);
  });

//# 4
  app.use("/users/:user", (req, res) => {
    const {user} = req.params;
    let data = JSON.parse(fs.readFileSync("./myfile.json"));
    if (user == data.first_name) {
      let obj = { id: 1, name: "abc" };
      return res.send(JSON.stringify(obj));
    }
    res.send("User Doesn't exist");
  });


//# 6. 

app.use((req,res,next)=>{
  res.status(404).send("API not supported")
})

//#7 
app.use((error, req, res, next) =>{
  if(error || error.message){
    res.status(501).send(error.message)
  }else{
    res.status(501).send("Back end error");
  }
})

