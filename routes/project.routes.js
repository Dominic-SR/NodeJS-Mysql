var express = require('express');
const ProjectController = require('../controller/project.controller');
const FileUpload = require('../utils/file');
// router instance
var router = express.Router();

//use base64 = FileUpload.base64ToImage("project_image","project_image"),

router.post('/', FileUpload.base64ToImage("project_image","project_image"), ProjectController.addProject)
router.get('/', ProjectController.getProject)
router.get('/:projects_id', ProjectController.getByProjectId)
router.put('/:projects_id', ProjectController.updateProject)
router.delete('/:projects_id', ProjectController.deleteProject)

module.exports=router;