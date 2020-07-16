module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('companies', 
    [{
      com_code: 'DAZ001',
      com_name_th: 'ดีเอแซด 1969',
      com_name_en: 'DAZ 1969',
      address: '787/4526 Lamna, Jjam, Kllan, Bangkok, Thailand',
      phone: 88986566,
      fax: 022356987,
      email: 'Daxppo@hotmail.com',
      manager_name: 'Isa Phuyuthanon',
      bank_account_no: '789-965-5669',
      bank_account_name: 'Isa Phuyuthanon',
      bank_account_branch: 'Bangkok, Thailand',
      tax_no: 885685768,
      create_by: 1,
      update_by: 01,
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
