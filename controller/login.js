Users = [{nrp : '5115100089'}]

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

exports.index = (req,res) =>{
    console.log(req.params)
    res.render('index',{gate : req.params.gate, message : req.session.error})
}
exports.create = (req,res) =>{
    if(!req.body.nrp){
        res.render('index', {message: "Please enter nrp"});
    }else {
        console.log('login controller')
        console.log(req.body.gate)
        Users.filter(function(user){
            if(user.nrp === req.body.nrp){
                req.session.user = user.nrp;
                req.session.gate = req.body.gate;
                console.log(req.session.user)
                console.log(time)
                res.redirect('/pages');
           }else{
                req.session.error = "invalid credentials !"
                res.redirect('login/'+req.body.gate)
           }
        });

     }
}