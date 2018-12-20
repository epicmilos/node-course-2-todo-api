var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // set to use promisses

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose: mongoose // u ES6 moze da stoji samo mongoose
};
