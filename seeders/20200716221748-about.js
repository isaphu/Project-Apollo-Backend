module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('abouts', 
    [{
      title: 'เกี่ยวกับเรา',
      content: 'โปรแกรมจัดการคลังสินค้าประเภททัณฑ์บนเป็นระบบบันทึกรายละเอียดใบขนขาเข้าและใบขนขาออกโดยสามารถเพิ่มรายละเอียดสินค้าได้และในอนาคตสามารถปรินท์รายงาน คทบ 14-18 ตามประกาศของกรมศุลกากรได้',
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
