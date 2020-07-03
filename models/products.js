// module.exports = (sequelize,DataType) => {
//     const products = sequelize.define("products", {
//         product_id: {
//             type: DataType.INTEGER
//         },
//         product_code: {
//             type: DataType.STRING
//         },
//         product_name: {
//             type: DataType.STRING
//         },
//         product_detail: {
//             type: DataType.TEXT
//         },
//         status: {
//             type: DataType.STRING(1)
//         }
//     })
//     products.associate = (models) => {
//         products.hasMany(models.import_export_related_product, {product_id})
//         products.belongsTo(models.uom)
//     }
//     return products;

// }