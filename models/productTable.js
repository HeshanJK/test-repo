const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{    
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    re_Fill_Level:{
        type:String,
        required:true
    },
    added_Time:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('product' ,productSchema);