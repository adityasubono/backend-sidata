module.exports = app => {
    const club = require("../controllers/club.controller");

    var router = require("express").Router();

    // Retrieve all club
    router.get("/", club.findAllClub);

    // Create a new club
    router.post("/", club.registerClub);

    router.put("/:id", club.updateDataClub);

    // Delete a register player with id
    router.delete("/:id", club.deleteClubById);

    app.use('/api/club', router);
};
