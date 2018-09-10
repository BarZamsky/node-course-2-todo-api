//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url ,{ useNewUrlParser: true }, (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

//deleteMany
var query = {text: 'eat lunch'};
  // db.collection("Todos").deleteMany(query).then((result) => {
  //   console.log(result);
  //   client.close();
  // });

//deleteOne
  // db.collection('Todos').deleteOne({text: "eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
// db.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then((result) => {
//   console.log(result);
// });

// db.collection('Users').findOneAndDelete({_id: new ObjectID("5b95133e7ed360b9334db050")}).then((result) => {
//   console.log(JSON.stringify(result, undefined, 2));
// });

});
