const { StatusCodes } = require("http-status-codes")
const { message } = require("statuses")
//const QueryGenerator = require("../generators/query.generator")
const UserModal = require("../models/user.Model")
const SpErrorHandler = require("../utils/error-handler")
const { Message } = require("../utils/messages");
const Response = require("../utils/response");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController={
    async CreateUser(req,res){
        try{
            let{
                role_id,
                user_name,
                email_id,
                contact_no,
                password,
                picture
            }=req.body;
            password = await bcrypt.hash(req.body.password,10);
            //console.log(req.body)
            if(email_id.length){
                let[User]=await UserModal.CreateUser({
                role_id,
                user_name,
                email_id,
                contact_no,
                password,
                picture
                })
            if(User){
                new Response(
                    res,
                    StatusCodes.OK
                )._SuccessResponse(
                    Message.UserRegister.SuccessMessage.Create
                )
            }
            else{
                new Response(
                    res,
                    StatusCodes.BAD_REQUEST
                )._ErrorMessage(
                    Message.UserRegister.FailureMessage.Create
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

    async LoginUser(req,res){
    try{
        let{
            email_id,
            password
        }=req.body;
        console.log(req.body)
        if(email_id.length){
        var UserData = await UserModal.LoginUser({email_id})
        if(UserData == undefined){
            new Response(
                res,
                StatusCodes.BAD_REQUEST
            )._ErrorMessage(
                Message.UserLogin.FailureMessage.Create
                )
            }
        
        var ValidPsw = await bcrypt.compare(req.body.password,UserData[0][0].password);
        if(ValidPsw == true){
            var userToken = jwt.sign({email_id:UserData[0][0].email_id},'secretkey');
            res.header('auth',userToken).json(userToken);
            
        }
    else{
                new Response(
                    res,
                    StatusCodes.BAD_REQUEST
                )._ErrorMessage(
                    Message.UserLogin.FailureMessage.Create
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
    }
}

module.exports=userController;