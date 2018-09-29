var express = require('express');
var router = express.Router();
const Entries = require('../Model/entryModel');
/* GET all enrty listing. */
router.get('/entries', function(req, res, next) {
    Entries.find(req.body.entry, function (err, entries) { //Use the findID method on the data model to search DB
        if (err) {
            throw err; // If we get an error then bail
        }
        console.log("Here");
        // Use Express to send the JSON back to the client in the web response
        res.send(entries);
    });


});

module.exports = router;
