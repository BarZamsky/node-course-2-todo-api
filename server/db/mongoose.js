const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.set('useCreateIndex', true);
// MONGODB_URI = 'mongodb://bar123:bar1234@ds151612.mlab.com:51612/todos1';
mongoose.connect( process.env.MONGODB_URI, { useNewUrlParser: true});
//
module.exports = {mongoose};
