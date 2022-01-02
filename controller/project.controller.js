const { StatusCodes } = require("http-status-codes")
const { message } = require("statuses");
const ProjectModal = require("../models/project.model");
//const QueryGenerator = require("../generators/query.generator")
const projectModal = require("../models/project.model")
const SpErrorHandler = require("../utils/error-handler")
const { Message } = require("../utils/messages");
const Response = require("../utils/response");


const userController={
    async addProject(req,res){
        try{
            let{
                project_name,
                project_description,
                project_image
            }=req.body;
            var projectData ={
                project_name,
                project_description,
                project_image
            };
            if(projectData){
                let[project]=await projectModal.addProject(projectData);
                if(project){
                    new Response(
                        res,
                        StatusCodes.OK
                    )._SuccessResponse(
                        Message.ProjectRegister.SuccessMessage.Create
                    )
                }
            }
           
            
        }
        catch(err){
            /**
             * Handling err response
             */
             new SpErrorHandler(res, err)    
        }
    },
    async getProject(req,res){
        try{
            let[projects] = await ProjectModal.getProject();
            if(projects){
                new Response(
                    res,
                    StatusCodes.OK
                )._SuccessResponse(Message.Common.SuccessMessage.Fetch("projects"),projects)
            }
            else{
                new Response(
                    res,
                    StatusCodes.OK
                )._ErrorMessage(Message.Common.FailureMessage.NotFound("Projects"))
            }
        }
        catch(err){
            new SpErrorHandler(res,err)
        }
    },
    async getByProjectId(req,res){
        try{
            let {
                projects_id
            }=req.params

        if(projects_id){
            let[projetcs] = await ProjectModal.getByProjectId(projects_id)
            if(projetcs){
                new Response(
                    res,
                    StatusCodes.OK
                )._SuccessResponse(Message.Common.SuccessMessage.Fetch("Project"),projetcs)
            }
            else{
                new Response(
                    res,
                    StatusCodes.OK
                )._ErrorMessage(Message.Common.FailureMessage.NotFound("Project"))
            }  
        }
        }
        catch(err){
            new SpErrorHandler(res,err)
        }
    },
    async updateProject(req,res){
    try{
        let{projects_id}=req.params;
        let{project_name,
            project_description,
            project_image}=req.body;

            var projectsData = req.body;

            if(projects_id){
                let [projects]= await ProjectModal.updateProject(projects_id,projectsData)
                
                if(projects){
                    new Response(
                        res,
                        StatusCodes.OK
                    )._SuccessResponse(Message.Common.SuccessMessage.Updation("Project"))
                }
                else{
                    new Response(
                        res,
                        StatusCodes.Ok
                    )._ErrorMessage(Message.Common.FailureMessage.Updation("Project"))
                }
            }
        
        }
        catch(err){
            new SpErrorHandler(res,err)
        }
    },
    async deleteProject(req,res){
        try{
            let {projects_id} = req.params
            if(projects_id){
                let [projects] = await ProjectModal.deleteProject(projects_id)

                if(projects){
                    new Response(
                        res,
                        StatusCodes.OK
                    )._SuccessResponse(Message.Common.SuccessMessage.Deletion("Project"))
                }
                else{
                    new Response(
                        res,
                        StatusCodes.OK
                    )._ErrorMessage(Message.Common.FailureMessage.Deletion("Project"))
                }
            }
        }
        catch(err){
            new SpErrorHandler(res,err)
        }
    }
    
}

module.exports=userController;