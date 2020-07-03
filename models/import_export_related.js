// module.exports = (sequelize, DataType) => {
//     const import_export_related = sequelize.define("import_export_related", {
//         related_id: {
//             type: DataType.INTEGER
//         },
//         status: {
//             type: DataType.STRING(10)
//         }
//     })
//     import_export_related.associate = (models) => {
//         import_export_related.belongsTo(models.import_entry)
//         import_export_related.belongsTo(models.export_entry)
//         import_export_related.belongsTo(models.import_export_related_product)
//     }
//     return import_export_related;
// }

