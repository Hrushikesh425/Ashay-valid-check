const express = require('express');
const mongoose = require("mongoose");

const app = express();

const uri = 'mongodb+srv://hrushikeshgaware426:don12345@cluster0.u0ha3ku.mongodb.net/ValidCheck?retryWrites=true&w=majority'
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const dataSchema = new mongoose.Schema({
    name: String,
    CSN: String
});

const MyModel = mongoose.model('user-data', dataSchema,'user-data')

app.get('/api/:CSN', (req, res) => {
    const CSN = req.params.CSN;
    
    MyModel.find({ CSN:CSN }).select('-_id name Approved').exec((err,users) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else if (users.length === 0){
            res.status(404).send('CSN not found');
        }else{
            res.send(users);
            console.log(users);
        }
    })
})

const port = 4000;

app.listen(port, () => {
    console.log("Server started on port " + port);
})