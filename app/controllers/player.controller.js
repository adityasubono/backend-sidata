const db = require("../models");
const Player = db.players;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.registerPlayer = (req, res) => {
    if (!req.body.fullname) {
        res.status(400).send({
            message: "Full Name cannot be empty"
        });
        return;
    }

    // Create a Player
    const player = {
        title: req.body.title,
        fullname: req.body.fullname,
        placeofbirth: req.body.placeofbirth,
        dateofbirth: req.body.dateofbirth,
        nationality: req.body.nationality,
        club: req.body.club,
        position: req.body.position,
        number: req.body.number,
        weight: req.body.weight,
    };

    // Save Tutorial in the database
    Player.create(player)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Register Player."
            });
        });
};

// Retrieve all Players from the database.
exports.findAllPlayer = (req, res) => {
    const fullname = req.query.fullname;
    var condition = fullname ? { fullname: { [Op.like]: `%${fullname}%` } } : null;

    Player.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving players."
            });
        });
};

// Find a single Players with an id
exports.findOnePlayerById = (req, res) => {
    const id = req.params.id;

    Player.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving players with id=" + id
            });
        });
};

// Update a Players by the id in the request
exports.updatePlayerById = (req, res) => {
    const id = req.params.id;

    Player.update(req.body, {
        where: { id: id }
    })
        .then(data => {
            res.send({message: "Players was updated successfully."});
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Players with id=" + id
            });
        });
};

// Delete a Player with the specified id in the request
exports.deletePlayerById = (req, res) => {
    const id = req.params.id;

    Player.destroy({
        where: { id: id }
    })
        .then(data => {
            if (data === 1) {
                res.send({
                    message: "Players was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Players with id=${id}. Maybe Players was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Players with id=" + id
            });
        });
};

// Delete all Tutorials from the database.
exports.deleteAllPlayer = (req, res) => {
    Player.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Players were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Players."
            });
        });
};
