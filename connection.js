var mysql = require('mysql');


const conn = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'dbwisuda',
        port: '3306'
    }
);

conn.connect((err) => {
    if (err) throw err;

    console.log('mySQL Running Success');
});

module.exports = conn;