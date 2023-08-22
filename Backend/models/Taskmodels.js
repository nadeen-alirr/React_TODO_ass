const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subtasks: [String],
  status: {
    type: String,
    enum: ['todo', 'doing', 'done'], // Values can only be one of these three
    required: true,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;