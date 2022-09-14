const {Invoice, ProductSold} = require('../../models')

module.exports = async (req, res) => {
    const InvoiceNo = req.params.InvoiceNo;

    const invoice = await Invoice.findOne({
        where : {invoice_no : InvoiceNo}
    });

    
    if(!invoice) return res.status(400).json({message: 'Invoice no ' +  InvoiceNo + ' not found'})
    
    
    await invoice.destroy();
    await ProductSold.destroy({
        where : {invoice_no : InvoiceNo}
    })

    
    return res.json({
        status : "success",
        message : "Invoice " + InvoiceNo  + " successfully deleted",
        data  : {
            invoice_no : InvoiceNo 
        }
    })
}