const bcryptjs = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcryptjs.hash('user01', 12)
    return queryInterface.bulkInsert('users', 
    [{
      firstname: 'ISA', 
      lastname: 'PHUYUTHANON', 
      email: 'warehouse@hotmail.com', 
      phone: 0898989899, 
      login_name: 'user01', 
      password: password, 
      isAdmin: true, 
      isUser: true, 
      register_complete: true, 
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()
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
