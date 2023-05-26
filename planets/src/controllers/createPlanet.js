const { response } = require("../utils/index.js")
const data = require("../data/index.js")

module.exports = async (req, res) => {
    const characters = await data.create(req.body)
    response(res, 201, characters)
}