const mongoose = require("mongoose");
const { MONGO_URL } = require("../config/constants");
var db = MONGO_URL;

function connectToDatabase() {
    mongoose
        .connect(db)
        .then(() => {
            console.log("database connected..");
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = { connectToDatabase, mongoose };
