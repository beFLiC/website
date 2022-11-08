const mongoose = require('mongoose');

const dataset = process.env.DATABASE;
mongoose.connect(dataset).then(() => {
    console.log("Connection Flic Successful")
}).catch((err) => console.log('No Connection'));
