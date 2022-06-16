const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    foodName:{    
        type:String,
        //required:true
    },
    price:{
        type:Number,
        //required:true
    },
    category:{
        type:String,
        //required:true
    },
    EstimateTime:{
        type:String,
        //required:true
    },
    image:{
        type:String,
        //required:true
    },
    chefId:{
        type:String,
        //required:true
    },
    adminId:{
        type:String,
        //required:true
    }
})

module.exports = mongoose.model('Foods' ,FoodSchema);