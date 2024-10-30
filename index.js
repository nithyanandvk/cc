const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);

app.get("/",(req,res)=>{
    res.render("layouts/boilerplate.ejs",{view:"home"});
});

app.get("/subteams",(req,res)=>{
    res.render("layouts/boilerplate.ejs",{view:"subteams"});
});

app.get("/past",(req,res)=>{
    res.render("layouts/boilerplate.ejs",{view:"past"});
});

app.get("/resources",(req,res)=>{
    res.render("layouts/boilerplate.ejs",{view:"resources"});
});

app.listen(port, () => {
    console.log("listening on port 3000");
});