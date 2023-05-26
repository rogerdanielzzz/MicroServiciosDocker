const { response } = require("../utils/index.js")
const store = require("../database/index.js")

module.exports = async (req, res) => {
    const { model } = req.params
    const data = await store[model].list()
    response(res, 200, data)
}