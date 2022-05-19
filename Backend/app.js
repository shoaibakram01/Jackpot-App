const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors = require('cors');
const mongoose=require('mongoose');
app.use(bodyParser.json());
app.use(cors());

// Routes
const users= require('./routes/userRoute');
const admin= require('./routes/adminRoute');
const lottery= require('./routes/lotteryRoute');

mongoose.connect("mongodb://127.0.0.1/jackpotTask", { useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection.once('open', function () {
    console.log('connection has been made')
}).on('error', function (error) {
    console.log(error)
});

app.use('/',users);
app.use('/',admin);
app.use('/',lottery);

app.listen(5000,()=>{
    console.log("Server started at 5000");
});