require('dotenv').config()
const express = require("express")
const app = express();



app.use(cors({}))

const port = process.env.PORT
app.listen(port,()=>{
    console.log("server running on port",port)
})