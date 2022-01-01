// const { CreateUser } = require("../controller/user.controller")
const QueryGenerator = require("../generators/query.generator")
const database = require("../utils/database")

const UserModal = {
    async CreateUser(userData){
        let query=QueryGenerator.insert('users',userData)
        return database.promise().query(query)
    },
    async LoginUser({user_email}){
        return database.promise().query(`select user_email,user_password from users where user_email = '${user_email}'`)
    }
}
module.exports=UserModal;