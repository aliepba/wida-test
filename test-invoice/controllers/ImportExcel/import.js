const {Invoice, ProductSold} = require('../../models')
const readXlsxFile = require("read-excel-file/node");
const { json } = require('sequelize');

module.exports = async (req,res) => {
    try {
        if (req.file == undefined) {
            return res.status(400).send("Please upload an excel file!");
          }
          let path = "./public/documents/" + req.file.filename;

        readXlsxFile(path, {sheet : 'invoice'}).then(async(rows) => {   
            rows.shift();
            let invoices = [];
            rows.forEach(async(row) => {
              if(!row[0] || !row[1] || !row[2] || !row[3] || !row[4]) return res.status(400).json({message : "Data Invoice invalid or empty cannot be saved"}) 
              let invoice = {
                invoice_no: row[0],
                date : new Date(row[1]),
                customer_name: row[2],
                salesperson_name: row[3],
                payment_type: row[4],
                notes : row[5],
              };

              invoices.push(invoice);
              
            });
            
            await Invoice.bulkCreate(invoices)
                    
            
            });

        readXlsxFile(path, {sheet : 'product sold'}).then(async(rows) => {   
                rows.shift();
                let products = [];
                rows.forEach((row) => {
                  if(!row[0] || !row[1] || !row[2] || !row[3] || !row[4]) return res.status(400).json({message : "Data Invoice invalid or empty cannot be saved"}) 
                  let product = {
                    invoice_no: row[0],
                    item_name : row[1],
                    quantity: row[2],
                    total_cogs: row[3],
                    total_price_sold: row[4],
                  };

                  products.push(product);
                });
    
                await ProductSold.bulkCreate(products).then(() => {
                        res.status(200).send({
                          message: "Uploaded the file successfully: " + req.file.originalname,
                        });
                      })
                      .catch((error) => {
                        res.status(500).send({
                          message: "Fail to import data into database!",
                          error: error.message,
                        });
                    });
                    
                });
        } catch (error) {
        res.status(500).send({
          message: "Could not upload the file: " + req.file.originalname,
        });
    }
}