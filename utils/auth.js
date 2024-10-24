const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect('/login'); // Redirect to login if not authenticated
    } else {
      next(); // Proceed to the next middleware or route
    }
  };
  
  module.exports = withAuth;
  