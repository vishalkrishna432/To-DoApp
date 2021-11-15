const express = require('express');
var bodyParser = require('body-parser')

const router = express.Router();
var jsonParser = bodyParser.json()

//connect to controller
const homeController = require('../controller/home_controller')

var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
router.get('/',homeController.home);

router.post('/todo_list',urlencodedParser,homeController.listpost );

router.get('/delete-list/', homeController.listdelete);

router.get('/edit/:id',homeController.getupdate);

router.post('/edit/:id',urlencodedParser,homeController.postupdate);

module.exports = router;