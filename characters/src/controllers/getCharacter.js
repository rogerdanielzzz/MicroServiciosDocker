const data = require("../data/index.js")
const { response } = require("../utils/index.js")

module.exports = async (req, res) => {
    const characters = await data.get(req.params.id)
    response(res, 200, characters)
}