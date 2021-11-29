module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define("countries", {
        country_name: {
            type: Sequelize.STRING
        },
        code1: {
            type: Sequelize.STRING
        },
        code2: {
            type: Sequelize.STRING
        },
        flag: {
            type: Sequelize.STRING
        },
    });

    return Country;
};
