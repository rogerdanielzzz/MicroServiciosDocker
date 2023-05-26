const { ClientError } = require("../utils/errors/index.js")
module.exports = (req, res, next) => {
    const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, residents, films } = req.body
    if (!name || !rotation_period || !orbital_period || !diameter || !climate || !gravity || !terrain || !surface_water || !residents || !films) throw new ClientError("Faltan Campos")
    return next()
}