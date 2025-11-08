const express =require("express");
const app = express();
const path = require("path");

const port =8080;

app.set("view engine","ejs");//both strings
app.set("views",path.join(__dirname,"views"));

app.get("/ig/:username",(req,res)=>{
    let followers = ["ram","krishna","pratik","rahul"];
    let {username}= req.params;
    res.render("instagram.ejs",{username,followers});
});
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});