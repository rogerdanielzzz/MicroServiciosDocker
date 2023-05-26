const { ClientError } = require("../utils/errors/index.js")
module.exports = (req, res, next) => {
    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films } = req.body
    if (!name || !height || !mass || !hair_color || !skin_color || !eye_color || !birth_year || !gender || !homeworld || !films) throw new ClientError("Faltan Campos")
    return next()
}