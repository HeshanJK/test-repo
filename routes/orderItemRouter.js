const express = require('express')
const router = express.Router()
const orderItemController = require('../Controller/orderItemController')

router.post('/addItem', orderItemController.addItem)



module.exports = router