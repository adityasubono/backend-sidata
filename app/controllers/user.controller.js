const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");

};

exports.teacherDashboard = (req, res) => {
    res.status(200).send("Teacher Content.");
};

exports.studentDashboard = (req, res) => {
    res.status(200).send("Student Content.");
};

exports.adminDashboard = (req, res) => {
    res.status(200).send("Admin Content.");
};


exports.allUser = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

    User.findAll({ where: condition })
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
