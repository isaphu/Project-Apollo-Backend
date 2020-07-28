module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('uoms',[
        {
          uom_code: 'KG',
          uom_name: 'Kilogram',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          uom_code: 'GR',
          uom_name: 'Gram',
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          uom_code: 'CR',
          uom_name: 'Carton',
          createdAt: new Date(),
          updatedAt: new Date()

        }
      ])
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
