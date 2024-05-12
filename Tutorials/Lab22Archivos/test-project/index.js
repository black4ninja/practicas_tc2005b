const express = require('express');
const multer = require('multer');
var path = require('path');
const app = express();
const port = 5000;
const log = console.log

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

const controller = require("./index.controller.js")
app.post('/upload_file', controller.upload_file);
app.post('/upload_file_private', controller.upload_file_private);
app.get('/get_private_file/:file', controller.get_private_file);

app.listen(port, () => {
//server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});