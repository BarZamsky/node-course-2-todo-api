var mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/TodoApp';
mongoose.Promise = global.Promise;
//process.env.PROD_MONGODB
mongoose.connect('mongodb://bar123:bar1234@ds151612.mlab.com:51612/todos1' || url, { useNewUrlParser: true });

module.exports = {mongoose};
