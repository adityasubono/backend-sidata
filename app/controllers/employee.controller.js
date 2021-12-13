const db = require("../models");
const Employee = db.employee;
const Op = db.Sequelize.Op;

exports.createEmployee = (req, res) => {
    // Save User to Database
    Employee.create({
        nik: req.body.nik,
        id_ktp: req.body.id_ktp,
        fullname: req.body.fullname,
        email: req.body.email,
        photo : req.body.photo,
        position : req.body.position,
        placeofbirth : req.body.placeofbirth,
        dateofbirth : req.body.dateofbirth,
    })
        .then(employee => {
            res.status(200).send({ message: employee });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
