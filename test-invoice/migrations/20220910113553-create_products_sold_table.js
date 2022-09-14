'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('products_sold', { 
        invoice_no : {
          type : Sequelize.TEXT,
          allowNull: false
        },
        item_name : {
          type : Sequelize.TEXT,
          allowNull: false
        },
        quantity : {
          type : Sequelize.INTEGER,
          allowNull: false
        },
        total_cogs : {
          type : Sequelize.INTEGER,
          allowNull: false
        },
        total_price_sold : {
          type : Sequelize.INTEGER,
          allowNull: false
        },
        created_at :  {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at : {
          type: Sequelize.DATE,
          allowNull: false
        }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products_sold');
  }
};
