// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error){
      return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c0c05759b0a901d686fc59b')
  // }).toArray().then((docs) => {
  // console.log('Todos');
  // console.log(JSON.stringify(docs, undefined, 2));
  // },(error) => {
  //   console.log('Unable to find', error);
  // });
  // db.close();

  // db.collection('Todos').find().count().then((count) => {
  // console.log(`Todos count: ${count}`);
  // console.log(JSON.stringify(docs, undefined, 2));
  // },(error) => {
  //   console.log('Unable to find', error);
  // });


  db.collection('Users').find({name: 'Misha'}).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  },(error)=>{
    console.log('Unable to find the user');
  });


});
