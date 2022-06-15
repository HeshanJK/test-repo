const express = require('express')
const router = express.Router()
const orderController = require('../Controller/orderController')

router.post('/placeOrder', orderController.placeOrder)
router.get('/getAllOrder', orderController.getAllOrder)
router.post('/getOrderById',orderController.getOrderById)


module.exports = router