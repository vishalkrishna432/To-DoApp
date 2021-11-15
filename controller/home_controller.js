const Todolist = require("../models/todo-list");
var moment = require('moment');


module.exports.home = function(req,res){

    Todolist.find({},function(err,todos){
        //console.log(todos);
        if(err){
            console.log("error in fetching todolist from db");
            return;
        }

        return res.render('home',{
            title:"Todo List",
            TODO_List:todos,moment:moment
        });
    });


   
}


module.exports.listpost = function(req,res){
    
    Todolist.create({
        description:req.body.description,
        todo_date:req.body.todo_date,
        category:req.body.category
    },function(err,newList){
        if(err){
            console.log('error in creating a Todo list');
            return;
        }

       // console.log('**********',newList)
        return res.redirect('back');
    })
    // return res.redirect('back');
  

}

//delete the list
module.exports.listdelete = function(req,res){

    // get the id from the query in ul
    let id= req.query.id;

    // find the contact in the database using id and delete
    Todolist.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting an object');
            return;
        }

        return res.redirect('back');
    });

}

module.exports.getupdate= function(req,res){
    let id = req.params.id;
    Todolist.find({}, (err, tasks) => {

    return res.render("todo_edit.ejs", { todoTasks: tasks, idTask: id ,moment:moment});
});
}

//post the updated list
module.exports.postupdate =function(req,res){
    let id = req.params.id;
Todolist.findByIdAndUpdate(id, { description: req.body.description }, err => {
if (err) return res.send(500, err);
 return res.redirect('/');
});
}
