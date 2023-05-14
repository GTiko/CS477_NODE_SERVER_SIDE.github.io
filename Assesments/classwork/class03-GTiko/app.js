const express = require("express");
const app = express();
app.use(express.json());

//#1
app.listen(3000,()=>{console.log("connected on 3000...")});

// # middleware

function middleware(req, res ,next){
    console.log(req.params, req.query)
    try {
        const value =  req.params.str || req.query.string || req.body.str;
        console.log(value)
        for(let i=0;i<value.length;i++){
            if(!isNaN(value[i])){
                return next(new Error("contains numeric!"));
            }
        }
        next();
    } catch (error) {
        console.log("error")
        res.send(error);
    }
};

app.use(middleware);

//#2
app.get("/count", (req ,res)=>{
    let str = req.query.string;
    let count = 0;
    for(let i=0; i< str.length;i++){
        if(str[i] == str[i].toUpperCase()){
            count++;
        }
    }
    res.send(`${count}`);
});

//#3
app.get("/x/:str",(req ,res)=>{
    let {str} = req.params;
    let temp = "";
    for(let i=str.length-1; i>=0 ;i--){
      temp+=str[i];
    }
    res.send(temp);
});

//#4
app.post("/upper", (req ,res)=>{
    let {str} = req.body;
    res.send(str.toUpperCase());
});

//#5  error handling
app.use((req, res, next)=>{
    res.send("API not supported");
});

app.use((error, req, res, next)=>{
    if(error || error.message){
        res.send(error.message);
    }
   else{
    res.send("Back end error")
   }
});