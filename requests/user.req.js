var userCtrl = require('../controller/user.ctrl');

exports.getRequest = (role, method_name, req, res) => {
  if(req.session.userdata || req.headers) {
    let id = req.session.userdata ? req.session.userdata._id : req.headers.authorization;
    if(role == 'all') {
      userCtrl[method_name](req, res);
    } else {
      Authorization.authenticate(id).then(udata => {
        if(role == udata.type) {
          UserCtrl[method_name](req, res);
        } else {
          res.status(401).json({ code:401, message: 'Unauthorized User' });
        }
      });
    }
  } else {
    res.status(401).json({ code:401, message: 'Unauthorized User' });
  }
}
