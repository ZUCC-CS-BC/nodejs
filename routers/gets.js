const express = require('express');
const router = express.Router();
const Send = require('../models/Send');

router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router