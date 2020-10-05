var mongoose = require('mongoose');

var ScanResult = new mongoose.Schema({
    scanId: {
        type: String,
        unique: true
      },
    status:String,
    repositoryName: String,
    findings:Object,
    queuedAt:String,
    scanningAt:String,
    finishedAt:String
},{collection:'scanResult'});


var ScanResult = module.exports = mongoose.model('scanResult', ScanResult);
