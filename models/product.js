module.exports = (sequelize,DataType) => {
    const product = sequelize.define("product", {
        product_code: {
            type: DataType.STRING
        },
        product_name: {
            type: DataType.STRING
        },
        product_detail: {
            type: DataType.TEXT
        },
        status: {
            type: DataType.STRING(1)
        }
    })
    product.associate = (models) => {
        product.hasMany(models.import_export_related_product)
        product.belongsTo(models.uom, {foreignKey: {allowNull: false}, as:'uom_import'})
        product.belongsTo(models.uom, {foreignKey: {allowNull: false}, as:'uom_export'})
    }
    return product;

}