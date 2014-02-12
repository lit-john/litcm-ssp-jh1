exports.login = function (req, res, next) {
  console.log("Login function");
  if (req.session.username) {
    next();
  } else {
    res.redirect('/login');
  }
};