exports.getRequest = (role, controller, method_name, req, res) => {
  if(req.session.userdata || req.headers) {
    let id = req.session.userdata ? req.session.userdata._id : req.headers.authorization;
    if(role.includes('all')) {
      controller[method_name](req, res);
    } else {
      Authorization.authenticate(id).then(udata => {
        if(role.includes(udata.type)) {
          controller[method_name](req, res);
        } else {
          res.status(401).json({ code:401, message: 'Unauthorized User' });
        }
      });
    }
  } else {
    res.status(401).json({ code:401, message: 'Unauthorized User' });
  }
}
