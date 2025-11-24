const {writeFile, readFile} = require('../utils/fs.js')

function getCar(req, res) {
    let data = readFile("./cars.json")
    return res.json({
        message: "Success",
        data
    })
}

module.exports = {
    getCar
}