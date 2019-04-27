Users = [{nrp : '5115100089'}]

exports.index = (req,res) =>{
    res.render('index')
}
exports.create = (req,res) =>{
    if(!req.body.nrp){
        res.render('index', {message: "Please enter both email and password"});
    }else {
        Users.filter(function(user){
            if(user.nrp === req.body.nrp){
                req.session.user = user;
                console.log(req.session.user)
                res.redirect('/pages');
           }else{
                res.render('index', {message: "Invalid credentials!"})
           }
        });

     }
}