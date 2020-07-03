module.exports = (sequelize, DataType) => {
    const import_entry = sequelize.define("import_entry", {
        arriving_date: {
            type: DataType.DATE
        },
        releasing_date: {
            type: DataType.DATE
        },
        warehouse_date: {
            type: DataType.DATE
        },
        releasing_no: {
            type: DataType.STRING(15)
        }
    });
    import_entry.associate = (models) => {
        import_entry.belongsTo(models.shipper)
        import_entry.belongsTo(models.import_type)
        import_entry.hasMany(models.import_export_related)
    }
    return import_entry;
}