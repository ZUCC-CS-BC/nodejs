const express = require('express');
const Doc = require('../models/Doc');
const router = express.Router();

// 创建医院
router.post('/',async (req,res) => {
    //1.获取前端传递来的医院名字和简介
    const doc = new Doc({
        docname:req.body.docname,
        docinfo:req.body.docinfo
    });
    //2.验证必传参数
    console.log(doc.docname);
    console.log(doc.docinfo);
    try{
        if(!doc.docname){
            res.doc({
                err:1,
                msg:"名字不能为空！"
            })
        }else if(!doc.docinfo){
            res.doc({
                err:2,
                msg:"内容不能为空！"
            })
        }else{
            const savedPost = await doc.save();
            res.doc({
                err:200,
                msg:"创建成功！"
            })
        }
    }catch(err){
        res.json({ message: err});
    }
});

// 获取所有医院
router.get('/all', async (req,res) => {
    try{
        const docs = await Doc.find();
        res.json(docs);
    }catch(err){
        res.json({message:err});
    }
});
module.exports = router