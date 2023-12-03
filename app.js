

// Require starts here
const express = require('express')
const app = express()
require("dotenv").config()
//Require ends here



//database connection
require("./model/index")

app.get("/",(req,res)=>{
    res.send("Hi, I am SaaS. I am alive now !!")
})





const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`Server has started at ${PORT}`)
})

