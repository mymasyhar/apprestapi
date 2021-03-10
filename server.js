const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//call routes
var routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log('running on port');
});