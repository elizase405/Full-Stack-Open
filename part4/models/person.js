const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        required: true
    },
    number: {
        type: String,
        match: /^\d{2,3}-\d{6,12}$/,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Person", personSchema)
