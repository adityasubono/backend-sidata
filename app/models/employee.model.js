const moment = require('moment')
module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
        nik: {
            type: Sequelize.STRING
        },
        id_ktp: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        fullname: {
            type: Sequelize.STRING
        },
        photo: {
            type: Sequelize.STRING
        },
        position: {
            type: Sequelize.STRING
        },
        placeofbirth: {
            type: Sequelize.STRING
        },
        dateofbirth: {
            type: Sequelize.DATEONLY,
            get: function() {
                return moment(this.getDataValue('DateTime')).format('DD-MM-YYYY')
            }
        },
    });

    return Employee;
};
