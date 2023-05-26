const axios = require("axios")
const { ClientError } = require("../utils/errors/index.js")
const { BASE_URl } = require("../config/index.js")

module.exports = async () => {
    try {
        const { data } = await axios.get(BASE_URl)
        return data.data
    } catch (error) {
        throw new ClientError(error.response.data.error, error.response.status)
    }
}