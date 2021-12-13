module.exports = (sequelize, Sequelize) => {
    const Religion = sequelize.define("religion", {
        name_religion: {
            type: Sequelize.STRING
        },

    });

    return Religion;
};
