const express = require('express');
const Back = require('../models/Back');
const router = express.Router();

// 创建评论
router.post('/',async (req,res) => {
    const back = new Back({
        backId:req.body.backId,
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

// 获取所有医院
router.get('/all', async (req,res) => {
    try{
        const backs = await Back.find();
        res.json(backs);
    }catch(err){
        res.json({message:err});
    }
});
module.exports = router