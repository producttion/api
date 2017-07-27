var experss = require('express');
// var mongoose = require('mongoose');
// var bodyParser = require('body-parser')

// mongoose.connect('mongodb://localhost/test');



var app = experss();

// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json);

// app.use('/api', require('./router/api'));
app.get('/', function(req, res) {

    res.send('api start');
});
app.listen(3000);
console.log('running port 3000');