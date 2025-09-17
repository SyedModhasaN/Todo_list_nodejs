const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const { name } = require("ejs");
var app = express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost:27017/todo");
// var items = [];
const trySchema = mongoose.Schema({
    name:String
});
const item = mongoose.model("task", trySchema);
// const todo = new item({
//     name:"Create some videos"
// });

// todo.save();
// var example="working";
// app.get("/",function(req,res){
//     res.render("list",{ejes : items})
// });
app.get("/", function (req, res) {
  item.find({})
    .then(foundItems => {
      res.render("list", { ejes: foundItems });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("Something went wrong");
    });
});

app.post("/", function (req, res) {
    const itemName = req.body.ele1;
    const todo4 = new item({
        name : itemName
    });
    todo4.save();
    res.redirect("/");
});

// app.post("/",function(req,res){
//  var item = req.body.ele1;
//  items.push(item);
//  res.redirect('/');
// });
// // DELETE route
app.post("/delete", function(req, res) {
    const del = req.body.delete;
     item.findByIdAndDelete(del)
    .then(() => {
      console.log("Item deleted");
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
    });
});

// // EDIT route
// EDIT route
app.post("/edit/:id", function(req, res) {
  const itemId = req.params.id;
  const updatedTask = req.body.updatedTask.trim();

  item.findByIdAndUpdate(itemId, { name: updatedTask })
    .then(() => {
      console.log("Item updated");
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("Error updating task");
    });
});




app.listen(8000,function(){
    console.log("Server started");
});