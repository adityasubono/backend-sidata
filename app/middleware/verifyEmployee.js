const db = require("../models");
const Employee = db.employee;

employeeDataCheck = (req, res, next) => {
    // CHECK ID KTP
    Employee.findOne({
        where: {
            id_ktp: req.body.id_ktp
        }
    }).then(employee => {

        if (employee) {
            res.status(400).send({
                message: "Failed! Data ID KTP already registered"
            });
            return;
        }

        // CHECK EMAIL
        Employee.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: "Failed! Email is already in use!"
                });
                return;
            }

            next();
        });
    });
};

const verifyEmployee = {
    employeeDataCheck: employeeDataCheck,
};

module.exports = verifyEmployee;
