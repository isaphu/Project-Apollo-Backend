module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('contact_us', [{
      line: '@dazhelpbot',
      email: 'daz@hotmail.com',
      createdAt: new Date (),
      updatedAt: new Date ()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * 
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
