const axios = require('axios');

function getContentType(){

    return {
        '0':"multipart/form-data",
        '1':"application/json",
        '2':"image/jpg"
    }
}

exports.makeExternalCall = async (options,contentType)=>{
    if(options['headers']) {
      options['headers']['Content-Type'] = getContentType()[contentType]
    } else {
      options['headers'] = { 'Content-Type': getContentType()[contentType] }
    }
    let args ={
        method: options.method,
        url: options.url,
        data: options.data,
        headers: options.headers
    }
    if(contentType == '2') {
      args['responseType'] = 'stream'
    }
    logger.info({code:"#SMSINITLOG", args})
    return await axios(args).then(({data,status,statusText}) => {
        return {data,status,statusText};
    })
    .catch(error => {
        console.log(error,"error")
        throw(error);
    });
}
