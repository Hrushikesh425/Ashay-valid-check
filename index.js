const mongoose = require('mongoose');

const uri = 'mongodb+srv://hrushikeshgaware426:don12345@cluster0.u0ha3ku.mongodb.net/ValidCheck?retryWrites=true&w=majority';
mongoose.set("strictQuery",true)
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true,ssl:true })
  .then(() => {
    console.log('Connected to database');

    // Define a schema for your collection
    
    const mydata = async() => {
      const schema = new mongoose.Schema({
        name: String,
        CSN: String
      });
  
      // Define a model based on the schema
      
      const MyModel = mongoose.model('user-data', schema,'user-data');
        await MyModel.find({

        })
        .then(data => {
            console.log(data);
        })
        
    }
    // Query the collection and print the results
    mydata()
})