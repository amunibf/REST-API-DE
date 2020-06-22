const express = require('express');
const router = express.Router()
const Post = require('../models/Post')

router.get('/',async (req,res)=>{
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.json({message:error})
    }
})

router.get('/specific',(req,res)=>{
    res.send('We are on a specific post!')
})

router.post('/', async (req,res)=>{
    const post = new Post({
        title : req.body.title,
        description : req.body.description
    })

    /* post.save()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json({ message : err })
        })
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json({ message : err })
        }) */
    try {
        const savedPost = await post.save()
        res.json(savedPost)

    } catch (error) {
        res.json({message:error})
    }
   
})

router.get('/:postId', async (req,res)=>{
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch (error) {
        res.json({message:error})
    }
})

router.delete('/:postId', async (req,res)=>{
    try {
        const removedPost = await Post.deleteOne({_id : req.params.postId})
        res.json(removedPost)
    } catch (error) {
        res.json({message:error})
    }
})

router.patch('/:postId', async (req,res)=>{
    try {
        const updatedPost = await Post.updateOne(
            {_id : req.params.postId},
            {$set : {title : req.body.title, description : req.body.description}})
        res.json(updatedPost)
    } catch (error) {
        res.json({message:error})
    }
})




module.exports = router
