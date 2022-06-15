const OrderItem = require('../models/orderItemModal')

// add item to order
const addItem = async (req, res) => {
    const orderItem = new OrderItem(req.body)
    orderItem
      .save()
      .then((data) => {
        res.status(200).send(data)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  }

 
  

  module.exports = {addItem};