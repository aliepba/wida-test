var express = require('express');
var router = express.Router();

const ImportController = require('../controllers/ImportExcel')
const upload = require('../middleware/upload')

router.post('/excel', upload.single('file') ,ImportController.ImportExcel);

module.exports = router;
