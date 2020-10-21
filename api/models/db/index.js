const mongoose = require('mongoose');
var connectionString = "mongodb://localhost:27017/test"
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

exports.user = require('./user').User
