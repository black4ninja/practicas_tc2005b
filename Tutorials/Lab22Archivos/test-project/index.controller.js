const log = console.log
const multer = require('multer'); // Using Promise API
var path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log("File Destination:", './public/'); // Log the destination path
        callback(null, './public/');
    },
    filename: function (req, file, callback) {
        console.log("Uploaded File:", req.body); // Log received form data
        return callback(null, file.originalname);
    }
});

const upload = multer({ storage: storage }).array('file', 1);

module.exports.upload_file = async (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ code: 500, msg: "Error uploading file" });
        }

        console.log("Upload Successful:", req.files); // Log uploaded files
        res.status(200).json({ code: 200, msg: "Ok" });
    });
}

const storage2 = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './private/');
    },

    filename: function (req, file, callback) {
        return callback(null,file.originalname);
    }
});
const upload2 = multer({ storage : storage2 }).array('file',1);
module.exports.upload_file_private = async (req, res) => {
    log("Cargando el archivo")
    upload2(req,res,function(err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ code: 500, msg: "Error uploading file" });
        }

        console.log("Upload Successful:", req.files); // Log uploaded files
        res.status(200).json({ code: 200, msg: "Ok" });
    })
}

module.exports.get_private_file = async(req, res) => {
    var fileName = req.params.file
    res.sendFile(path.join(__dirname, './private', fileName));
}