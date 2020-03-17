var express = require('express');
var path = require('path');
var multer = require('multer');
var router = express.Router();

const storage = multer.diskStorage({
    destination: 'public/uploads/',
    filename: (req, file, cb) => {
        const fileinfo = path.parse(file.originalname);
        cb(null, fileinfo.name + '-' + Date.now() + fileinfo.ext);
    }
});
const upload = multer({storage: storage});

/* GET home page. */
router.get('/', function (req, res, next) {
    req.session.messages = [
        { title : 'Erreur', content: 'Une erreur est survenue...' }
    ];
    res.render('index');
});

router.post('/testform', upload.single('photo'), (req, res) => {
    res.render('hello', {
        'firstname': req.body.firstname,
        'lastname': req.body.lastname,
        'photo': req.file.filename
    });
});

module.exports = router;
