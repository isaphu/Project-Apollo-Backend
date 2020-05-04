module.exports = (sequelize, DataType) => {
    const uom = sequelize.define("uom", {
        uom_id: {
            type: DataType.INTEGER
        },
        uom_code: {
            type: DataType.varchar
        },
        uom_name: {
            type: DataType.varchar
        }
    })
    uom = (models) => {
        uom.hasMany(models.products, {uom_id})
    }
    return uom;
}