const mongoose = require("mongoose")
const { MONGO_URI } = require("../config/env.js")



const conn = mongoose.createConnection(MONGO_URI + "?retryWrites=true&w=majority")


module.exports = {
    Character: conn.model("Character", require("./schemas/characterSchema.js")),
    Planet: conn.model("Planet", require("./schemas/planetSchema.js")),
    Film: conn.model("Film", require("./schemas/filmSchema.js"))
}
