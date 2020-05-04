module.exports = (sequlize, DataType) => {
    const import_type = sequelize.define("import_type", {
        import_type_id: {
            type: DataType.INTEGER
        },
        import_type_name: {
            type: DataType.varchar
        },
        convertable_uom: {
            type: DataType.varchar(1)
        }
    });
    import_type.associate = (models) => {
        import_type.hasMany(models.import_entry, {import_type_id})
        import_type.hasMany(models.export_entry, {import_type_id})
    }
    return import_type;
}