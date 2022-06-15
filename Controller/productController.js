
const Posts = require("../models/productTable");


const productTable = async(req,res)=>{

  let newPost = new Posts(req.body);
  newPost.save((err)=>{
      if(err){
          return res.status(400).json({
              error:err
          });
      }
      return res.status(200).json({
          success:"Post saved successfully"
      });
  });

}


const productDeatails = async (req, res) => {
  Posts.find().exec((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingPosts: posts,
    });
  });
};



module.exports = {
  productDeatails,
};
