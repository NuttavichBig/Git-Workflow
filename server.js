require('dotenv').config()
const express = require("express");

const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/auth-route');



const app = express();

app.use(cors({}))



app.use('/user',userRoute)


app.use('/auth',authRoute)


const port = process.env.PORT || 9000


app.listen(port,()=>{
    console.log("server running on port",port)
})