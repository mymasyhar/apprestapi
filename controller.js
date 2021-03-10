'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function (req, res) {
    response.ok("REST API has been running", res);
}

//show student data
exports.getMahasiswa = function (req, res) {
    connection.query(`SELECT * FROM mahasiswa`, function (error, rows, fields) {
        if (error) {
            connection.log('error');
        } else {
            response.ok(rows, res);
        }
    });
};

//show student by id 
exports.getMahasiswaById = function (req, res) {

    let id = req.params.id;

    connection.query(`SELECT * FROM mahasiswa WHERE id_mhs = ?`, [id],
        function (error, rows, fields) {
            if (error) {
                connection.log('error');
            } else {
                response.ok(rows, res);
            }
        }
    )
}