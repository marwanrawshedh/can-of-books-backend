"use strict";
const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.PORT;
app.use(express.json());
let BookName = require("./Schema");
let getBook = require("./Getbook");
// mongoose.connect('mongodb://localhost:27017/test');
mongoose.connect(process.env.URL);
app.get("/books", getBook);



app.post("/addbooks", addBooksHandler);
async function addBooksHandler(request, response) {
  const title = request.body.title;
  const description = request.body.description;
  const status = request.body.status;
  const userEmail = request.body.email;
  await BookName.create({
    title: title,
    description: description,
    status: status,
    email: userEmail,
  });
  BookName.find({ email: userEmail }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.send(result);
    }
  });
}
app.delete("/deletebooks/:id", deleteBooksHandler);
function deleteBooksHandler(req, res) {
  const bookId = req.params.id;
  const userEmail = req.query.email;
  
  BookName.deleteOne({ _id: bookId }, (err, result) => {
    BookName.find({ email: userEmail }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
}

app.put("/updatebooks/:id", update);
function update(req,res) {
  const id = req.params.id;
  const {title,description,status,email} = req.body;
  
  BookName.findByIdAndUpdate(id,{title,description,status},(err,result)=>{
    BookName.find({email:email},(err,result)=>{
      if(err)
      {
        console.log(err);
      }
      else
      {
        res.send(result);
      }
    })
  })
}









app.get("*", (req, res) => {
  res.status(404).send("Sorry, page not found");
});
app.listen(PORT, () => console.log(`listening on ${PORT}`));
