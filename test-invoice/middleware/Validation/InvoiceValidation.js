const yup = require('yup')

const InvoiceSchema = yup.object({
    invoice_no : yup.string().min(1).required(),
    date : yup.date().required(),
    customer_name : yup.string().min(2).required(),
    salesperson_name : yup.string().min(2).required(),
    payment_type :  yup.mixed().oneOf(["CASH", "CREDIT"]).required(),
    list_product : yup.array().of(
        yup.object({
            item : yup.string().min(5).required(),
            quantity : yup.number().min(1).required(),
            total_cogs : yup.number().min(0).required(),
            total_price_sold : yup.number().min(0).required(),
        })
    )
});

module.exports = InvoiceSchema;