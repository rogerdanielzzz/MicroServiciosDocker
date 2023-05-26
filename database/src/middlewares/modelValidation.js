const { ClientError } = require("../utils/errors/index.js")

module.exports = (req, res, next) => {
    const { model } = req.params
    if (["Film", "Character", "Planet"].includes(model)) return next()
    else throw new ClientError("Invalid Model",400)
}