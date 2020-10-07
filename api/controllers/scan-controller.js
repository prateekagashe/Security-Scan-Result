const crypto = require("crypto");
const ScanResults = require("../models/ScanResuts");
const Constants = require("../config/constants");
const constants = require("../config/constants");

// Function to create unique Scan Id
async function getNonExistingRandomId() {
    let tempId = "scanId_" + crypto.randomBytes(7).toString("hex");
    let checkId = await ScanResults.find({ scanId: tempId });
    if (checkId.length > 0) {
        return getNonExistingRandomId();
    } else return tempId;
}

var ScanContoller = {
    addNewScanResult: async function (req, res) {
        let id = await getNonExistingRandomId();
        let {
            status,
            repositoryName,
            findings,
            queuedAt,
            scanningAt,
            finishedAt,
        } = req.body;

        if (!status || !repositoryName || !findings) {
            res.status(Constants.BAD_REQUEST_ERROR_CODE);
            res.send(Constants.MISSING_FIELDS_ERROR);
            return;
        }

        let scanResult = {
            scanId: id,
            status: status,
            repositoryName: repositoryName,
            findings: findings,
            queuedAt: queuedAt,
            scanningAt: scanningAt,
            finishedAt: finishedAt,
        };

        try {
            let response = await ScanResults.create(scanResult);
            if (response) {
                res.status(constants.HTTP_SUCCESS_CODE);
                res.json(response);
                return;
            }
        } catch (error) {
            console.log(error);
        }
    },
    fetchScanResultBaseOnId: async function (req, res) {
        let { scanId } = req.query;
        if (!scanId) {
            res.status(Constants.BAD_REQUEST_ERROR_CODE);
            res.send(Constants.MISSING_FIELDS_ERROR);
            return;
        }
        try {
            let response = await ScanResults.findOne({ scanId });
            if (response) {
                res.status(constants.HTTP_SUCCESS_CODE);
                res.json(response);
                return;
            }
        } catch (error) {
            console.log(error);
        }
    },
    fetchAllScanResult: async function (req, res) {
        try {
            let response = await ScanResults.find();
            if (response) {
                res.status(constants.HTTP_SUCCESS_CODE);
                res.json(response);
                return;
            }
        } catch (error) {
            console.log(error);
        }
    },
    deleteScanResult: async function(req, res){
        let { scanId } = req.query;
        if (!scanId) {
            res.status(Constants.BAD_REQUEST_ERROR_CODE);
            res.send(Constants.MISSING_FIELDS_ERROR);
            return;
        }
        try{
            let response = await ScanResults.remove({scanId: scanId})
            if (response) {
                res.status(constants.HTTP_SUCCESS_CODE);
                res.json(response);
                return;
            }
        } catch(err){
            console.log(err)
        }
    }
};

module.exports = ScanContoller;
