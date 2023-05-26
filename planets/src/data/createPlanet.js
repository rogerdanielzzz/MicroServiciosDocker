const axios = require("axios")
const { ClientError } = require("../utils/errors/index.js")
const { BASE_URl } = require("../config/index.js")

module.exports = async (newEl) => {
    try {
        const { data } = await axios.post(BASE_URl, newEl)
        return data.data
    } catch (error) {
        throw new ClientError(error.response.data.error, error.response.status)
    }
}