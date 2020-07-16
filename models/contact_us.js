module.exports = (sequelize, DataType) => {
    const contact_us = sequelize.define("contact_us", {
        line: {
            type: DataType.STRING(255)
        },
        email: {
            type: DataType.STRING(255)
        },
    })
    return contact_us;
}