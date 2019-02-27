const express = require('express');
const passport = require('passport');

var router = express.Router();

router.post('/login',
passport.authenticate('local'),
function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.redirect('/users/' + req.user.username);
});

router.post('/register', 
    passport.authenticate('local'),
    function (req, res) {
        //call the db here
        res.status(200).send({
            'message' : 'registration successful.'
        })
    }
)

module.exports = router;