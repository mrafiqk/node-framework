var User = require('../models/user.model');
var UserResponse = require('../responses/user.res');

exports.getUser = (req,res) => {
  let query = {s:"A"};
  query._id = req.params.id;
  User.findOne(query, (err, docs)=>{
    UserResponse.getResponse(err, docs, query, res)
  })
}
