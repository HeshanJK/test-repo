const express = require('express');
const res = require('express/lib/response');
const posts = require('../models/productTable');
const Posts = require('../models/productTable');

const ProductRouter =require('../Controller/productController')

const router = express.Router();

//Save posts
//http://localhost:8000/productTable/save

router.post('/productTable/save' ,);

//Get posts
//http://localhost:8000/productDeatails

router.get('/productDeatails',);

//Get a specific post

router.get("/post/:id",(req,res)=>{
    let postId = req.params.id;

    Posts.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            post
        });
    });
})

//update posts

router.put('/post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

// delete posts

router.delete('/post/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessful",err
        });

        return res.json({
            message:"Delete Successfull" ,deletedPost
        });
    });
});


module.exports = router;
