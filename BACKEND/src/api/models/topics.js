import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const Topics = new Schema({
    StudentName : {
        type : String,
        required : [true, "Student Name is required!"]
    },
    StudentID : {
        type : String,
        required : [true, "Student ID is required."]
    },
    Specialization : {
        type : String,
        required : [true, "Specialization is required."]
    },
    ContactNumber : {
        type : Number,
        required : [true, "Contact Number is required."]
    },
    TopicName : {
        type : String,
        required : [true, "Topic Name is required."]
    },
    TopicStatus : {
        type : String,
        required : true
    },
    PostedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    }
});


module.exports = mongoose.model("topics", Topics);