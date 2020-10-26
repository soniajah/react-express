const mongoose = require('mongoose')

const workPerformanceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    // ref: 'user', 
    required: [true, 'User Id is required']    
  },
  date: {
    type: Date,
    required: [true, 'Date is required']
  },
  hoursSlept: {
    type: Number,
    required: [true, 'User Id is required']
  },
  hoursOnTV: {
    type: Number,
    required: [true, 'User Id is required']
  },
  workPerformance: {
    type: Number,
    required: [true, 'is required']
  }  
})

const workperformance = mongoose.model('workperformance', workPerformanceSchema, 'workperformance')

module.exports.workperformance = workperformance