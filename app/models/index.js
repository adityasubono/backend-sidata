const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.players = require("./player.model.js")(sequelize, Sequelize);
db.club = require("./club.model.js")(sequelize, Sequelize);
db.country = require("./country.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.log_login = require("./log_login.model")(sequelize, Sequelize);


//ONE TO MANY
// db.role.hasMany(db.user, {
//     as: "user",
// });
//
// db.user.belongsTo(db.role, {
//     as: "role",
// });
db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

//ONE TO MANY
db.country.hasMany(db.club, {
    as: "club",
});

db.club.belongsTo(db.country, {
    as: "country",
});

//ONE TO MANY USER -> LOG-LOGIN
// db.user.hasMany(db.log_login, {
//     as: "log_login",
// });
//
// db.log_login.belongsTo(db.user, {
//     as: "user",
// });

db.ROLES = ["admin", "student", "teacher","headmaster","library","financial","operational"];

module.exports = db;
