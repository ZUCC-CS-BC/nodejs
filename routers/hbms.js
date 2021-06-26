const express = require('express');
const Hbm = require('../models/Hbm');
const router = express.Router();

// 创建药材
router.post('/:postId',async (req,res) => {
    const hbm = new Hbm({
        hbmid:req.params.postId,
        hbmname:req.body.hbmname,
        hbmkind:req.body.hbmkind
    });
    // console.log(hbm.hbmname);
    // console.log(hbm.hbmkind);
    try{
        if(!hbm.hbmname){
            res.hbm({
                err:1,
                msg:"请输入药材名！"
            })
        }else if(!hbm.hbmkind){
            res.hbm({
                err:2,
                msg:"请输入药材数量！"
            })
        }else{
            const savedHbm = await hbm.save();
            res.hbm({
                err:200,
                msg:"评论成功！"
            })
        }
    }catch(err){
        res.json({ message: err});
    }
});

// 根据药材类别id获取所有药材
router.post('/all/:postId', async (req,res) => {
    let {hbmid}=req.body;
    try{
        const meds = await Hbm.find({hbmid});
        res.json(meds);
    }catch(err){
        res.json({message:err});
    }
});

// 根据药材类别id删除药材
router.delete('/:postId', async (req,res) => {
    try {
        const removedMed = await Hbm.remove({ _id: req.params.postId });
        res.json(removedMed);
    } catch (err) {
        res.json({ message:err });
    }
});

// 修改相应药材类别的药材数量
router.put('/:postId', async (req,res) => {
    try {
        const updatedHbm = await Hbm.updateOne({ _id: req.params.postId },  { $set: {mednumber: req.body.mednumber}});
        // console.log(mednumber);
        res.json(updatedHbm);
    } catch (err) {
        res.json({ message:err });
    }
});
module.exports = router