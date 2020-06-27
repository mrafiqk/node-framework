var User = require("../models/user.model")

exports.authenticate = (id) => {
  return new Promise((result) => {
    User.findOne({_id: id, s: 'A'}, (err, docs) => {
      if(docs) {
        result(docs)
      } else {
        result({})
      }
    })
  })
}
