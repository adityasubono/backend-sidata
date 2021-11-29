module.exports = app => {
    const players = require("../controllers/player.controller");

    var router = require("express").Router();

    // Create a new register player
    router.post("/", players.registerPlayer);

    // Retrieve all register player
    router.get("/", players.findAllPlayer);

    // Retrieve a single register player with id
    router.get("/:id", players.findOnePlayerById);

    // Update a register player with id
    router.put("/:id", players.updatePlayerById);

    // Delete a register player with id
    router.delete("/:id", players.deletePlayerById);

    // Delete all register player
    router.delete("/", players.deleteAllPlayer);

    app.use('/api/players', router);
};
