var express = require('express');
var router = express.Router();


router.get('/product', function(req, res) {

    res.send('api start');
});

module.exports = router;