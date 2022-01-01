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
                user_name,
                user_email,
                user_password,
                user_about
            }=req.body;
            user_password = await bcrypt.hash(req.body.user_password,10);
            
            var UserData= {
                user_name,
                user_email,
                user_password,
                user_about
            };

            if(user_email.length){
                let[User]=await UserModal.CreateUser(UserData)
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
            user_email,
            user_password
        }=req.body;

        if(user_email.length){
        var UserData = await UserModal.LoginUser({user_email})
        if(UserData == undefined){
            new Response(
                res,
                StatusCodes.BAD_REQUEST
            )._ErrorMessage(
                Message.UserLogin.FailureMessage.Create
                )
        }

        var ValidPsw = await bcrypt.compare(req.body.user_password,UserData[0][0].user_password);
        console.log(ValidPsw);

        if(ValidPsw == true){
            var userToken = jwt.sign({user_email:UserData[0][0].user_email},'secretkey');
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