var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//process.env.PROD_MONGODB
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://bar123:bar1234@ds151612.mlab.com:51612/todos1' || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true} );

module.exports = {mongoose};
