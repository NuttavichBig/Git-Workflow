require('dotenv').config()
const express = require("express");
const authRoute = require('./routes/Auth-router');
const app = express();

app.use(cors({}))

app.use('/auth',authRoute)

const port = process.env.PORT
app.listen(port,()=>{
    console.log("server running on port",port)
})