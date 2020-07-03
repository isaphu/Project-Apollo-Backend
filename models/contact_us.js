module.exports = (sequelize, DataType) => {
    const contact_us = sequelize.define("contact_us", {
        message: {
            type: DataType.TEXT
        }
    })
    contact_us.associate = (models) => {
        contact_us.belongsTo(models.user)
    }
    return contact_us;
}