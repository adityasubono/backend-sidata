const db = require("../models");
const Country = db.country;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.createCountry = (req, res) => {
    if (!req.body.country_name) {
        res.status(400).send({
            message: "Nama negara tidak boleh kosong"
        });
        return;
    }
    if (!req.body.code1) {
        res.status(400).send({
            message: "Kode negara 1 tidak boleh kosong"
        });
        return;
    }
    if (!req.body.code2) {
        res.status(400).send({
            message: "Kode negara 2 tidak boleh kosong"
        });
        return;
    }
    if (!req.body.country_name) {
        res.status(400).send({
            message: "Nama negara tidak boleh kosong"
        });
        return;
    }

    // Create a Club
    const country_data = {
        country_name: req.body.country_name,
        code1: req.body.code1,
        code2: req.body.code2,
        flag: req.body.flag
    };

    // Save Tutorial in the database
    Country.create(country_data)
        .then(data => {
            res.status(200).send({
                message: "Data Berhasil Disimpan" + data
            })
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Pendaftaran Nama Negara Gagal"
            });
        });

};

// Retrieve all Players from the database.
exports.findAllCountry = (req, res) => {
    const country_name = req.query.name;
    var condition = country_name ? {fullname: {[Op.like]: `%${country_name}%`}} : null;

    Country.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Pengambilan Data Negara Gagal"
            });
        });
};

exports.updateDataCountry = (req, res) => {
    const id = req.params.id;

    Country.update(req.body, {
        where: {id: id}
    })
        .then(data => {
            res.send({message: "Data Dengan ID " + id +" Berhasil Diedit"});

        })
        .catch(err => {
            res.status(500).send({
                message: "Data Gagal Diedit Dengan : " + id
            });
        });
};

// Delete a Club with the specified id in the request
exports.deleteCountryById = (req, res) => {
    const id = req.params.id;

    Country.destroy({
        where: {id: id}
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

