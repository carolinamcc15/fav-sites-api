const mongoose = require("mongoose");

const connect = async () => {
    await mongoose.connect('mongodb://localhost:27017/favoriteSites', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`CONNECTED TO MONGO!`);
    })
    .catch((err) => {
        console.log(`OH NO! MONGO CONNECTION ERROR!`);
        console.log(err);
    })
}

module.exports = { connect }