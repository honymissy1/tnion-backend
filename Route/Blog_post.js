const express = require('express');
const router = express.Router()
const Blog = require('../model/blogPost');
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: false }))


router.get('/', async(req, res) =>{
    try{
        const Blogs = await Blog.find()  
        res.send(Blogs)
    }catch(err){
        res.status(401).json({error: err.massage})
    }
 
})


router.get('/:id', async(req, res) =>{
    const id = req.params.id
    try{
        const Blogs = await Blog.findOne({_id: id})  
        res.send(Blogs)
    }catch(err){
        res.status(401).json({error: err.message})
    }
})

router.put('/:id', async(req, res) =>{
    const id = req.params.id

    try{
        const update = await Blog.findByIdAndUpdate({_id: id}, {$push:{'comment': {name: req.body.name, content: req.body.content}}})
        res.send({message: 'Update Successsful'})
    }catch(err){
      res.status(400).json({error: err.message})
    }
})

module.exports = router