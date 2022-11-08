const express = require('express');
const env = require('dotenv');
const app = express();
env.config({path : './.env.local'});
// database connection established 
require('./database/connect');
app.use(express.json());
// linked routr fille 
app.use(require('./router/auth'));

app.listen(process.env.PORT, () => {
    console.log(`Server is Running at ${process.env.PORT}`)
})