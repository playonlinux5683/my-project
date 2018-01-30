import mongoose = require('mongoose');

mongoose.Promise = global.Promise;
if (process.env.MONGO_DB_USER && process.env.MONGO_DB_PWD) {
  mongoose.connect("mongodb://" + process.env.MONGO_DB_USER + ":" + process.env.MONGO_DB_PWD + "@127.0.0.1:28017/project", { useMongoClient: true });
} else if (process.env.TEST) {
  mongoose.connect("mongodb://127.0.0.1:28017/" + process.env.TEST_DB, { useMongoClient: true });
} else {
  mongoose.connect("mongodb://127.0.0.1:28017/project", { useMongoClient: true });
}

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error : '));
db.once('open', function () {
  console.log('Connection ok!');
});

module.exports = mongoose;
