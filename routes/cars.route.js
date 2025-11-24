const express = require('express')
const {getCar} = require('../controller/cars.controller.js')

const route = express.Router()
route.get('/cars', getCar)
module.exports = route