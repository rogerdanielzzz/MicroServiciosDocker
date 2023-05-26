const { ClientError } = require("../utils/errors/index.js")
module.exports = (req, res, next) => {
    const { id } = req.params
    if (!id) throw new ClientError("Faltan id por params")
    if (isNaN(parseInt(id))) throw new ClientError("ID param debe ser un numero")
    return next()
}