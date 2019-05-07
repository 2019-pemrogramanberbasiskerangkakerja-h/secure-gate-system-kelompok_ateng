const mysql = require('mysql');   

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'rosyadi',
    password: 'rosyadi',
    database: 'secure_gate'
  });

conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected...');
});

module.exports = conn;