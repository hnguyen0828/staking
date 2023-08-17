module.exports = (sequelize, Sequelize) => {
    const Validators = sequelize.define("validators", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true,            // checks for email format (foo@bar.com)
            }
        },
        password: {
            type: Sequelize.STRING
        },
        twitter: {
            type: Sequelize.STRING
        },
        website: {
            type: Sequelize.STRING,
            validate: {
                isUrl: true,              // checks for url format (http://foo.com)
            }
        },
        telegram: {
            type: Sequelize.STRING
        },
        logo: {
            type: Sequelize.TEXT
        },
        status: {
            type:   Sequelize.ENUM,
            values: ['active', 'inactive', 'pending', 'registered','whitelisted']
        },
        ip: {
            type: Sequelize.STRING,
            validate: {
                isIP: true,               // checks for IPv4 (129.89.23.1) or IPv6 format
            }
        },
        walletAddress: {
            type: Sequelize.STRING,
            field: "wallet_address"
        },
        createdDate: {
            type: Sequelize.DATE,
            field: "created_date"
        },
    });

    return Validators;
};