const { catchedAsync } = require("../utils/index.js")
module.exports = {
    getPlanet: catchedAsync(require("./getPlanet.js")),
    createPlanet: catchedAsync(require("./createPlanet.js")),
    listPlanets: catchedAsync(require("./listPlanets.js"))
}