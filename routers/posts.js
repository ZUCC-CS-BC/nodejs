const express = require('express');
const router = express.Router();
const Post = require('../models/Post')


// GET BACK ALL THE POSTS
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

// SUBMITS A POST
// router.post('/', async (req,res) => {
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     });
//     try{
//         const savedPost = await post.save();
//         res.json(savedPost);
//     }catch(err){
//         res.json({message: err});
//     }
// });
router.post('/', async (req,res) => {
    const post = new Post({
        name:req.body.name,
        account:req.body.account,
        password:req.body.password
    });
    try{
        const login =await Post.find({account:post.account});
        console.log(login);
        if(login.length>0){
            res.send({
                err:1,
                msg:"该账号已被注册！",  
            })
        }else{
            const savedPost = await post.save();
        
            res.send({
                err:200,
                msg:"恭喜您，注册成功！",  
            })
        }   
    }catch(err){
        res.json({ message: err });
    }
});

// SPECIFIC POST
router.get('/:postId', async (req,res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message:err });
    }
});

// Delete Post
router.delete('/:postId', async (req,res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ message:err });
    }
});

// Update a post
router.patch('/:postId', async (req,res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId }, { $set: {title: req.body.title}});
        res.json(updatedPost);
    } catch (err) {
        res.json({ message:err });
    }
});

module.exports = router