module.exports = (sequelize, DataType) => {
    const shipper = sequelize.define("shipper", {
        shipper_id: {
            type: DataType.INTEGER
        },
        shipper_code: {
            type: DataType.varchar(10)
        },
        shipper_name: {
            type: DataType.varchar(100)
        }
    });
    shipper.associate = (models) => {
        shipper.hasMany(models.import_entry, {shipper_id}) 
    }
}