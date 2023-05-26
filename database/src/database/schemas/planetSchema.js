const { Schema } = require("mongoose")
const { ClientError } = require("../../utils/errors/index.js")

const planetSchema = new Schema({
    _id: {
        type: Number,
        default: 1,
    },
    name: String,
    rotation_period: Number,
    orbital_period: Number,
    diameter: Number,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: Number,
    residents: [
        { type: Number, ref: "Character" }
    ],
    films: [
        { type: Number, ref: "Film" }
    ]
})


planetSchema.pre('save', async function (next) {
    if (this.isNew) {
        try {
            const lastCharacter = await this.constructor.findOne().sort({ _id: -1 }).limit(1);
            if (lastCharacter) {
                this._id = lastCharacter._id + 1;
            }
        } catch (error) {
            throw new ClientError('Error generating sequential _id', 500);
        }
    }
    next();
});

planetSchema.statics.list = async function () {
    return await this.find()
        .populate("residents", ["name"])
        .populate("films", ["title"])
}

planetSchema.statics.get = async function (id) {
    return await this.findById(id)
        .populate("residents", ["name"])
        .populate("films", ["title"])
}

planetSchema.statics.insert = async function (planet) {
    return await this.create(planet)

}

module.exports = planetSchema