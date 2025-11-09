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

let movies = [
    {
        name: "Bahubali",
        img:"/images/bahubali.jpg",
        director: "rajamouli",
        releaseYear:2015,
        review : [
            {
                id : uuidv4(),//string unique id
                username : "akshay",
                content : "great movie"
           }
        ]
    },
    {
        name: "avatar",
        img:"/images/avatar.jpg",
        director: "james cameron",
        releaseYear:2009,
        review : [
            {
                id : uuidv4(),//string unique id
                username : "akshay",
                content : "great movie"
       }
        ]
    },
    {
        name: "interstellar",
        img:"/images/interstellar.jpg",
        director: "cristopher nolan",
        releaseYear:2014,
        review : [
            {
                id : uuidv4(),//string unique id
                username : "akshay",
                content : "great movie"
           }
        ]
    },
    {
        name: "titanic",
        img:"/images/titanic.jpg",
        director: "james cameron",
        releaseYear:1997,
        review : [
            {
                id : uuidv4(),//string unique id
                username : "akshay",
                content : "great movie"
           }
        ]
    },
    {
        name: "bay watch",
        img:"/images/baywatch.jpg",
        director: "seth gordon",
        releaseYear:2017,
        review : [
            {
                id : uuidv4(),//string unique id
                username : "akshay",
                content : "great movie"
           }
        ]
    },
    {
        name: "star wars",
        img:"/images/star-wars.jpg",
        director: "george lucas",
        releaseYear:2005,
        review : [
            {
                id : uuidv4(),//string unique id
                username : "akshay",
                content : "great movie"
           }
        ]
    }
];


app.get("/",(req,res)=>{
    res.render("home.ejs",{movies});
});
//add movie
app.get("/add",(req,res)=>{
    res.render("add.ejs");
});
app.post("/",(req,res)=>{//sends data in body//posts in /posts route where we see all posts
    let {name,img,director,releaseYear} = req.body;
    let review = [];
    movies.push({name,img,director,releaseYear,review})//whenever in js {val1,val2} it creates object with key as val1 and val2 ie., {val1:val1,val2:val2}
    res.redirect("/");//forces same page to make a get req to route or url or page mentioned
});
//web default get request
//REST full apis
//express routes start with / if not error
//1.
app.get("/posts/:movie",(req,res)=>{
    let {movie} = req.params;
    let m = movies.find((p)=> movie === p.name);
    let posts = m.review;
    res.render("index.ejs",{posts,m});//if we send something it shld be used
});
//2.-new-via get req we do post req
app.get("/posts/:movie/new",(req,res)=>{
    let {movie} = req.params;
    let m = movies.find((p)=> movie === p.name);
    res.render("new.ejs",{m});//sending m to use in action of form
});
app.post("/posts/:movie",(req,res)=>{//sends data in body//posts in /posts route where we see all posts
    let {movie} = req.params;
    let m = movies.find((p)=> movie === p.name);
    let posts = m.review;

    let {username ,content} = req.body;
    let id = uuidv4();
    posts.push({id ,username ,content})//whenever in js {val1,val2} it creates object with key as val1 and val2 ie., {val1:val1,val2:val2}
    res.redirect(`/posts/${m.name}`);//forces same page to make a get req to route or url or page mentioned
});
//3.-show post
app.get("/posts/:movie/:id",(req,res)=>{
    let {movie,id} = req.params;//destructing
    let m = movies.find((p)=> movie === p.name);
    let posts = m.review;
    let post = posts.find((p)=> id === p.id);//finds and returns matching element. here p is each element in posts array like for each
    //here invalid id undefined .so with this we can handdle error and can create error.ejs file and render if post == undeifined
    res.render("show.ejs",{post});
});
//4.-edit post
//cant be accesed by adress bar of browser directly as get req exists in this path 
app.patch("/posts/:movie/:id",(req,res)=>{
    let {movie,id} = req.params;
    let m = movies.find((p)=> movie === p.name);
    let posts = m.review;

    let post = posts.find((p)=> id == p.id);
    
    let {content} = req.body;//destructing
    post.content = content;
    res.redirect(`/posts/${m.name}`);//works instantly
    
});
//4.2-edit form and not from postman via get req we do patch req
app.get("/posts/:movie/:id/edit",(req,res)=>{
    let {movie,id} = req.params;//1.taking as {}$$$
    let m = movies.find((p)=> movie === p.name);
    let posts = m.review;
    let post = posts.find((p)=> id == p.id);
    res.render("edit.ejs",{post,m})//2.sending as {}$$$
});
//5.-delete post
app.delete("/posts/:movie/:id",(req,res)=>{
    let {movie,id} = req.params;
    let m = movies.find((p)=> movie === p.name);

    m.review = m.review.filter((p)=> id != p.id);//keeping all except the one to be deleted
    res.redirect(`/posts/${m.name}`);
});
app.listen(port, () => {
    console.log("listening to port 8080");
});