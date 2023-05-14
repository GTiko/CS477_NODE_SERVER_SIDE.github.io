const express = require("express");
const fs = require("fs");
const books = require("./books.json");
const app = express();
app.use(express.json());

//# 1,2
app.listen(3000, () => {
  console.log("connected on 3000...");
});

//# middleware
function middleware(req, res, next) {
  let { ISBN } = req.body;
  if (req.method == "POST") {
    for (let elem of ISBN) {
      if (elem < "1" || elem > "9") {
        return next(new Error("ISBN shouldn't contain letters!"));
      }
    }
    for (let each of books) {
      if (each.ISBN == ISBN) {
        return next(new Error("This book already exist in the system !"));
      }
    }
    if (ISBN.length != 13) {
      return next(new Error("Wrong ISBN please add proper ISBN !"));
    }
  }
    if(req.method == "PUT"){
        for(let each of books){
            if(each.title == req.body.title && each.id != req.params.bookId){
              return next();
            }
        }
       return next(new Error("Title doesn't exist or Id already in use"));
    }
  next();
}

app.use(middleware);

//# 3   POST
app.post("/books", (req, res, next) => {
  let newBook = req.body;
  newBook.id = books.length;
  books.push(newBook);
  fs.writeFile("books.json", JSON.stringify(books), (err) => {
    if (err) return next(new Error("Can't save file..."));
  });
  res.send(newBook);
});

//# 4   GET
app.get("/books", (req, res) => {
  res.send(JSON.stringify(books));
});


//# 5   PUT
app.put("/books/:bookId", (req, res)=>{
    let {bookId} = req.params;
    let {title} = req.body;

    for(let each of books){
        if(each.title == title){
            each.id = bookId;
        }
    }
    fs.writeFile("books.json", JSON.stringify(books), (err) => {
        if (err) return next(new Error("Can't save file..."));
      });
    res.send(JSON.stringify(books));
})

// Error-handler
app.use((error, req, res, next) => {
  if (error || error.message) {
    res.status(501).send(error.message);
  } else {
    res.send("Back end error");
  }
});

app.use((req, res, next) => {
  res.status(404).send("API not supported!");
});
