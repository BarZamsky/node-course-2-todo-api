//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url ,{ useNewUrlParser: true }, (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5b962fa87ed360b9334db338")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b950c47b0fb922080ad2a1d")
  }, {
    $set: {
      name: 'Bar'
    } ,
      $inc: {
        age: 1
      }
    } , {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  client.close();

});
