const sequelize = require('sequelize');

module.exports = (sequelize, DataType) => {
    const uom = sequelize.define("uom", {
        uom_code: {
            type: DataType.STRING
        },
        uom_name: {
            type: DataType.STRING
        }
    })
    uom.associate = (models) => {
        uom.hasMany(models.products)
    }
    return uom;
}