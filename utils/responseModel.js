const messages = {
    "unknow_error" :"Unknown Error! please contact administrator",
    "Unauthorized": "Username or password is incorrect",
    "failUserGet": "Failed to get user",
    "successUserGet": "User fetched successfully"
}


exports.formatResponse=(code,data,errors,messageCode)=>{
    let responseData = {}
    switch(code){
        case 200:
            responseData.code = 200;
            data?responseData.data = data:null;
            break;
        case 400:
            responseData.code = 400;
            responseData.data = data;
            responseData.errcode = messageCode;
            break;
        case 401:
            responseData.code = 401;
            responseData.errors = errors
            responseData.errcode = messageCode;
            break;
        case 500:
            responseData.code = 500;
            responseData.errors = errors
            responseData.errcode = messageCode;
            break;
    }

    responseData.message= messages[messageCode];
    return responseData;

}
