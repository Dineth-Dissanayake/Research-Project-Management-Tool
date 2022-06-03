import express from "express";


const RequestSupervisor = require("../models/reqSupervisor.m");
const router = express.Router();

//ADD NEW RequestSupervisor
router.post('/req_supervisor/add', (req,res)=>{
    let newRequestSupervisor = new RequestSupervisor(req.body);

    newRequestSupervisor.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Request saved successfully🆗"
        });
    });
});


//get RequestSupervisor
router.get('/req_supervisor', (req,res) => {
    RequestSupervisor.find().exec((err,RequestSupervisor) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingRequestSupervisor:RequestSupervisor
        });
    });
});


//get specific RequestSupervisor
router.get("/req_supervisor/:id", (req,res) => {
    let requestSupervisorId = req.params.id;

    RequestSupervisor.findById(requestSupervisorId,(err,RequestSupervisor) => {
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            RequestSupervisor
        });
    });
});


//update RequestSupervisor
router.put('/req_supervisor/update/:id',(req,res) => {
    RequestSupervisor.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,RequestSupervisor) => {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Request Updated Successfully!🆗"
            });
        }
    );
});


//delete RequestSupervisor
router.delete('/req_supervisor/delete/:id', (req,res) => {
    RequestSupervisor.findByIdAndRemove(req.params.id).exec((err,deletedRequestSupervisor) => {
        if(err) return res.status(400).json({
            message:"Request Delete Unsuccessful!👎",err
        });
        return res.json({
            message:"Request Delete Successful!🆗",deletedRequestSupervisor
        });
    });
});


module.exports = router;