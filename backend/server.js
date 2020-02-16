const express = require('express');
//const bodyParser = require('body-parser');
const cors =  require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect( uri, {useUnifiedTopology: true, useNewUrlParser: true,useCreateIndex:true}, () => { console.log("MongoDB database conection established successfully")}).catch(err => console.log(err));

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//emitter.setMaxListeners();

app.listen(port, () => {
    console.log('Server is running on port : ' + port);
});

