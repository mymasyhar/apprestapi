'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function (req, res) {
    response.ok("REST API has been running", res);
}

//show student data
exports.getMahasiswa = function (req, res) {
    connection.query(`SELECT * FROM mahasiswa`, function (error, row, fields) {
        if (error) {
            connection.log('error');
        } else {
            response.ok(row, res);
        }
    });
};