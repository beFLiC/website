const env = require('dotenv');
const mongoose = require('mongoose');
env.config({path : './.env'});


// Database connection script 
const DB = process.env.DATABASE;
mongoose.connect(DB).then(() => {
    console.log('Connection Succesful');
}).catch((err) => console.log('Unable to connect'));
