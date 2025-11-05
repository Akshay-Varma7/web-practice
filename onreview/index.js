const express = require("express");
const app = express();
const port =8080;
const path = require("path");
const { v4 : uuidv4 } =require("uuid");//v4 as uuidv4 to generate unique ids
const methodOverride = require("method-override");

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));//mw used everytime req

app.use(methodOverride("_method"));

let posts = [//in databases id-unique created automatically
    {
        id : uuidv4(),//string unique id
        username : "akshay",
        content : "my first post"
    },
    {
        id : uuidv4(),
        username : "mahathi",
        content : "i am engineer"
    },
    {
        id : uuidv4(),
        username : "dheeraj",
        content : "i am 25"
    }
];
//web default get request
//REST full apis
//express routes start with / if not error
//1.
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});//if we send something it shld be used
});
//2.-new-via get req we do post req
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/posts",(req,res)=>{//sends data in body//posts in /posts route where we see all posts
    let {username ,content} = req.body;
    let id = uuidv4();
    posts.push({id ,username ,content})//whenever in js {val1,val2} it creates object with key as val1 and val2 ie., {val1:val1,val2:val2}
    res.redirect("/posts");//forces same page to make a get req to route or url or page mentioned
});
//3.-show post
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;//destructing
    let post = posts.find((p)=> id === p.id);//finds and returns matching element. here p is each element in posts array like for each
    //here invalid id undefined .so with this we can handdle error and can create error.ejs file and render if post == undeifined
    res.render("show.ejs",{post});
});
//4.-edit post
//cant be accesed by adress bar of browser directly as get req exists in this path 
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id == p.id);
    
    let {content} = req.body;//destructing
    post.content = content;
    res.redirect("/posts");//works instantly
    
});
//4.2-edit form and not from postman via get req we do patch req
app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;//1.taking as {}$$$
    let post = posts.find((p)=> id == p.id);
    res.render("edit.ejs",{post})//2.sending as {}$$$
});
//5.-delete post
app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id != p.id);//keeping all except the one to be deleted
    res.redirect("/posts");
});
app.listen(port, () => {
    console.log("listening to port 8080");
});