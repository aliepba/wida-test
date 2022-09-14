const {sequelize, Invoice, ProductSold} = require('../../models')

module.exports = async (req, res) => {

    const {page, size, dates} = req.query;
    const sizesNumber = parseInt(size)
    const pagesNumber = parseInt(page)
    let d  = new Date(dates)

    let pages = 0 ;
    if(!Number.isNaN(pagesNumber) && pagesNumber > 0){
        pages = pagesNumber;
    }

    let sizes = 10 ;
    if(!Number.isNaN(sizesNumber) && sizesNumber > 0 && sizesNumber < 10){
        sizes = sizesNumber
    }

    if(!dates){
        const invoices = await Invoice.findAndCountAll({
            attributes : [
                'invoice_no', 'date', 'customer_name', 'salesperson_name', 'payment_type',
            ],
            include : [{
                model : ProductSold,
                as : "list_product",
                attributes : [
                    'item_name', 'quantity', 'total_cogs', 'total_price_sold', 
                    [sequelize.literal('total_price_sold - total_cogs'), 'profit']
    
                ]
            }],
            limit : sizes,
            offset : pages * sizes
        })
    
        return res.json({
            status : "success",
            message : "List of invoices",
            data : invoices,
            total_pages : Math.ceil(invoices.count / sizes)
        })
    }

    const invoices = await Invoice.findAndCountAll({
        where : {
            date : d
        },
        attributes : [
            'invoice_no', 'date', 'customer_name', 'salesperson_name', 'payment_type',
        ],
        include : [{
            model : ProductSold,
            as : "list_product",
            attributes : [
                'item_name', 'quantity', 'total_cogs', 'total_price_sold', 
                [sequelize.literal('total_price_sold - total_cogs'), 'profit']

            ]
        }],
        limit : sizes,
        offset : pages * sizes
    })

    return res.json({
        status : "success",
        message : "List of invoices",
        data : invoices,
        total_pages : Math.ceil(invoices.count / sizes)
    })
}