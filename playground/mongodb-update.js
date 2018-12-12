// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error){
      return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  // db.collection('Users').findOneAndUpdate({
  //   _id : new ObjectID('5c0c16d19c32bf0ba8f93f00')
  // },{
  //   $set: {location: 'Ratina 630'}
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('5c0c16d19c32bf0ba8f93f00')
  },{
    $inc: {age: 1}
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  //db.close
});
