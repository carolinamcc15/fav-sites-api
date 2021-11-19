const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const Site = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true,
    }
});

module.exports = Mongoose.model("Site", Site);