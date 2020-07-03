// const sequelize = require('sequelize');

// module.exports = (sequelize, DataType) => {
//     const uom = sequelize.define("uom", {
//         uom_id: {
//             type: DataType.INTEGER
//         },
//         uom_code: {
//             type: DataType.STRING
//         },
//         uom_name: {
//             type: DataType.STRING
//         }
//     })
//     uom = (models) => {
//         uom.hasMany(models.products, {uom_id})
//     }
//     return uom;
// }