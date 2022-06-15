const mongoose = require("mongoose");

const OrderItemSchema = mongoose.Schema({
  orderId: {
    type: Number,
  },
  itemId: {
    type: Number,
  },
  isFinished: {
    type: Boolean,
    default: false,
  },
  quantity: {
    type: Number,
  },
});

module.exports = mongoose.model("OrderItems", OrderItemSchema);
