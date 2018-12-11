// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj); pravljenje novog IDa korisnika



// var user = {name: 'misha', age:31};
// var{name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
//MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) =>
//ako je novija verzija MongoDB-a koristi se zakomentarisani kod
  if(error){
      return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');
//const db = client.db('TodoApp')

// db.collection('Todos').insertOne({text: 'Misha Some Data', completed: false},
// (error, result) => {
//   if(error){
//     return console.log('Unable to insert Todos', error);
//   }
//   console.log(JSON.stringify(result.ops, undefined, 2));
// });

db.collection('Users').insertOne(
  {name: 'Misha', age: 31, location: 'Ratina'},
  (error, result) => {
    if(error){
      return console.log('Unable to do the action');
    }
    console.log(result.ops[0]._id.getTimestamp());
  });
  db.close();
//client.close();
});
