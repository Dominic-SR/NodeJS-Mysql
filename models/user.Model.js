// const { CreateUser } = require("../controller/user.controller")
const QueryGenerator = require("../generators/query.generator")
const database = require("../utils/database")

const UserModal = {
    async CreateUser({
            role_id,
            user_name,
            email_id,
            contact_no,
            password,
            picture
    }){
        let query=QueryGenerator.insert('users',{
            role_id,
            user_name,
            email_id,
            contact_no,
            password,
            picture
        })
        return database.promise().query(query)
    },
    async LoginUser({email_id}){
        return database.promise().query(`select email_id,password from users where email_id = '${email_id}'`)
    }
}
module.exports=UserModal;