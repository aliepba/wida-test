const {Invoice, ProductSold} = require('../../models')
const reader = require('xlsx')

module.exports = async(req, res, next) => {      
    try {
        let path = "./public/documents/" + req.file.filename;
    
        const excelFile = reader.readFile(path)
    
        let invoices = [];
        let productsSold = [];
    
        const sheetsInvoice = excelFile.SheetNames[0]
        const sheetsProduct = excelFile.SheetNames[1]
        const opt = {
            type: 'binary',
            cellDates: true,
            cellNF: false,
            cellText: false,
            raw : false
        }
    
        const tempInvoice = reader.utils.sheet_to_json(excelFile.Sheets[sheetsInvoice], opt )
        
        tempInvoice.forEach(async(e) => {
            if(!e['invoice no'] || !e.date || !e.customer || !e.salesperson || !e['payment type']){
                return res.json({message : "Data Invoice invalid or empty cannot be saved"})
            }            

            let invoice = {
                invoice_no : e['invoice no'],
                date : new Date(e.date)   ,
                customer_name: e.customer,
                salesperson_name: e.salesperson,
                payment_type: e['payment type'],
                notes : e.notes,
            }

            const InvCek = await Invoice.findOne({where : {invoice_no : e.invoice_no}})

            if(InvCek) {return res.status(400).json({message : "invoice no duplicate"})}
    
            invoices.push(invoice)
        });
    
        await Invoice.bulkCreate(invoices)

        const tempProduct = reader.utils.sheet_to_json(excelFile.Sheets[sheetsProduct], opt)

        tempProduct.forEach(async(e) => {
            if(!e['Invoice no'] || e.item || e.quantity || e['total_cogs'] || e['total_price']) {
                return res.json({message : "Data Product Sold invalid or empty cannot be saved"})
            }

            let product = {
                invoice_no: e['Invoice no'],
                item_name : e.item,
                quantity: e.quantity,
                total_cogs: e['total cogs'],
                total_price_sold: e['total price'],
              };

            const InvCek = await Invoice.findOne({where : {invoice_no : product.invoice_no}})
            if(InvCek) return res.status(400).json({message : "invoice no not available"})

            productsSold.push(product);
        })

        await ProductSold.bulkCreate(products)

        res.json({
            message : "successfully import excel"
        })

    } catch (error) {
        return res.status(500).json({error})
    }
}