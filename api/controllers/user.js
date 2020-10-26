var models = require('../models')

exports.all = (req, res) => {
  models.db.user.find({}, function (err, users) {
    if (err) return console.error(err);
    console.log(users);
    res.json(users)
  })
}

exports.get = (req, res) => {
  models.db.user.findOne({_id: req.params.id}, function (err, user) {
    if (err) return console.error(err);
    console.log(user);
    res.json(user)
  })  
}

exports.create = (req, res) => {
  console.log("body")
  console.log(req.body)
  var newUser = new models.db.user({username: req.body.name, created: Date.now()})
  newUser.save(function (err, result) {
    if (err) return console.error(err);
    console.log(result)
    res.json({created: true})
  });
}

exports.update = (req, res) => {
  console.log(req.body)
  models.db.user.updateOne({_id: req.body._id}, { $set: { username: req.body.username } })
  .then((err, result) => {
    if(err) return console.error(err)
    res.json({result: result})
  })   
}

exports.delete = (req, res) => {
  models.db.user.deleteOne({ _id: req.body.id })
  .then((err, result) => {
    if(err) return console.error(err)
    res.json({deleted: true}) 
  })
}