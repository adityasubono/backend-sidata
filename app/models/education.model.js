const moment = require('moment')
module.exports = (sequelize, Sequelize) => {
    const Education = sequelize.define("education", {
        nik: {
            type: Sequelize.STRING
        },
        element_school: {
            type: Sequelize.STRING
        },
        element_school_periode: {
            type: Sequelize.STRING
        },
        high_junior_school: {
            type: Sequelize.STRING
        },
        high_junior_school_periode: {
            type: Sequelize.STRING
        },
        high_senior_school: {
            type: Sequelize.STRING
        },
        high_senior_school_periode: {
            type: Sequelize.STRING
        },
        associate_degree: {
            type: Sequelize.STRING
        },
        associate_degree_periode: {
            type: Sequelize.STRING
        },
        bachelor_degree: {
            type: Sequelize.STRING
        },
        bachelor_degree_periode: {
            type: Sequelize.STRING
        },
        master_degree: {
            type: Sequelize.STRING
        },
        master_degree_periode: {
            type: Sequelize.STRING
        },
        doctoral_degree: {
            type: Sequelize.STRING
        },
        doctoral_degree_periode: {
            type: Sequelize.STRING
        }
    });

    return Education;
};
