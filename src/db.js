const mysql = require('mysql2');

const db = mysql.createConnection({
    host : "localhost",
    user : "MyData",
    password : "c,jifçfh8 gMSLi)587zéçufhènvwl",
    database : "To_do_list"

});

db.connect((error)=>{
    if(error) throw error;
    console.log("connection to database work");
});

module.exports = db;