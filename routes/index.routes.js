var express = require("express");

var router = express.Router();

var UserRouter = require('./user.routes')

router.use('/',UserRouter)

module.exports=router;