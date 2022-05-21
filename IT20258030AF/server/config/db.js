const mongoose =require("mongoose");

const connectDB =async () =>{
    return mongoose
    .connect ("mongodb://localhost/af")
    .then(()=>console.log(`connection to database estabilished..`))
    .catch((err) =>console.log(err));
};
module.exports=connectDB;