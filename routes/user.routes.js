var express = require('express');
const userController = require('../controller/user.controller');
// router instance
var router = express.Router();

var UserController=require('../controller/user.controller')

router.post('/register',UserController.CreateUser)
router.post('/login',userController.LoginUser)

module.exports=router;