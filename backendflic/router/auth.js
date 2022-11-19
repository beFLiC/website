const express = require('express');
const route = express.Router();
const encrypt = require('bcryptjs');
const fuser = require('../model/flicUser');
const allowUser = require('../middleware/allowUser');

route.post('/register',async (req,res) => {
    try {
        const {firstname, lastname, email, phone, password, cpassword} = req.body;
        if (!firstname || !lastname || !email || !phone || !password || !cpassword) {
            return res.status(422).json({error : "Please Enter Fields Properly"});
        }
        const exist = await fuser.findOne({email : email});
        const pexist = await fuser.findOne({phone : phone});
        if (exist || pexist) {
            return res.status(422).json({error : "Email / Phone Already Exist"});
        }
        if (password !== cpassword){
            return res.status(422).json({error : "Password Are Not Matching"})
        }else{
            const user = new fuser({firstname, lastname, email, phone, password, cpassword});
            await user.save();
            res.status(201).json({message : "User Registered Successfully"});
        }
    } catch (error) {
        console.log(error);
    }
})

route.post('/login', async (req,res) => {
    try {
        let token;
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({error : "Please Fill Data"});
        }
        const userLog = await fuser.findOne({email : email});
        if(userLog){
            const match = await encrypt.compare(password, userLog.password);
            token = await userLog.generateTokenAuth();
            res.cookie('flicookie', token, {
                expires : new Date(Date.now() + 25892000000),
                httpOnly : true
            })
            if (match) {
                res.status(201).json({message : "You Login Successfully"});
            }else
                res.status(400).json({error : "Invalid Details"});
        }else
            res.status(400).json({error : "Invalid Details"});
    } catch (error) {
        console.log(error);
    }
})

route.get('/profile', allowUser,  (req, res) => {
    res.send(req.rootUser);

})

module.exports = route;