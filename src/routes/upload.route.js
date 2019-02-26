const express = require('express');
const fs = require('fs');
const multer  = require('multer');
const xlsx = require('xlsx');

const router = express.Router();
const upload = multer({ dest: 'uploads/' })

router.get('/test', (req, res, next) => { 
    res.send('test');
});

var type = upload.single('imgUploader');
 
router.post('/', type, function (req, res, next) {
    var tmp_path = req.file.path;

    /** The original name of the uploaded file
        stored in the variable "originalname". **/
    var target_path = 'uploads/' + req.file.originalname;
  
    /** A better way to copy the uploaded file. **/
    var src = fs.createReadStream(tmp_path);
    var dest = fs.createWriteStream(target_path);
    src.pipe(dest);
    src.on('end', function() { 
        var buf = fs.readFileSync("./uploads/employee_data.xls");
        var wb = xlsx.read(buf, {type:'buffer'});

        res.send('complete'); 
    });
    src.on('error', function(err) { res.send('error'); });
})

module.exports = router;