module.exports = (sequelize, DataType) => {
    const user = sequelize.define("user", {
        firstname: {
            type: DataType.STRING(150)
        },
        lastname: {
            type: DataType.STRING(150)
        },
        email: {
            type: DataType.STRING(150)
        },
        phone: {
            type: DataType.STRING(20)
        },
        login_name: {
            type: DataType.STRING(150)
        },
        password: {
            type: DataType.STRING(150)
        },
        isAdmin: {
            type: DataType.STRING(1)
        },
        isUser: {
            type: DataType.STRING(1)
        },
        register_complete: {
            type: DataType.STRING(1)
        },
        status: {
            type: DataType.BOOLEAN
        }
    })
    user.associate = (models) => {
        user.hasMany(models.contact_us)
    }
    return user;
}