const express = require('express');
const env = require('dotenv');
const app = express();

env.config({path : './.env'});
app.use(express.json());

require('./database/connection');

app.use(require('./routes/authentication'));

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is running ${port}`)
})