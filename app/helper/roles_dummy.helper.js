const db = require("../../app/models");
const Role = db.role;

function RoleCreate() {
    Role.create({
        id: 1,
        name: "administration"
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

    Role.create({
        id: 8,
        name: "docter"
    });

    Role.create({
        id: 9,
        name: "vice principal"
    });

    Role.create({
        id: 10,
        name: "garderner"
    });

    Role.create({
        id: 11,
        name: "IT Support"
    });

    Role.create({
        id: 12,
        name: "counseling guidance"
    });

    Role.create({
        id: 13,
        name: "security"
    });

    Role.create({
        id: 14,
        name: "clening service"
    });
}

export default RoleCreate;
