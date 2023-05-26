const { Schema } = require("mongoose")
const { ClientError } = require("../../utils/errors/index.js")

const filmSchema = new Schema({
    _id: {
        type: Number,
        default: 1,
    },
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [
        { type: Number, ref: "Character" }
    ],
    planets: [
        { type: Number, ref: "Planet" }
    ]
})

filmSchema.pre('save', async function (next) {
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

filmSchema.statics.list = async function () {
    return await this.find()
        .populate("characters", ["name"])
        .populate("planets", ["name"])
}

filmSchema.statics.get = async function (id) {
    return await this.findById(id)
        .populate("characters", ["name"])
        .populate("planets", ["name"])
}


filmSchema.statics.insert = async function (film) {
    return await this.create(film)

}



module.exports = filmSchema