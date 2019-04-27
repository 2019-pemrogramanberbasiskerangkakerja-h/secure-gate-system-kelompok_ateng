var express = require('express')
var router = express.Router();
var middlewares = require('../middlewares/auth.js')
var login = require('../controller/login.js')

router.get('/', login.index)
router.post('/login', login.create)
router.get('/pages', middlewares.checkSignIn, function(req,res){
    res.render('pages'),{nrp: req.session.user.nrp}
});
router.use('/pages', function(err, req, res, next){
    console.log(err);
    //User should be authenticated! Redirect him to log in.
    res.redirect('/');
});

module.exports = router