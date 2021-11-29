const moment = require('moment')
module.exports = (sequelize, Sequelize) => {
    const Player = sequelize.define("player", {
        fullname: {
            type: Sequelize.STRING
        },
        nationality: {
            type: Sequelize.STRING
        },
        weight: {
            type: Sequelize.STRING
        },
        placeofbirth: {
            type: Sequelize.STRING
        },
        club: {
            type: Sequelize.STRING
        },
        position: {
            type: Sequelize.STRING
        },
        dateofbirth: {
            type: Sequelize.DATEONLY,
            get: function() {
                return moment(this.getDataValue('DateTime')).format('DD/MM/YYYY')
            }
        },
        number: {
            type: Sequelize.STRING
        },
    });

    return Player;
};
