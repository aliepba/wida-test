module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
     invoice_no : {
        type : DataTypes.TEXT ,
        primaryKey: true,
        allowNull: false
      },
      date : {
        type : DataTypes.DATE,
        allowNull: false
      },
      customer_name : {
        type : DataTypes.TEXT,
        allowNull: false
      },
      salesperson_name : {
        type : DataTypes.TEXT,
        allowNull: false
      },
      payment_type : {
        type: DataTypes.ENUM,
        values : ['CASH', 'CREDIT'],
        allowNull: false
      },
      notes : {
        type : DataTypes.TEXT,
        allowNull: true
      },
      createdAt : {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false
      }, 
      updatedAt : {
        field: 'updated_at',
        type: DataTypes.DATE,
        allowNull: false
      }
  }, {
    tableName: 'invoices',
    timestamps: true
  });

  Invoice.associate = function(models){
    Invoice.hasMany(models.ProductSold, {
      foreignKey : 'invoice_no',
      as : 'list_product'
    })
  }

  return Invoice;
}