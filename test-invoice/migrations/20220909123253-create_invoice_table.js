'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('invoices', { 
      invoice_no : {
        type : Sequelize.TEXT,
        allowNull: false
      },
      date : {
        type : Sequelize.DATEONLY,
        allowNull: false
      },
      customer_name : {
        type : Sequelize.TEXT,
        allowNull: false
      },
      salesperson_name : {
        type : Sequelize.TEXT,
        allowNull: false
      },
      payment_type : {
        type: Sequelize.ENUM,
        values : ['CASH', 'CREDIT'],
        allowNull: false
      },
      notes : {
        type : Sequelize.TEXT,
        allowNull: true
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

    await queryInterface.addConstraint('invoices' , {
      type: 'unique',
      fields: ['invoice_no'],
      name : 'UNIQUE_INVOICE_NO'
    })

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('invoices');
  }
};
