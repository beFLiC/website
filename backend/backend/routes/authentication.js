const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const middle = require('../middleware/middle');

require('../database/connection');
const users = require('../model/userSchema');

// registration process 
router.post('/register',async (req,res) => {
    const {firstname, lastname, email, phone, password, cpassword} = req.body;
    if(!firstname || !lastname || !email || !phone || !password || !cpassword){
        return res.status(422).json({error : "Fill Data Properly"});
    }
    try{
        // checking email in the database
        const exist = await users.findOne({email : email});
        const pexist = await users.findOne({phone : phone});
        if(exist || pexist){
            return res.json("1");
        }else if(password != cpassword){
            return res.json(false);
        }else{
            // now saving user data in database
            const user = new users({firstname, lastname, email, phone, password, cpassword});
            await user.save();
            res.json(true);
        }
    } catch (err) {
        console.log(err);
    }
})

// Login process
router.post('/login', async (req,res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({error : "Unfilled Entries"});
        }
        const userLog = await users.findOne({email : email});
        if(userLog){
            const match = await bcrypt.compare(password,userLog.password);
            const token = await userLog.getToken();
            res.cookie("jwtoken",token,{
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })
            if(!match){
                return res.json(false);
            }else{
                return res.json(true);
            }
        }else{
            return res.json(false);
        }
    } catch (error) {
        console.log(error); 
    }
})

// donate page auth 
router.get('/donate',middle, (req,res) => {
    console.log("Done");
})
module.exports = router;