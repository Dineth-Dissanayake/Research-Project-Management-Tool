import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const markingSchemaSchema = new Schema({
    markingSchemaName : {
        type : String,
        required : true
    },
    markingSchemaNumber : {
        type : String,
        required : true
    },
    addedDate : {
        type : Date,
        required : true
    },
    markingSchemaCategory : {
        type : String,
        required : true
    },
    markingSchemaStatus : {
        type : String,
        required : true
    }
});


module.exports = mongoose.model("MarkingSchema", markingSchemaSchema);