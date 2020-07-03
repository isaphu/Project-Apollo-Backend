module.exports = (sequelize,DataType) => {
    const products = sequelize.define("products", {
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
    products.associate = (models) => {
        products.hasMany(models.import_export_related_product)
        products.belongsTo(models.uom)
    }
    return products;

}