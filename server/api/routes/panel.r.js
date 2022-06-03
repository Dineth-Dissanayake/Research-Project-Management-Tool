const express= require("express");
const Panel = require("../models/panel.m");
const router = express.Router();

//ADD NEW PANEL
router.post('/panel/add', (req,res)=>{
    let newPanel = new Panel(req.body);

    newPanel.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Panel saved successfully🆗"
        });
    });
});


//get PANELS
router.get('/panels', (req,res) => {
    Panel.find().exec((err,Panel) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPanel:Panel
        });
    });
});


//get specific PANEL
router.get("/panel/:id", (req,res) => {
    let panelID = req.params.id;

    Panel.findById(panelID,(err,panel) => {
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            panel
        });
    });
});


//update PANEL
router.put('/panel/update/:id',(req,res) => {
    Panel.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,Panel) => {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Panel Updated Successfully!🆗"
            });
        }
    );
});


//delete PANEL
router.delete('/panel/delete/:id', (req,res) => {
    Panel.findByIdAndRemove(req.params.id).exec((err,deletedPanel) => {
        if(err) return res.status(400).json({
            message:"Panel Delete Unsuccessful!👎",err
        });
        return res.json({
            message:"Panel Delete Successful!🆗",deletedPanel
        });
    });
});


module.exports = router;