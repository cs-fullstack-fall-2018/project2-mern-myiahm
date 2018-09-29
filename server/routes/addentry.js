var express = require('express');
var router = express.Router();
const Entries = require('../Model/entryModel');
const moment = require('moment');

/* add a entry. */
router.post('/newentry', function (req, res, next) {
    const newEntry = Entries({
        username: req.body.username,
        Title: req.body.Title,
        entry: req.body.entry,
        date: moment()
    });

    newEntry.save(function (err) {
        if (err) {
            throw err; // If we get an error then bail
        }
        // Use Express to send a simple SUCCESS message
        console.log("It's SAVED!!!!!!!!!!!!")
        console.log(newEntry);
        res.send(newEntry);
    });
});
    module.exports = router;
