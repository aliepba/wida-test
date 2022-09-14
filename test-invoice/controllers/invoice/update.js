const {Invoice, ProductSold} = require('../../models')

module.exports = async (req, res) => {
    const InvoiceNo = req.params.InvoiceNo;
    const dataReq = req.body;
    const ProductReq = req.body.list_product;

    const invoice = await Invoice.findOne({
        where : {invoice_no : InvoiceNo}
    });

    if(!invoice) return res.status(400).json({message: 'Invoice ' + InvoiceNo + ' not found'})

    ProductReq.forEach(async e => {
        const productSold = await ProductSold.findOne({
            where : {invoice_no : InvoiceNo}
        })

        const product = {
            invoice_no : InvoiceNo,
            item_name : e.item,
            quantity : e.quantity,
            total_cogs : e.total_cogs,
            total_price_sold : e.total_price_sold
        }

        await productSold.update(product)

    });


    const updatedInvoice = await invoice.update(dataReq);

    return res.json({
        status : 'success',
        message : "Invoice No " + InvoiceNo +  " updated successfully",
        data : {
            invoice_no : updatedInvoice.invoice_no,
        }
    })

    
} 