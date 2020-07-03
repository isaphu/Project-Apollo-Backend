// module.exports = (sequelize, DataType) => {
//     const import_type = sequelize.define("import_type", {
//         import_type_id: {
//             type: DataType.INTEGER
//         },
//         import_type_name: {
//             type: DataType.STRING
//         },
//         convertable_uom: {
//             type: DataType.STRING(1)
//         }
//     });
//     import_type.associate = (models) => {
//         import_type.hasMany(models.import_entry, {import_type_id})
//         import_type.hasMany(models.export_entry, {import_type_id})
//     }
//     return import_type;
// }