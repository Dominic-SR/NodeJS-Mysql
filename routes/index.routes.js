var express = require("express");

var router = express.Router();

var UserRouter = require('./user.routes')
var ProjectRouter = require('./project.routes')


router.use('/user',UserRouter)
router.use('/project',ProjectRouter)

module.exports=router;