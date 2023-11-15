const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'Medium',
  },
  bucketId: {
    type: Number,
    enum: [1, 2, 3, 4],
    default: false,
  },
 userId :{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required:true
 }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
