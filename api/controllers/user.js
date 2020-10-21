var models = require('../models')

exports.all = (req, res) => {
  models.db.user.find({}, function (err, users) {
    if (err) return console.error(err);
    console.log(users);
    res.json({users: users})
  })
}

exports.add = (req, res) => {  
  res.json({})
}

exports.create = (req, res) => {
  var newUser = new models.db.user({username: req.body.username, created: Date.now()})
  newUser.save(function (err, result) {
    if (err) return console.error(err);
    console.log(result)
    res.json({success: true})
  });
}

exports.edit = (req, res) => {
  res.json({})  
}

exports.update = (req, res) => {
  res.json({})  
}

exports.delete = (req, res) => {
  res.json({})  
}