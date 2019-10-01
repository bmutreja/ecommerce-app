exports.getLogin = (req, res, next) => {
        res.render('auth/login', {
          path: '/login',
          pageTitle: 'login',
          isAuthenticated : req.isLoggedIn
         
        });
        console.log(req.isLoggedIn);
     };

exports.postLogin = (req, res, next) => {

    req.session.isLoggedIn = true;

    res.redirect('/');
};