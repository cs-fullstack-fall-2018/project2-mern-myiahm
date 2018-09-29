var express = require('express');
var router = express.Router();

/* GET username listing. */
router.get('/usernames', function(req, res, next) {
    Entries.find(req.body.username, function (err, username) { //Use the findID method on the data model to search DB
        if (err) {
            throw err; // If we get an error then bail
        }
        // Use Express to send the JSON back to the client in the web response
        res.send(username);
    });

});

module.exports = router;
