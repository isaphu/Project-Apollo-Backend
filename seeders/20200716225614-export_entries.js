module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('export_entries', [{
      export_entry: 'AA1123668888', 
      releasing_date: new Date(), 
      warehouse_date: new Date(), 
      export_by: 'By boat', 
      departure_date: new Date(), 
      invoice_no: 778565551, 
      createdAt: new Date(), 
      updatedAt: new Date(), 
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
