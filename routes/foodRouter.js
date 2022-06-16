const express = require('express')
const router = express.Router()
const foodController = require('../Controller/foodController')

router.post('/addFood', foodController.addFood)
router.get('/getAllFoods', foodController.getAllFoods)
router.post('/getFoodById', foodController.getFoodById) 
router.post('/getFoodByCategory', foodController.getFoodByCategory) 
router.put('/updateFoodById/:id', foodController.updateFoodById) 
router.delete('/deleteFoodById', foodController.deleteFoodById)  




module.exports = router