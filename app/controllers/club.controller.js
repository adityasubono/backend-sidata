const db = require("../models");
const Club = db.club;
const Country = db.country;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.registerClub = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Nama Tidak Boleh Kosong"
        });
        return;
    }

    if (!req.body.countryId) {
        res.status(400).send({
            message: "Asal Negara Tidak Boleh Kosong"
        });
        return;
    }

    // Create a Club
    const club = {
        name: req.body.name,
        countryId: req.body.countryId,
    };

    // Save Tutorial in the database
    Club.create(club)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Pendaftaran Club Gagal"
            });
        });

};

// Retrieve all Players from the database.
exports.findAllClub= (req, res) => {
    const nameCLub = req.query.name;
    var condition = nameCLub ? { fullname: { [Op.like]: `%${nameCLub}%` } } : null;

    // Club.findAll({ where: condition })
    //     .then(data => {
    //         res.send(data);
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message:
    //                 err.message || "Some error occurred while retrieving clubs."
    //         });
    //     });

    Club.findAll({
        include: [{
            model: Country,
            as: "country"
            // required: false,
        }]
    }).then(data => {
        res.send(data);
    }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving clubs."
            });
        });
};

exports.updateDataClub = (req, res) => {
    const id = req.params.id;

    Club.update(req.body, {
        where: { id: id }
    })
        .then(data => {
            res.send({message: "Data Dengan ID "+ id +" Berhasil Diedit"});
        })
        .catch(err => {
            res.status(500).send({
                message: "Data Gagal Diedit Dengan : " + id
            });
        });
};

// Delete a Club with the specified id in the request
exports.deleteClubById = (req, res) => {
    const id = req.params.id;

    Club.destroy({
        where: { id: id }
    })
        .then(data => {
            if (data === 1) {
                res.status(200).send({
                    message: 'Data dengan ID : ' + id + ' berhasil dihapus'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Data dengan ID = " + id + " gagal terhapus"
            });
        });
};

