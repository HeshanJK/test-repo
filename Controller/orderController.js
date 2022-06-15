const Order = require('../models/orderModel')


// place order
const placeOrder = async (req, res) => {
    const order = new Order(req.body)
    order
      .save()
      .then((data) => {
        res.status(200).send(data)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  }

  // get all orders
  const getAllOrder = async (req, res) => {
    Order.find()
      .then((data) => {
        res.status(200).send(data)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  }

   // get order by Id
   const getOrderById = async (req, res) => {
    Order.findById(req.body.id)
      .then((data) => {
        res.status(200).send(data)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  }


  

  module.exports = {placeOrder,getAllOrder,getOrderById};