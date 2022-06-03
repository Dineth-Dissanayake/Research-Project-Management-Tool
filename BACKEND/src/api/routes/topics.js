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


//get Topics
router.get('/topics', (req,res) => {
    Topic.find().exec((err,Topic) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingTopic:Topic
        });
    });
});


//get specific Topic
router.get("/topics/:id", (req,res) => {
    let topicId = req.params.id;

    Topic.findById(topicId,(err,Topic) => {
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            Topic
        });
    });
});


//update Topic
router.put('/topics/update/:id',(req,res) => {
    Topic.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,Topic) => {
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
    Topic.findByIdAndRemove(req.params.id).exec((err,deletedTopic) => {
        if(err) return res.status(400).json({
            message:"Topic Delete Unsuccessful!👎",err
        });
        return res.json({
            message:"Topic Delete Successful!🆗",deletedTopic
        });
    });
});


module.exports = router;