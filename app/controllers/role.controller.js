const db = require("../models");
const Role = db.role;
const Op = db.Sequelize.Op;

exports.getAllUserRole = (req, res) => {
    const roleName = req.query.name;
    var condition = roleName ? { name: { [Op.like]: `%${roleName}%` } } : null;

    Role.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error Cuk"
            });
        });
};
