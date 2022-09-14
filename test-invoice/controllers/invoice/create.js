const {Invoice, ProductSold} = require('../../models')

module.exports = async (req, res) => {
    const dataInvoice = req.body; 
    const invoiceReq = req.body.invoice_no;
    const productSold = req.body.list_product;

    const cekInv = await Invoice.findOne({
        where : {invoice_no :invoiceReq}
    });

    if(cekInv) return res.status(400).json({message : "inovice no duplicate"})

    const invoice = await Invoice.create(dataInvoice);

    productSold.forEach(async e => {
        const product = {
            invoice_no : dataInvoice.invoice_no,
            item_name : e.item,
            quantity : e.quantity,
            total_cogs : e.total_cogs,
            total_price_sold : e.total_price_sold
        }


        await ProductSold.create(product);
    });

    return res.json({
        status : 'success',
        data : {
            invoice_no : invoice.invoice_no,
        }
    })
}