//load ObjectId-->
const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var idTodo = '5b96c18b52854b53a48744e1';

if(!ObjectId.isValid(idUser)){
  console.log('ID not valid');
}

Todo.find({
  _id: idTodo
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: idTodo
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(idTodo).then((todo) => {
  if (!todo){
    return console.log('Id not found');
  }
  console.log('Todo by id: ', todo);
}).catch((e) => console.log(e));

///test for user collection ->
var idUser = '5b963f7562b06d288098c586';

User.findById(idUser).then((user) => {
  if (!user){
    return console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
  console.log(e)
});
