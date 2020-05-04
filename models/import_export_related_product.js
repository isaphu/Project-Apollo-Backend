module.exports = (sequelize, DataType) => {
    const import_export_related_product = sequelize.define("import_export_related_product", {
        related_product_id: {
            type: DataType.INTEGER
        },
        type: {
            type: DataType.varchar
        },
        quantity: {
            type: DataType.decimal(10,2)
        },
        weight: {
            type: DataType.decimal(10,2)
        },
        price: {
            type: DataType.decimal(10,2)
        },
        import_tariff_code: {
            type: DataType.varchar
        }
    })
    import_export_related_product = (models) => {
        import_export_related_product.hasMany(models.import_export_related, {related_product_id})
        import_export_related_product.belongsTo(models.products)
    }
    return import_export_related_product;
}