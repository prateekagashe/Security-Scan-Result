const mongoose = require("mongoose");
const { MONGO_URL } = require("../config/constants");
var db = MONGO_URL;
function connectToDatabase() {
    mongoose.connect(process.env.MONGODB_URI || db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

    mongoose.connection.on('connected', () => {
        console.log('Mongoose is connected!!!!');
    });

}

module.exports = { connectToDatabase, mongoose };
