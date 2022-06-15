const express = require('express')
const router = express.Router()
const userController = require('../Controller/userController')

router.post('/addUser', userController.add)
router.post('/login', userController.login)
router.post('/getUserById', userController.getUserById)
router.get('/getAllUsers', userController.getAllUsers)
router.post('/deleteUserById', userController.deleteUserById)

module.exports = router

