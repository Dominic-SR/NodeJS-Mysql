const { deleteProject } = require("../controller/project.controller");
const QueryGenerator = require("../generators/query.generator");
const database = require("../utils/database");

const ProjectModal ={

//Create Project   
    async addProject(projectData){
        let query=QueryGenerator.insert('projects',projectData);
        return database.promise().query(query);
    },

//Get Projects
    async getProject(){
        let query="select * from projects order by projects_id";
        return await database.promise().query(query);
    },

//Get By Id
    async getByProjectId(projects_id){
        let query=`select * from projects where projects_id = ${projects_id}`;
        return await database.promise().query(query);
    },

//Update By Id
    async updateProject(projects_id,projectData){
        let query=QueryGenerator.update('projects',projectData,{ projects_id:projects_id })
        return await database.promise().query(query)
    },

//Delete By Id
    async deleteProject(projects_id){
        let query=`delete from projects where projects_id = ${projects_id}`
        return await database.promise().query(query)
    }
}

module.exports = ProjectModal