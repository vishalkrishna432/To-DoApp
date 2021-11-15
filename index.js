const express= require('express');
const port = 8000;


const db = require('./config/mongoose');
const Todo = require('./models/todo-list');

const app = express();



//connect to routes
app.use('/',require('./routes'))


//set up view engine
app.set('view engine','ejs');


 app.set('views','./views');

app.use(express.urlencoded());
app.use(express.static('assets'));



//listen whether the server is running on given port
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`)
    }

    console.log(`Server is running on the port : ${port}`)
})
