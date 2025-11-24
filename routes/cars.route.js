const express = require('express')
const {getCar, postCar} = require('../controller/cars.controller.js')

const route = express.Router()

route.get('/cars', getCar)
route.post('/cars', postCar)

module.exports = route