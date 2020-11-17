const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// const MongoClient = require('mongodb').MongoClient;

let isConnected;
// module.exports = connectToDatabase = () => {
//  if (isConnected) {
//    // console.log('=> using existing database connection');
//    return Promise.resolve();
//  }
//  // console.log('=> using new database connection');
//  // return mongoose.connect("mongodb://admin:admin@cluster0-shard-00-00.2vqcv.mongodb.net:27017,cluster0-shard-00-01.2vqcv.mongodb.net:27017,cluster0-shard-00-02.2vqcv.mongodb.net:27017/hello?ssl=true&replicaSet=atlas-qus5yr-shard-0&authSource=admin&retryWrites=true&w=majority")
//  return mongoose.connect(process.env.MONGO_DB_URL)
//    .then(db => {
//      isConnected = db.connections[0].readyState;
//    });
// };

module.exports.connectToDatabase = () => {
 if (isConnected) {
   // console.log('=> using existing database connection');
   return Promise.resolve();
 }
 // console.log('=> using new database connection');
 // return mongoose.connect("mongodb://admin:admin@cluster0-shard-00-00.2vqcv.mongodb.net:27017,cluster0-shard-00-01.2vqcv.mongodb.net:27017,cluster0-shard-00-02.2vqcv.mongodb.net:27017/hello?ssl=true&replicaSet=atlas-qus5yr-shard-0&authSource=admin&retryWrites=true&w=majority")
 return mongoose.connect(process.env.MONGO_DB_URL)
   .then(db => {
     isConnected = db.connections[0].readyState;
   });
};
module.exports.testUrl = "testUrl";


// module.exports = connectToDatabase = () => {

//     const uri = "mongodb+srv://admin:admin@cluster0.2vqcv.mongodb.net/hello?retryWrites=true&w=majority";
//     const client = new MongoClient(url);
//     return client;
// };
