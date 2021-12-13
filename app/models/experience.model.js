const moment = require('moment')
module.exports = (sequelize, Sequelize) => {
    const Experience = sequelize.define("experience", {
        nik: {
            type: Sequelize.STRING
        },
        experice: {
            type: Sequelize.STRING
        },
        experice_period: {
            type: Sequelize.STRING
        },
    });

    return Experience;
};
