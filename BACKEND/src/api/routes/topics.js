import express from "express";


const Topics = require("../models/topics");
const router = express.Router();

//ADD Topics
router.post('/topics/add', (req,res)=>{
    let newTopics = new Topics(req.body);

    newTopics.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Topic Details saved successfully🆗"
        });
    });
});


//get MarkingSchemas
router.get('/MarkingSchema', (req,res) => {
    MarkingSchema.find().exec((err,MarkingSchema) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingMarkingSchema:MarkingSchema
        });
    });
});


//get specific MarkingSchema
router.get("/MarkingSchema/:id", (req,res) => {
    let markingSchemaId = req.params.id;

    MarkingSchema.findById(markingSchemaId,(err,MarkingSchema) => {
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            MarkingSchema
        });
    });
});


//update MarkingSchema
router.put('/MarkingSchema/update/:id',(req,res) => {
    MarkingSchema.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,MarkingSchema) => {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"MarkingSchema Updated Successfully!🆗"
            });
        }
    );
});


//delete MarkingSchema
router.delete('/MarkingSchema/delete/:id', (req,res) => {
    MarkingSchema.findByIdAndRemove(req.params.id).exec((err,deletedMarkingSchema) => {
        if(err) return res.status(400).json({
            message:"MarkingSchema Delete Unsuccessful!👎",err
        });
        return res.json({
            message:"MarkingSchema Delete Successful!🆗",deletedMarkingSchema
        });
    });
});


module.exports = router;