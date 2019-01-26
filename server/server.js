require('./config/config');

var _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser'); //takes JSON and converts it into object
var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');
var {authenticate} = require('./middleware/authenticate');




var app = express();

const port = process.env.PORT;

app.use(bodyParser.json());//config the midlewear
//if we are writing custom midlewear itl be a funnction

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
    //console.log(req.body); // sending JSON to express app. body gets stored by body-parser
    //setting up a route and passing two arguments - url and callback (req, res)
  });
  todo.save().then((doc) => {
    res.send(doc); //this gives the user information id and compilted property
  }, (error) => {
    res.status(400).send(error);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});// its good practice to use object here. if we use array we cant add another property
  },(error) =>{
    res.status(400).send(error);
  });
});

app.get('/todos/:id',(req,res)=>{
  //res.status(req.params);
  var id = req.params.id;


if(!ObjectID.isValid(id)){
  return res.status(404).send();
}

// findById
// success
// if todo - send it back
// if no todo - 404 with empty body
// error - 400 with empty body

Todo.findById(id).then((todo)=>{
  if(!todo){
    return res.status(404).send();
  }
  res.send({todo});
  }).catch((error)=>{
  res.status(400).send();
  });
});


app.delete('/todos/:id', (req,res)=>{
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send(); //return prevents the rest of the function from being executed
  }

  Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();//send iniciates the response without body data
    }
    res.send({todo});
  }).catch((e)=>{

  res.status(400).send();
  });
});

app.patch('/todos/:id',(req,res)=>{
  var id = req.params.id;
  var body = _.pick(req.body,['text','completed']);

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  }else{
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo)=>{
    if(!todo){
    return res.status(404).send();
    }
    res.send({todo});
  }).catch((error)=>{
    res.status(400).send();
  })
});

app.post('/users',(req,res)=>{
  var body = _.pick(req.body,['email','password']);
  var user = new User(body);


  user.save().then(()=>{
    return user.generateAuthToken();
    // res.send(user);
  }).then((token)=>{
    res.header('x-auth', token).send(user);
  }).catch((error)=>{
    res.status(400).send(error);
  })
});



app.get('/users/me',authenticate,(req,res)=>{
  res.send(req.user);
});

app.post('/users/login',(req,res)=>{
  var body = _.pick(req.body,['email','password']);
  res.send(body);

  User.findByCredentials(body.email,body.password).then((user)=>{
    return user.generateAuthToken().then((token)=>{
      res.header('x-auth', token).send(user);
    });
  }).catch((error)=>{
    res.status(400).send();
  });
});

  // var token = req.header('x-auth');
  // User.findByToken(token).then((user)=>{
  //   if(!user){
  //     return Promise.reject();
  //   }
  //   res.send(user);
  // }).catch((error)=>{
  //   res.status(401).send();
  // });


app.listen(port, () => {
  console.log(`started up at port ${port}`);
});

module.exports = {app};




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

// var newUser = new User({
//   email: 'epicmilos@gmail.com',
//
// });
//
// newUser.save().then((doc) => {
//   console.log('Saved', doc);
// },(error) => {
//   console.log('Unable to save');
// });
