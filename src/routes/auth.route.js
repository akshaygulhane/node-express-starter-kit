const express = require('express');
const app = express();

app.post('/auth/login',
passport.authenticate('local'),
function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.redirect('/users/' + req.user.username);
});

app.post('/auth/register', 
    passport.authenticate('local'),
    function (req, res) {
        //call the db here
        res.status(200).send({
            'message' : 'registration successful.'
        })
    }
)