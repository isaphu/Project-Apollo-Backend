module.exports = (sequelize,DataType) => {
    const about = sequelize.define("about", {
            title: {
                type: DataType.STRING(1234)
            },
            content: {
                type: DataType.STRING(1234)
            },
            createdAt: {
                type: DataType.DATE
            },
            updatedAt: {
                type: DataType.DATE
            }
    });
    return about;
}