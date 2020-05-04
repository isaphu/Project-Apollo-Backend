module.exports = (sequelize, DataType) => {
    const company = sequelize.define("company", {
        company_id: {
            type: DataType.INTEGER
        },
        com_code: {
            type: DataType.varchar
        },
        com_name_th: {
            type: DataType.varchar(150)
        },
        com_name_en: {
            type: DataType.varchar(150)
        },
        address: {
            type: DataType.text
        },
        phone: {
            type: DataType.varchar(20)
        },
        fax: {
            type: DataType.varchar(20)
        },
        email: {
            type: DataType.varchar(150)
        },
        manager_name: {
            type: DataType.varchar(150)
        },
        bank_account_no: {
            type: DataType.varchar(20)
        },
        bank_account_name: {
            type: DataType.varchar(150)
        },
        bank_account_branch: {
            type: DataType.varchar(150)
        },
        tax_no: {
            type: DataType.varchar(20)
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