const express = require('express')
const userRoute = require('./routes/users.route.js')


const app = express()
app.use(express.json())


app.use(userRoute)
app.listen(8080, () => console.log(8080))