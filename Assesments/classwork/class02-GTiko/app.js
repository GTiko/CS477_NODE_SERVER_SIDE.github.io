const express = require("express");
const app = express();
app.use(express.json());

// question #1
app.listen(3000,()=>{console.log("connected on 3000...")});

//question #2
  function validateNumbers(req, res, next) {
    let arr = req.body.numbers;
    if (!Array.isArray(arr) || arr.length == 0) {
      return res.send("Wrong input");
    }
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1] || arr[i] < 0) {
        return res.send("Numbers are not in ascending order");
      }
    }
    next();
  }

  app.post("/numbers", validateNumbers, (req, res) => {
    res.send("correct");
  });

//question #3

  function validateString(req,res,next){
    let upper = req.body.upper;
    let lower = req.body.lower;

    if (upper != upper.toUpperCase() && lower != upper.toLowerCase()) {
      return res.send("Wrong format!");
    }
    next();
  }

  app.use("/string",validateString, (req, res) => {
    res.send("Correct!");
  });
