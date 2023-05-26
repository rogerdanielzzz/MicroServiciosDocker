const { ClientError } = require("../utils/errors/index.js")
module.exports = (req, res, next) => {
    const { title, opening_crawl, director, producer, release_date, characters, planets } = req.body
    if (!title || !opening_crawl || !director || !producer || !release_date || !characters || !planets) throw new ClientError("Faltan Campos")
    return next()
}