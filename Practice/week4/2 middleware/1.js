const express = require("express");
const app = express();
app.use(express.json());

app.listen(3000, () => console.log("3000"));

app.post("/numbers", mid, (req, res) => {
  res.send("Accepted");
});

function mid(req, res, next) {
  try {
    const { numbers } = req.body;
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] > numbers[i + 1]) {
       return res.send("Wrong format!");
      }
    }
    next();
  } catch (error) {
    res.send(error);
  }
}
