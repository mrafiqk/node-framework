var resmodel = require('../utils/responseModel');

exports.getResponse = (err, data, input, res) => {
  if(err) {
    logger.error({ code:"#getUserError", error:err, input: input })
    errors = [{
      message:"DB Error! Please contact administrator."
    }]
    responseData = resmodel.formatResponse(500,null,errors,"failUserGet")
    res.status(500).json(responseData);
  } else {
    responseData = resmodel.formatResponse(200,data,null,"successUserGet")
    res.status(200).json(responseData);
  }
}
