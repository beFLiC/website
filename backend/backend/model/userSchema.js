const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = new mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phone : {
        type : String,
        required : true,
        unique : true
    },
    password: {
        type : String,
        required : true
    },
    cpassword: {
        type : String,
        required : true
    },
    tokens : [
        {
            token:{
                type : String,
                required : true
            }
        }
    ]
})

user.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,10);
        this.cpassword = await bcrypt.hash(this.cpassword,10);
    }
    next();
});

// generating token function 
user.methods.getToken = async function() {
    try {
        let token = jwt.sign({_id : this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

const userSchema = mongoose.model('USER',user);
module.exports = userSchema;