var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // set to use promisses

mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose: mongoose // u ES6 moze da stoji samo mongoose
};
