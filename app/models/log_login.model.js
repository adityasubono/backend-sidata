module.exports = (sequelize, Sequelize) => {
    const LogLogin = sequelize.define("log_login", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        id_user: {
            type: Sequelize.STRING
        },
        checkin: {
            type: Sequelize.DATE
        },
        checkout: {
            type: Sequelize.DATE
        }
    });

    return LogLogin;
};
