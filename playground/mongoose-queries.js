const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server//models/user');



User.findById('5c111e508c677a4829c95a3c').then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((error) => console.log(error));

// var id = '5c16b4a6fa764ee03757c099';
//
// if(!ObjectID.isValid(id)){
//   console.log('id not valid');
// }
//
// Todo.find({
//   _id: id //passing id as a string, mongoose converts it into object id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id : id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('id not found');
//   }
//   console.log('TodoOne', todo);
// }).catch((error) => console.log(error));
