//load ObjectId-->
const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

// remove()==deleteMany()
// Todo.remove().then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5b978b597ed360b9334dbf21'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5b978b597ed360b9334dbf21').then((todo) => {
  console.log(todo);
});
