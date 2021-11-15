//require the library
const mongoose = require('mongoose');

//connect to databse
mongoose.connect('mongodb://localhost/ToDo_list_db');

//acquire the connection to check if it is succesful
const db= mongoose.connection;

//error
db.on('error',console.error.bind(console, 'error connecting to db'));

//up and running then print message
db.once('open',function(){
    console.log('Successfully connected to the database');
});