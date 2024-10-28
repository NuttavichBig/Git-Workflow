require('dotenv').config()
const express = require("express");
const userRoute = require('./routes/userRoute');
const app = express();



app.use(cors())



app.use('/user',userRoute)


const port = process.env.PORT
app.listen(port,()=>{
    console.log("server running on port",port)
})