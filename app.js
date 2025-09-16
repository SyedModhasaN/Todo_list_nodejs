const express = require("express");
const bodyParser = require("body-parser");
var app = express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
var items = [];
var example="working";
app.get("/",function(req,res){
    res.render("list",{ejes : items})
});

app.post("/",function(req,res){
 var item = req.body.ele1;
 items.push(item);
 res.redirect('/');
});
// DELETE route
app.post("/delete/:id", function(req, res) {
    const index = req.params.id;
    if (index >= 0 && index < items.length) {
        items.splice(index, 1); // remove that item
    }
    res.redirect("/");
});

// EDIT route
app.post("/edit/:id", function(req, res) {
    const index = req.params.id;
    const updatedTask = req.body.updatedTask.trim();
    if (updatedTask && index >= 0 && index < items.length) {
        items[index] = updatedTask; // update task text
    }
    res.redirect("/");
});


app.listen(8000,function(){
    console.log("Server started");
});