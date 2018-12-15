var express = require('express');
var bodyParser = require('body-parser'); //takes JSON and converts it into object

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());//config the midlewear
//if we are writing custom midlewear itl be a funnction

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
    //console.log(req.body); // sending JSON to express app. body gets stored by body-parser
    //setting up a route and passing twoo arguments - url and callback (req, res)
  });
  todo.save().then((doc) => {
    res.send(doc); //this gives the user information id and compilted property
  }, (error) => {
    res.status(400).send(error);
  });
});

app.listen(3000, () => {
  console.log('started on port 3000');
});






// var newTodo2 = new Todo({
//   text: 'Take out the trash',
//   // completed: true,
//   // completedAt: Date.now() //??
//
// });
//
// newTodo2.save().then((doc) => {
//   console.log('Saved', doc);
// },(error) => {
//   console.log('Unable to save', error);
// });

var newUser = new User({
  email: 'epicmilos@gmail.com',

});

newUser.save().then((doc) => {
  console.log('Saved', doc);
},(error) => {
  console.log('Unable to save');
});
