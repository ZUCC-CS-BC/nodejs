const express = require('express');
const Med = require('../models/Med');
const router = express.Router();

// 创建药材类别
router.post('/',async (req,res) => {
    const med = new Med({
        medname:req.body.medname,
        mednumber:req.body.mednumber
    });
    console.log(med.medname);
    console.log(med.mednumber);
    try{
        if(!med.medname){
            res.med({
                err:1,
                msg:"请输入药材名！"
            })
        }else if(!med.mednumber){
            res.med({
                err:2,
                msg:"请输入药材数量！"
            })
        }else{
            const savedPost = await med.save();
            res.med({
                err:200,
                msg:"评论成功！"
            })
        }
    }catch(err){
        res.json({ message: err});
    }
});

// 获取所有药材类别
router.get('/all', async (req,res) => {
    try{
        const meds = await Med.find();
        res.json(meds);
    }catch(err){
        res.json({message:err});
    }
});

// 根据药材类别id删除药材
router.delete('/:postId', async (req,res) => {
    try {
        const removedMed = await Med.remove({ _id: req.params.postId });
        res.json(removedMed);
    } catch (err) {
        res.json({ message:err });
    }
});

// 修改相应药材类别的药材数量
router.put('/:postId', async (req,res) => {
    try {
        const updatedMed = await Med.updateOne({ _id: req.params.postId },  { $set: {mednumber: req.body.mednumber}});
        // console.log(mednumber);
        res.json(updatedMed);
    } catch (err) {
        res.json({ message:err });
    }
});
module.exports = router