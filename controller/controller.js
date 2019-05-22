var response = require('./response');
var db = require('../config/database');
var bcrypt = require('bcrypt');
const saltRounds = 8;

//USER
function insert_log(nrp, value) {
    db.query('INSERT into Log (nrp,status) value (?,?)',[nrp,value]);
}

exports.getAllUser = (req,res)=>{
    db.query('SELECT * FROM User', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
}

exports.postUser = (req,res)=>{
    var nrp = req.body.nrp;
    var password = req.body.password;
    var grup = req.body.grup;
    console.log(req.body)
    if(!nrp || !password || !grup){
        res.status("400");
        res.send("Invalid details!");
    } else {
        var hash = bcrypt.hashSync(password, saltRounds);
        db.query('INSERT INTO User (nrp, password, fk_grup_id) VALUES (?,?,?)', [nrp, hash, grup], function(error, result, fields) {
            if(error) {
                console.log(error)
                response.error('Duplicate!', res)
            } else {
                response.ok('Add User Success!', res)
            }
        });
    }
}

exports.findUser = (req,res)=>{
    var user_id = req.params.user_id;
    db.query('SELECT * FROM User WHERE user_id = ?', [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
}

exports.deleteUser = (req, res)=> {
    var user_id = req.params.user_id;
    db.query('DELETE FROM User WHERE user_id = ?', [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Delete User Success!", res)
        }
    });
};

//gate

exports.getAllGate = (req,res)=>{
    db.query('SELECT * FROM Gate', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
}

exports.postGate = (req,res)=>{
    var name = req.body.name;
    console.log(req.body)
    if(!name){
        res.status("400");
        res.send("Invalid name!");
    } else {
        db.query('INSERT INTO Gate (name) VALUES (?)', [name], function(error, result, fields) {
            if(error) {
                console.log(error)
                response.error('Duplicate!', res)
            } else {
                response.ok('Add gate Success!', res)
            }
        });
    }
}

exports.findGate = (req,res)=>{
    var gate_id = req.params.gate_id;
    db.query('SELECT * FROM Gate WHERE gate_id = ?', [ gate_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
}

exports.deleteGate = (req, res)=> {
    var gate_id = req.params.gate_id;
    db.query('DELETE FROM Gate WHERE gate_id = ?', [ gate_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Delete gate Success!", res)
        }
    });
};

//gate

exports.getAllGroup = (req,res)=>{
    db.query('SELECT * FROM Grup', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
}

exports.postGroup = (req,res)=>{
    var name = req.body.name;
    var jadwal = req.body.jadwal;
    console.log(req.body)
    if(!name){
        res.status("400");
        res.send("Invalid name!");
    } else {
        db.query('INSERT INTO Grup (name,fk_jadwal_id) VALUES (?,?)', [name,jadwal], function(error, result, fields) {
            if(error) {
                console.log(error)
                response.error('Duplicate!', res)
            } else {
                response.ok('Add group Success!', res)
            }
        });
    }
}

exports.findGroup = (req,res)=>{
    var group_id = req.params.group_id;
    db.query('SELECT * FROM Grup WHERE grup_id = ?', [ group_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
}

exports.deleteGroup = (req, res)=> {
    var group_id = req.params.group_id;
    db.query('DELETE FROM Grup WHERE grup_id = ?', [ group_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Delete group Success!", res)
        }
    });
};

//Jadwal
exports.getAllJadwal = (req,res)=>{
    db.query('SELECT * FROM Jadwal', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
}

exports.postJadwal = (req,res)=>{
    var open = req.body.open;
    var close = req.body.close;
    var gate = req.body.gate;
    console.log(req.body)
    if(!open || !close || !gate){
        res.status("400");
        res.send("Invalid input!");
    } else {
        db.query('INSERT INTO Jadwal (open_time,close_time,fk_gate_id) VALUES (?,?,?)', [open,close,gate], function(error, result, fields) {
            if(error) {
                console.log(error)
                response.error('Duplicate!', res)
            } else {
                response.ok('Add jadwal Success!', res)
            }
        });
    }
}

exports.findJadwal = (req,res)=>{
    var jadwal_id = req.params.jadwal_id;
    db.query('SELECT * FROM Jadwal WHERE jadwal_id = ?', [ jadwal_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
}

exports.deleteJadwal = (req, res)=> {
    var jadwal_id = req.params.jadwal_id;
    db.query('DELETE FROM Jadwal WHERE jadwal_id = ?', [ jadwal_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Delete jadwal Success!", res)
        }
    });
};

exports.login = (req,res)=> {
    var nrp = req.body.nrp;
    var password = req.body.password;
    var gate = req.body.gate;
    if(!nrp || !password || !gate){
        res.status("400");
        res.send("Invalid credential!");
    }else{
        db.query('SELECT a.password, c.open_time,c.close_time FROM User a JOIN Grup b ON a.fk_grup_id = b.grup_id JOIN Jadwal c ON b.fk_jadwal_id = c.jadwal_id where nrp = ? and c.fk_gate_id = ?', 
        [nrp, gate], function(error, result, fields) {
            if(error){
                console.log(error)
            }
            else if (result.length == 1) {
                console.log(result)
                var hash = result[0].password;
                var pass = bcrypt.compareSync(password, hash);
                if(pass) {
                    var time = new Date();
                    var time = ("0" + time.getHours()).slice(-2)   + ":" + ("0" + time.getMinutes()).slice(-2) + ":" + ("0" + time.getSeconds()).slice(-2);
                    start = result[0].open_time;
                    close = result[0].close_time;
                    if (time > start && time < close){
                        console.log("ok")
                        // req.session.loggedin = true;
                        // req.session.nrp = nrp;
                        status = "logged in"
                        //res.redirect('/');
                        insert_log(nrp,status)
                        res.status("200");
                        response.ok(status,res);
                    }
                    else {
                        console.log('waktu salah');
                        status = "waktu salah";
                        insert_log(nrp,status);
                        res.status("400");
                        response.error(status,res);
                    }
                } else {
                    //res.render('auth/login', { message: "NRP or Password Incorrect" });
                    status = "password salah";
                    insert_log(nrp,status);
                    console.log('password salah')
                    res.status("400");
                    response.error(status,res);
                }
                
            } else {
                console.log('username or gate salah')
                status = "username atau gate salah";
                insert_log(nrp,status);
                res.status("400");
                response.error(status,res);
                //req.session.error = "invalid credentials !";
                //res.render('auth/login', { message: "NRP or Password Incorrect" });
            }
        });
    }
}