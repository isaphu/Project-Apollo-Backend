module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('import_entries', [{
      import_entry: 12345678910,
      arriving_date: new Date(),
      releasing_date: new Date(),
      warehouse_date: new Date(),
      releasing_no: 9990090909,
      createdAt: new Date(),
      updatedAt: new Date(),
      shipperId: 1,
      importTypeId: 1
    }]);
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
