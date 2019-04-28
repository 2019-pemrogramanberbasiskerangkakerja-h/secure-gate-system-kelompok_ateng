var express = require('express')
var router = express.Router();
var middlewares = require('../middlewares/auth.js')
var login = require('../controller/login.js')

router.get('/',function(req,res){
    console.log("get /")
    res.redirect('login/1')
})
router.get('/login/:gate', login.index)
router.post('/login', login.create)
router.get('/pages', middlewares.checkSignIn, function(req,res){
    console.log(req.session)
    res.render('pages',{nrp: req.session.user, gate : req.session.gate})
});

module.exports = router