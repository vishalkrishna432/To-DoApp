const mongoose  = require('mongoose');



const TodoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    todo_date:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
        

    }
});

const Todolist = mongoose.model('Todolist',TodoSchema);

module.exports = Todolist;