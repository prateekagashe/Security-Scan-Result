const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment-timezone");
const { connectToDatabase } = require("./setup/database");
connectToDatabase();
const statusResult = require("./routes/scan-routes");
const app = express();
const http = require("http");
const { IST_TIMEZONE } = require("./config/constants");

const server = http.createServer(app);
const port = process.env.NODE_PORT || 5000;

app.use(bodyParser.json());

app.use(function (req, res, next) {
    // Logs Request
    let obj = {
        query: req.query,
        body: req.body,
        path: req.path,
    };
    console.log(
        moment(new Date().toISOString(), "YYYY-MM-DDTHH:mm:ss.sssZ")
            .tz(IST_TIMEZONE)
            .format("DD MMM hh:mm A"),
        obj
    );
    next();
});

app.use("/", statusResult);

//Start server
server.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});
