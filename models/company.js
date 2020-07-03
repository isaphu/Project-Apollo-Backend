module.exports = (sequelize, DataType) => {
    const company = sequelize.define("company", {
        com_code: {
            type: DataType.STRING
        },
        com_name_th: {
            type: DataType.STRING(150)
        },
        com_name_en: {
            type: DataType.STRING(150)
        },
        address: {
            type: DataType.TEXT
        },
        phone: {
            type: DataType.STRING(20)
        },
        fax: {
            type: DataType.STRING(20)
        },
        email: {
            type: DataType.STRING(150)
        },
        manager_name: {
            type: DataType.STRING(150)
        },
        bank_account_no: {
            type: DataType.STRING(20)
        },
        bank_account_name: {
            type: DataType.STRING(150)
        },
        bank_account_branch: {
            type: DataType.STRING(150)
        },
        tax_no: {
            type: DataType.STRING(20)
        },
        create_by: {
            type: DataType.INTEGER 
        },
        create_date: {
            type: DataType.DATE
        },
        update_by: {
            type: DataType.INTEGER
        },
        update_date: {
            type: DataType.DATE
        }
    });
    return company;
}