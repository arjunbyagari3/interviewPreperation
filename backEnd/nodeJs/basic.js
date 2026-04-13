

const express = require('express');

const app = express();


// app.get(route , reqestHandler= () ={})


// middleware

app.use((req,res,next)=>{
    console.log("Middleware printed on console")
    next()

})


// error handling


app.get('/',function(req,res){
    res.send("Hello Arjun")
})



app.get("/profile",(req,res,next)=>{
    return next(new Error(" Edo theda ga undey... raaammm... "))

})    


app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send("Something went wronguuuuu bhayyyaa....")
    
})    





app.listen(3000)