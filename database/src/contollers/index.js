const { catchedAsync } = require("../utils/index.js")

module.exports = {
    listModel: catchedAsync(require("./listModel")),
    getModel: catchedAsync(require("./getModel")),
    postModel: catchedAsync(require("./postModel"))
}