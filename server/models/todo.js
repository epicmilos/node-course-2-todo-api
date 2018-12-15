var mongoose = require('mongoose');


var Todo = mongoose.model('Todo', {
  text:{
    type: String,
    required: [true, 'Text required'],
    minlength: 3,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};
