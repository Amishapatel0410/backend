
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const session = require("express-session");     


const app = express();
const ejs = require("ejs");

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
    session({  
        secret: "mySecretKey",
        resave: false,
        saveUninitialized: false,
    })
);

app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("login");
});

app.get("/home",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/");
    }
    res.render("home",{username:req.session.user});
});


app.post("/login",(req,res)=>{
    const {username} = req.body;
    req.session.user = username;
    res.redirect("/home");
})
app.get("/profile",(req,res)=>{
    if(!req.session.user){
         app.render("profile");
    }
   res.render("profile",{username:req.session.user});
});
app.get("/logout",(req,res)=>{
    req.session.destroy(()=>{
      app.render("logout");
    });
    
});

app.listen(4000, () => {
    console.log("Server running on port 4000");
});