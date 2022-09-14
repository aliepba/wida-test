const express = require('express')
const router = express.Router()
const InvoiceController = require('../controllers/invoice')

const Validation = require('../middleware/SchemaValidation')
const InvoiceSchema = require('../middleware/Validation/InvoiceValidation')

router.get('/', InvoiceController.GetAll)
router.post('/', Validation(InvoiceSchema) ,InvoiceController.create)
router.put('/:InvoiceNo', Validation(InvoiceSchema), InvoiceController.update)
router.delete('/:InvoiceNo', InvoiceController.DeleteInvoice)



module.exports = router;
