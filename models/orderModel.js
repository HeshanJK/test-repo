const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
   
    userId: {
      type: Number,
    },   
    waiterId: {
      type: Number,
    },
    date:{
      type: Date,
      default: Date.now
    }
    
  });
  
  module.exports = mongoose.model("Orders", OrderSchema);
  