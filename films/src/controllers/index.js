const { catchedAsync } = require("../utils/index.js")
module.exports = {
    getFilm: catchedAsync(require("./getFilm.js")),
    createFilm: catchedAsync(require("./createFilm.js")),
    listFilms: catchedAsync(require("./listFilms.js"))
}   