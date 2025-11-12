const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const { v4: uuidv4} = require("uuid");
const { faker } = require("@faker-js/faker");

const app = express();
const port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const getUsers = ()=>{
    return [
        faker.datatype.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ]
}
app.get("/",(req,res)=>{
    let q = "SELECT count(*) FROM user"
    try{
        conection.query(q,(err,result)=>{
            if(err) throw err;
        })
    }catch(err){

    }
    createConnection.end
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});