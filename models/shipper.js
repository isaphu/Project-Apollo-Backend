// module.exports = (sequelize, DataType) => {
//     const shipper = sequelize.define("shipper", {
//         shipper_id: {
//             type: DataType.INTEGER
//         },
//         shipper_code: {
//             type: DataType.STRING(10)
//         },
//         shipper_name: {
//             type: DataType.STRING(100)
//         }
//     });
//     shipper.associate = (models) => {
//         shipper.hasMany(models.import_entry, {shipper_id}) 
//     }
// }