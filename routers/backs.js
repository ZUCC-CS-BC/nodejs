const express = require('express');
const Back = require('../models/Back');
const router = express.Router();

// 创建评论
router.post('/:postid',async (req,res) => {
    const back = new Back({
        backId:req.params.postid,
        backname:req.body.backname,
        backcontent:req.body.backcontent
    });
    console.log(back.backId);
    console.log(back.backname);
    console.log(back.backcontent);
    try{
        if(!back.backname){
            res.back({
                err:1,
                msg:"请重新登录！"
            })
        }else if(!back.backId){
            res.back({
                err:2,
                msg:"内容不能为空！"
            })
        }else if(!back.backcontent){
            res.back({
                err:3,
                msg:"内容不能为空！"
            })
        }else{
            const savedPost = await back.save();
            res.back({
                err:200,
                msg:"评论成功！"
            })
        }
    }catch(err){
        res.json({ message: err});
    }
});

// 根据帖子类别id获取所有评论
router.post('/all/:postId', async (req,res) => {
    let {backId}=req.body;
    try{
        const backs = await Back.find({backId});
        res.json(backs);
    }catch(err){
        res.json({message:err});
    }
});

// 根据帖子id删除评论
router.delete('/:postId', async (req,res) => {
    try {
        console.log(req.params.postId);
        const removedBack = await Back.remove({ _id: req.params.postId });
        res.json(removedBack);
    } catch (err) {
        res.json({ message:err });
    }
});
module.exports = router