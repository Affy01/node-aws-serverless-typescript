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
//  // return mongoose.connect("")
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
 // return mongoose.connect()
 return mongoose.connect(process.env.MONGO_DB_URL)
   .then(db => {
     isConnected = db.connections[0].readyState;
   });
};
module.exports.testUrl = "testUrl";


// module.exports = connectToDatabase = () => {

//     const uri = "";
//     const client = new MongoClient(url);
//     return client;
// };
