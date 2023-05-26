const { catchedAsync } = require("../utils/index.js")
module.exports = {
    getCharacter: catchedAsync(require("./getCharacter.js")),
    createCharacter: catchedAsync(require("./createCharacter.js")),
    listCharacters: catchedAsync(require("./listCharacters.js"))
}