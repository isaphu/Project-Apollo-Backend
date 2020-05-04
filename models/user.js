module.exports = (sequelize, DataType) => {
    const user = sequelize.define("user", {
        user_id: {
            type: DataType.INTEGER
        },
        firstname: {
            type: DataType.varchar(150)
        },
        lastname: {
            type: DataType.varchar(150)
        },
        email: {
            type: DataType.varchar(150)
        },
        phone: {
            type: DataType.varchar(20)
        },
        login_name: {
            type: DataType.varchar(150)
        },
        password: {
            type: DataType.varchar(150)
        },
        admin: {
            type: DataType.varchar(1)
        },
        register_complete: {
            type: DataType.varchar(1)
        },
        status: {
            type: DataType.BOOLEAN
        }
    })
    user.associate = (models) => {
        user.hasMany(models.contact_us, {user_id})
    }
    return user;
}