const { Schema } = require("mongoose")
const { ClientError } = require("../../utils/errors/index.js")

const characterSchema = new Schema({
    _id: {
        type: Number,
        default: 1,
    },
    name: String,
    height: Number,
    mass: Number,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: Date,
    gender: String,
    homeworld: { type: Number, ref: "Planet" },
    films: [
        { type: Number, ref: "Film" }
    ]
})

characterSchema.pre('save', async function (next) {
    if (this.isNew) {
        try {
            const lastCharacter = await this.constructor.findOne().sort({ _id: -1 }).limit(1);
            if (lastCharacter) {
                this._id = lastCharacter._id + 1;
            }
        } catch (error) {
            throw new ClientError('Error generating sequential _id',500);
        }
    }
    next();
});

characterSchema.statics.list = async function () {
    return await this.find()
        .populate("homeworld", ["name"])
        .populate("films", ["title"])
}

characterSchema.statics.get = async function (id) {
    return await this.findById(id)
        .populate("homeworld", ["name"])
        .populate("films", ["title"])
}

characterSchema.statics.insert = async function (character) {
    return await this.create(character)

}



module.exports = characterSchema