module.exports = (sequelize, DataType) => {
    const contact_us = sequelize.define("contact_us", {
        line: {
            type: DataType.STRING(255)
        },
        email: {
            type: DataType.STRING(255)
        },
        createdAt: {
            type: DataType.DATE
        },
        updatedAt: {
            type: DataType.DATE
        }
    })
    return contact_us;
}