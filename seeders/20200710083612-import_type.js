module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('import_types', [{
      import_type_name: 'From PORT',
      convertable_uom: 'N',
      createdAt: new Date(),
      updatedAt: new Date()
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
