var mysql = require('mysql');

//database connection

const conn = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'DB_restAPI'

});

conn.connect((err) => {
    if (err) throw err;
    console.log('mysql Running Good');
})

module.exports = conn;