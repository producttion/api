 var experss = require('express');
 var mongoose = require('mongoose');
 var MongoClient = require('mongodb').MongoClient;
 var bodyParser = require('body-parser')
 var uri = 'mongodb://127.0.0.1:27017/test';

 mongoose.connect(uri, function(err, db) {

     consloe.log("connect")
 })

 //  MongoClient.connect(uri, function(err, db) {
 //      if (err) throw err;
 //      console.log("Database created!");

 //  });
 var app = experss();

 app.use(bodyParser.urlencoded({
     extended: true
 }));
 app.use(bodyParser.json);

 app.use('/api', require('./router/api'));
 app.listen(3000);

 console.log('running port 3000');