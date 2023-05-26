const { response } = require("../utils/index.js")
const store = require("../database/index.js")


module.exports = async (req, res) => {
    const { model, id } = req.params
    const data = await store[model].get(id)
    response(res, 200, data)
}