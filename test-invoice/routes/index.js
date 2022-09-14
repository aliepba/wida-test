var express = require('express');
var router = express.Router();

const ImportController = require('../controllers/ImportExcel')
const upload = require('../middleware/upload')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', upload.single('file') ,ImportController.uploadExcel);
router.post('/excel', upload.single('file') ,ImportController.ImportExcel);
router.get('/combi', ImportController.combi)

module.exports = router;
