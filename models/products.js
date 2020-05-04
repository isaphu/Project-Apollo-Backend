module.exports = (sequelize,DataType) => {
    const products = sequelize.define("products", {
        product_id: {
            type: DataType.INTEGER
        },
        product_code: {
            type: DataType.varchar
        },
        product_name: {
            type: DataType.varchar
        },
        product_detail: {
            type: DataType.TEXT
        },
        status: {
            type: DataType.varchar(1)
        }
    })
    products = (models) => {
        products.hasMany(models.import_export_related_product, {product_id})
        products.belongsTo(models.uom)
    }
    return products;

}