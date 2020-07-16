'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      product_code: 'RED0031', 
      product_name: 'Red wine', 
      product_detail: 'Red wine from France', 
      status: 1, 
      createdAt: new Date(), 
      updatedAt: new Date(), 
      uomImportId: 1, 
      uomExportId: 1, 
      uomId: 1
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
