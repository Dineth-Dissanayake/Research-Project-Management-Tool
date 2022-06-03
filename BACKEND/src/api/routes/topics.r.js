import express from "express";


const RequestTopics = require("../models/topics.m");
const router = express.Router();

//ADD Topics
router.post('/topics/add', (req,res)=>{
    let newTopics = new RequestTopics(req.body);

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


//get Topics
router.get('/topics', (req,res) => {
    RequestTopics.find().exec((err,RequestTopics) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingRequestTopics:RequestTopics
        });
    });
});


//get specific Topic
router.get("/topics/:id", (req,res) => {
    let requestTopicsId = req.params.id;

    Topic.findById(requestTopicsId,(err,RequestTopics) => {
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            RequestTopics
        });
    });
});


//update Topic
router.put('/topics/update/:id',(req,res) => {
    RequestTopics.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,RequestTopics) => {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Topic Updated Successfully!🆗"
            });
        }
    );
});


//delete Topic
router.delete('/topics/delete/:id', (req,res) => {
    RequestTopics.findByIdAndRemove(req.params.id).exec((err,deletedTopic) => {
        if(err) return res.status(400).json({
            message:"Topic Delete Unsuccessful!👎",err
        });
        return res.json({
            message:"Topic Delete Successful!🆗",deletedTopic
        });
    });
});


module.exports = router;