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


  // db.collection('Users').find({name: 'Misha'}).toArray().then((docs)=>{
  //   console.log('Users');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(error)=>{
  //   console.log('Unable to find the user');
  // });

  // db.collection('Todos').deleteMany({text: 'lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'lunch'}).then((result) => {
  //   concole.log(result);
  // });
  //
  // db.collection('Todos').deleteOne({text: 'dx'}).then((result) => {
  //   console.log(result);
  // });
  //
  // db.collection('Todos').findOneAndDelete({text: 'dx2'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Test'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id : new ObjectID('5c10eb3dab715d1f34301fc6')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

});
