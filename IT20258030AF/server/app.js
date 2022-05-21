const express =require("express");
const mongoose =require("mongoose");
const app=express();

//middlewares



//routes 
app.get("/",(req,res) =>{
    res.send("hello world");
});


//server configuration
const PORT =process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server listening on port : ${PORT}`));

