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

//add student data

exports.addMahasiswa = function (req, res) {

    var nim = req.body.nim;
    var nama = req.body.nama;
    var prodi = req.body.prodi;

    connection.query(`INSERT INTO mahasiswa (nim, nama, prodi) VALUES (?, ?, ?)`,
        [nim, nama, prodi],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok('adding data success', res);
            }
        }
    );

}

//edit data by id

exports.editData = function (req, res) {

    var id = req.body.id_mhs;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var prodi = req.body.prodi;

    connection.query(`UPDATE mahasiswa SET nim=?, nama=?, prodi=? WHERE id_mhs=?`,
        [nim, nama, prodi, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok('Edit Data Success', res);
            }
        }
    );
}

//delet data by id

exports.removeData = function (req, res) {
    var id = req.body.id_mhs;

    connection.query(`DELETE FROM mahasiswa WHERE id_mhs=?`,
        [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok('Data has been Removed', res);
            }
        }
    );
}