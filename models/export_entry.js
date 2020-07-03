module.exports = (sequelize, DataType) => {
    const export_entry = sequelize.define("export_entry",{
        releasing_date: {
            type: DataType.DATE
        },
        warehouse_date: {
            type: DataType.DATE
        },
        export_by: {
            type: DataType.STRING
        },
        departure_date: {
            type: DataType.DATE
        },
        invoice_no: {
            type: DataType.STRING
        }
    });
    export_entry.associate = (models) => {
        export_entry.belongsTo(models.import_type)
        export_entry.hasMany(models.import_export_related)
    }
    return export_entry;
}