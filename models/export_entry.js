module.exports = (sequelize, DataType) => {
    const export_entry = sequelize.define("export_entry",{
        export_entry_id: {
            type: DataType.INTEGER
        },
        releasing_date: {
            type: DataType.DATE
        },
        warehouse_date: {
            type: DataType.DATE
        },
        export_by: {
            type: DataType.varchar
        },
        departure_date: {
            type: DataType.DATE
        },
        invoice_no: {
            type: DataType.varchar
        }
    });
    export_entry.associate = (models) => {
        export_entry.belongsTo(models.import_type)
        export_entry.hasMany(models.import_export_related, {export_entry_id})
    }
    return export_entry;
}