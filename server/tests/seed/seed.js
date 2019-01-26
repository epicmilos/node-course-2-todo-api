const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const jwt = require('jsonwebtoken');
const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users =[{
  _id: userOneId,
  email: 'misha1@primer.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'sv123').toString()
  }]
  },{
  _id: userTwoId,
  email: 'ina1@primer.com',
  password: 'userTwoPass'

}];

const todos = [{
  _id: new ObjectID(),
  text: 'f test 1'
},{
  _id: new ObjectID(),
  text: 's test 2',
  completed: true,
  completedAt: 333
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {

    return Todo.insertMany(todos);
  }).then(() => done());// passing a empty object is gona wipe our todos
};

const populateUsers = (done) => {
  User.remove({}).then(()=>{
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();
    return Promise.all([userOne,userTwo])
  }).then(()=>done());
};

module.exports={todos,populateTodos,users,populateUsers};
