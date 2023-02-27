const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://admin:admin@cluster0.hxvgo.mongodb.net/?retryWrites=true&w=majority'

const dbname = 'user';

const client = new MongoClient(url);

client.connect(function(err){
  console.log("Connection is sucessfully");

  const db = client.db(dbname);

  client.close()

})