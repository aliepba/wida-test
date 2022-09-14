module.exports = (sequelize, DataTypes) => {
    const ProductSold = sequelize.define('ProductSold', {
       invoice_no : {
          type : DataTypes.TEXT ,
          primaryKey: true,
          allowNull: false
        },
        item_name : {
          type : DataTypes.INTEGER,
          allowNull: false
        },
        quantity : {
            type : DataTypes.INTEGER,
            allowNull: false
        },
        total_cogs : {
            type : DataTypes.INTEGER,
            allowNull: false
        },
        total_price_sold : {
            type : DataTypes.INTEGER,
            allowNull: false
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
      tableName: 'products_sold',
      timestamps: true
    });

    ProductSold.associate = function(models){
      ProductSold.belongsTo(models.Invoice, {
        foreignKey : 'invoice_no',
        as : 'invoices'
      })
    }
  
    return ProductSold;
  }