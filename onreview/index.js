const express = require("express");
const app = express();
const port =8080;
const path = require("path");

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));//mw used everytime req

let posts = [
    {
        username : "akshay",
        content : "my first post"
    },
    {
        username : "mahathi",
        content : "i am engineer"
    },
    {
        username : "dheeraj",
        content : "i am 25"
    }
];
//REST full apis
//1.
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});//if we send something it shld be used
});
//2.
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/posts",(req,res)=>{//sends data in body//posts in /posts route where we see all posts
    let {username ,content} = req.body;
    posts.push({username ,content})//whenever in js {val1,val2} it creates object with key as val1 and val2 ie., {val1:val1,val2:val2}
    res.redirect("/posts");//forces same page to make a get req to route or url or page mentioned
});
app.listen(port, () => {
    console.log("listening to port 8080");
});