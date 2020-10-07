var express = require("express");
var router = express.Router();
var ScanResults = require('../controllers/scan-controller')


router.post(
    "/addNewScanResult",
    ScanResults.addNewScanResult
);

router.get(
    "/fetchScanResultBaseOnId",
    ScanResults.fetchScanResultBaseOnId
)
router.get(
    "/fetchAllScanResult",
    ScanResults.fetchAllScanResult
)
router.delete(
    "/deleteScanResult",
    ScanResults.deleteScanResult
)


module.exports = router;
