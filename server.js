const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const db = require("./app/models");
const Role = db.role;

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

// parse requests of content-type - application/json
app.use(bodyParser.json());

db.sequelize.sync();
// drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
//   initial();
// });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "CBIS (BACKEND NODE JS)" });
});

function initial() {
    Role.create({
        id: 1,
        name: "admin"
    });

    Role.create({
        id: 2,
        name: "student"
    });

    Role.create({
        id: 3,
        name: "teacher"
    });

    Role.create({
        id: 4,
        name: "headmaster"
    });

    Role.create({
        id: 5,
        name: "library"
    });

    Role.create({
        id: 6,
        name: "financial"
    });

    Role.create({
        id: 7,
        name: "operational"
    });
}

require("./app/routes/tutorial.routes")(app);
require("./app/routes/player.routes")(app);
require("./app/routes/club.routes")(app);
require("./app/routes/country.routes")(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);



// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server Berhasil Berjalan Di port ${PORT}.`);
});

