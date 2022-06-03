import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const RequestSupervisor = new Schema({
    specialization : {
        type : String,
        required : true
    },
    topic : {
        type : String,
        required : true
    },
    studentName1 : {
        type : String,
        required : true
    },
    studentName2 : {
        type : String,
        required : true
    },
    studentName3 : {
        type : String,
        required : true
    },
    studentName4 : {
        type : String,
        required : true
    },
    requestStatus : {
        type : String,
        required : false
    }
});


module.exports = mongoose.model("RequestSupervisor", RequestSupervisor);