const { response } = require("../utils/index.js")
const store = require("../database/index.js")

module.exports = async (req, res) => {
    const { model } = req.params
    console.log(req.body)
    const data = await store[model].insert(req.body)
    response(res, 201, data)
}