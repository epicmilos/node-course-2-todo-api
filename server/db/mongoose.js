var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // set to use promisses

mongoose.connect(process.env.MongoDB_URI);

module.exports = {
  mongoose: mongoose // u ES6 moze da stoji samo mongoose
};
