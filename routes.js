'use strict';

module.exports = function (app) {
    var myJson = require('./controller');

    app.route('/')
        .get(myJson.index);

    app.route('/get')
        .get(myJson.getMahasiswa);

    app.route('/get/:id')
        .get(myJson.getMahasiswaById);
}