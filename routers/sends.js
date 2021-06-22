const express = require('express');
const router = express.Router();
const Send = require('../models/Send');

// 根据name查找我的帖子
router.post('/mine', async (req,res) => {
    let {sendname}=req.body
    try {
        const send = await Send.find({sendname});
        console.log(send);
        res.json(send);
    } catch (err) {
        res.json({ message:err });
    }
});

// 获取所有帖子
router.get('/all', async (req,res) => {
    try{
        const sends = await Send.find();
        res.json(sends);
    }catch(err){
        res.json({message:err});
    }
});

// 根据id查看帖子详情
router.get('/:postId', async (req,res) => {
    try {
        const send = await Send.findById(req.params.postId);
        res.json(send);
    } catch (err) {
        res.json({ message:err });
    }
});

// 发帖
router.post('/',async (req,res) => {
    //1.获取前端传递来的帖子主题和内容
    const send = new Send({
        sendtitle:req.body.sendtitle,
        sendcontent:req.body.sendcontent,
        sendname:req.body.sendname
    });
    //2.验证必传参数
    console.log(send.sendname)
    try{
        if(!send.sendtitle){
            res.send({
                err:1,
                msg:"主题不能为空！"
            })
            console.log(!send.sendtitle)
        }else if(!send.sendcontent){
            res.send({
                err:2,
                msg:"内容不能为空！"
            })
        }else if(!send.sendname){
            res.send({
                err:3,
                msg:"请重新登录！"
            })
        }else{
            const savedPost = await send.save();
            res.send({
                err:200,
                msg:"发帖成功！"
            })
            console.log(send.sendname)
        }
    }catch(err){
        cres.json({ message: err});
    }
});

module.exports = router