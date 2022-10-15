const express = require("express");
const path = require("path");
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;
// The Static path 
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const nav_path = path.join(__dirname,"../templates/partials");
app.use(express.static(static_path));
app.set('view engine', 'hbs');
app.set('views', template_path);

hbs.registerPartials(nav_path);

//The Route
app.get("",(req,res,next)=>{
    
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("404error",{
        errMsg:"Opps! The page not found"
    })
    
})
app.listen(port,()=>{
    console.log(`The app running on ${port}`)
})