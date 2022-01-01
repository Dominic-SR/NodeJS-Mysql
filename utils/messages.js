module.exports.Message = {

    UserManagement:{
        SuccessMessage:{
            Create:"All Survey Forms are submitted successfully !"
            

        },
        FailureMessage:{
            Create:"All Survey Forms are not submitted !"

        }

    },
    UserRegister:{
        SuccessMessage:{
            Create:"User Register is submitted successfully !"

        },
        FailureMessage:{
            Create:"User Register Details is not submitted !",
            Id:"this User Id is already exists !"
        }
    },
    UserLogin:{
        SuccessMessage:{
            Create:"Login Successfully !"

        },
        FailureMessage:{
            Create:"Login Failed Please Try Again!",
        }
    },
    HouseholdManagement:{
        SuccessMessage:{
            Create:"Household Details is submitted successfully !"
        },
        FailureMessage:{
            Create:"Household Details is not submitted !"
        }
    },
    HousingManagement:{
        SuccessMessage:{
            Create:"Housing Details is submitted successfully !"
        },
        FailureMessage:{
            Create:"Housing Details is not submitted !"
        }
    },
    EconomyManagement:{
        SuccessMessage:{
            Create:"Economy and Industries Details is submitted successfully !"
        },
        FailureMessage:{
            Create:"Economy and Industries Details is not submitted!"
        }
    },
    TransportationManagement:{
        SuccessMessage:{
            Create:"Transportation Details is submitted successfully !"
        },
        FailureMessage:{
            Create:"Transportation Details is not submitted !"

        }
    },
    PhysicalManagement:{
        SuccessMessage:{
            Create:"Physical Infrastructure Details is submitted successfully !"
        },
        FailureMessage:{
            Create:"Physical Infrastructure Details is not submitted !"

        }
    },
    SocialManagement:{
        SuccessMessage:{
            Create:"Social Infrastructure Details is submitted successfully !"

        },
        FailureMessage:{
            Create:"Social Infrastructure Details is not submitted "

        }
    },
    SlumsManagement:{
        SuccessMessage:{
            Create:"Slums Details is submitted successfully !"

        },
        FailureMessage:{
            Create:"Slums Details is not submitted "

        }
    },
    CoastalManagement:{
        SuccessMessage:{
            Create:"Coastal Details is submitted successfully !"

        },
        FailureMessage:{
            Create:"Coastal Details is not submitted "

        }
    },
    EnvironmentalManagement:{
        SuccessMessage:{
            Create:"Environmental related Details is submitted successfully !"

        },
        FailureMessage:{
            Create:"Environmental related Details is not submitted "

        }
    },
    CulturalManagement:{
        SuccessMessage:{
            Create:"Cultural and Heritage Details is submitted successfully !"

        },
        FailureMessage:{
            Create:"Cultural and Heritage Details is not submitted "

        }
    },
    TourismManagement:{
        SuccessMessage:{
            Create:"Tourism Details is submitted successfully !"

        },
        FailureMessage:{
            Create:"Tourism Details is not submitted !"

        }
    },
    DeviceManagement:{
        SuccessMessage:{
            Create:"Device Id is created successfully !",
            fetch:"Device Id is Fetched Successfully !"
        },
        FailureMessage:{
            Create:"Device Id is not created !",
            IdExist:"Device Id is not exist !",
            fetch:"Error in fetching Device Id !"

        }
    },
    SurveyManagement:{
        SuccessMessage:{
            fetch:"Survey Id is fetched succesfully !",
            surveyDetails:"Survey Details is fetched successfully !",
            survey:"Survey Details is fetched successfully !"
        },
        FailureMessage:{
            fetch:"Device Id not exists !",
            surveyDetails:"Survey Id not exists !",
            survey:"Device Id not exists !"

        }
    },
    Common: {
        SuccessMessage: {
            Fetch(data = 'Data') { return `${data} fetched successfully !` },

            Creation(data = 'Data') { return `${data} created successfully !` },

            Send(data = 'Data') { return `${data} sent successfully !` },

            Updation(data = 'Data') { return `${data} updated successfully !` },
            Deletion(data = 'Data') { return `${data} updated successfully !` },
        },
        FailureMessage: {
            Fetch(data = 'Data') { return `${data} fetch failed, kindly retry !! ` },
            Send(data = 'Data') { return `${data} sent failed !` },

            Creation(data = 'Data') { return `${data} creation failed, kindly retry !!` },
            Updation(data = 'Data') { return `${data} updation failed, kindly retry !!` },
            Deletion(data = 'Data') { return `${data} deletion failed, kindly retry !!` },
            NotFound(data = 'Data') { return `No ${data}s found !!` },
            NoData: "No data found !",
            SomethingWnWrng: "Something went wrong we are trying to fix it. Please try again later !",
            TokenExpired: "Token expired !",
            InternalServerError: "Internal server error. Please try again later !",
            RowRefNotFound: "Reference not found please check and try again !",
            DataAlreadyExists: "Data already exists !",
            NoAccessToDelete: "No access to delete !",
            InvalidRef: "Invalid reference please check and try again !",
            NoAccess: "No access to this URL",
            ExistId:"Survey Id already exists !"

        }
    },

}