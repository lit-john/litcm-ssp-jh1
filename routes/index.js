
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('dashboard', {username: req.session.username})
};

exports.login = function (req, res) {
  res.render('login');
};

exports.logout = function (req, res) {
  if (req.session.username){
    delete req.session.username;
  }
    
  res.render('login');
};

exports.processLogin = function(req, res) {
  var uname = req.param('username');
  var pwd = req.param('password');

  console.log('Username: ' + req.param('username') + ' Password: ' + pwd);

  if (pwd=="ssp")
  {
    req.session.username = uname;
    res.redirect('/dashboard');
  }
  else
  {
    res.redirect('/login');
  }
};

exports.dashboard = function(req, res) {
  res.render('dashboard', {username: req.session.username})
};