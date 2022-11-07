const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
require("./database/connect");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials");
const Register = require("./models/userRegister");
const {json, urlencoded} = require("express");

app.use(express.json());
app.use(urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);


hbs.registerPartials(partials_path);


app.get("/",(req,res) => {
    res.render("index");
})
app.get("/register",(req,res) => {
    res.render("register");
})
app.get("/login",(req,res) => {
    res.render("login");
})
app.post("/register",async (req,res) => {
    try{

        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if(password === cpassword){
            const registeredflic = new Register({
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email,
                phone : req.body.phone,
                password : password,
                confirmpassword : cpassword,
                branch : req.body.branch,
                batch : req.body.batch,
                college_mail : req.body.college_mail,
                year : req.body.year,
                discord_id : req.body.discord_id
            })
            const registered = await registeredflic.save();
            res.status(201).render("login");
        }else{
            res.send("Password are not matching");
        }
    }catch(error){
        res.status(400).send(error)
    }
})

app.post("/login", async (req,res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const usermail = await Register.findOne({email:email});

        const isMatch = await bcrypt.compare(password,usermail.password);

        if(usermail.password === password || isMatch){
            res.status(201).render("index");
        }else{
            res.send("Invalid Email or Password");
        }

    } catch (error) {
        res.status(400).send("Invalid Email or Password")
    }
})

app.listen(port,() => {
    console.log(`server is running on port ${port}`);
})