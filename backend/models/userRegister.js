const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const studentSchema =  new mongoose.Schema({
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
        type : Number,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    confirmpassword : {
        type : String,
        required : true
    },
    branch : {
        type : String,
        required : true,
        default : 7
    },
    batch : {
        type : String,
        required : true,
        default : 7
    },
    college_mail : {
        type : String,
        // unique : true,
        default : 7
    },
    year : {
        type : String,
        required : true,
        default : 7
    },
    discord_id : {
        type : String,
        // unique : true,
        default : 7
    }
})

studentSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
        this.confirmpassword = undefined;
    }
    next();
})

const Register = new mongoose.model("Register", studentSchema);
module.exports = Register;