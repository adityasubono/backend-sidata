module.exports = app => {
    const country = require("../controllers/country.controller");

    var router = require("express").Router();

    // Create a new country
    router.post("/", country.createCountry);

    // Retrieve all country
    router.get("/", country.findAllCountry);

    app.use('/api/country', router);
};
