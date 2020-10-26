var models = require('../models')
var mongoose = require('mongoose')
exports.all = (req, res) => {
  models.db.workPerformance.find({}, function (err, results) {
    if (err) return console.error(err);
    console.log(results);
    res.json(results)
  })
}

exports.get = (req, res) => {
  models.db.workPerformance.findOne({_id: req.params.id}, function (err, user) {
    if (err) return console.error(err);
    console.log(user);
    res.json(user)
  })  
}

exports.getUserPerformance = (req, res) => {
  models.db.workPerformance.find({userId: mongoose.Types.ObjectId(req.params.userid)}, function (err, results) {
    if (err) return console.error(err);
    console.log(results);
    res.json(results)
  })  
}

exports.create = (req, res) => {
  var newWorkPerformance = new models.db.workPerformance({
    userId: mongoose.Types.ObjectId(req.body.userId), 
    date: new Date(req.body.date), 
    hoursSlept: parseFloat(req.body.hoursSlept).toFixed(1), 
    hoursOnTV: parseFloat(req.body.hoursOnTV).toFixed(1),
    workPerformance: parseInt(req.body.workPerformance)
  })
  newWorkPerformance.save(function (err, result) {
    if (err) return console.error(err);
    console.log(result)
    res.json({created: true})
  });
}

exports.update = (req, res) => {
  var workPerformance = {
    userId: mongoose.Types.ObjectId(req.body.userId), 
    date: new Date(req.body.date), 
    hoursSlept: parseFloat(req.body.hoursSlept).toFixed(1), 
    hoursOnTV: parseFloat(req.body.hoursOnTV).toFixed(1),
    workPerformance: parseInt(req.body.workPerformance)
  }
  models.db.workPerformance.updateOne({_id: req.body.id}, { $set: workPerformance }); 
}

exports.delete = (req, res) => {
  models.db.workPerformance.deleteOne({ _id: req.body.id })
  .then(result => {
    console.log(result);
    res.status(200).json({message: "Work performance record deleted"});
  });
} 