module.exports = (sequelize, Sequelize) => {
    const Position = sequelize.define("position", {
        name_position: {
            type: Sequelize.STRING
        },
    });

    return Position;
};
