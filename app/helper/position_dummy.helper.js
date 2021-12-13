const db = require("../../app/models");
const Position = db.position;

function PositionCreate() {
    Position.create({
        name_position: "Headmaster"
    });
    Position.create({
        name: "Teacher"
    });
    Position.create({
        name: "Student"
    });
    Position.create({
        name: "Library"
    });
    Position.create({
        name: "Operation"
    });
    Position.create({
        name: "Parent"
    });

    Position.create({
        name: "Financial"
    });

    Position.create({
        name: "Counseling Guidance"
    });

    Position.create({
        name: "Staf IT"
    });

    Position.create({
        name: "Gardener"
    });

    Position.create({
        name: "Cleaning Service"
    });

    Position.create({
        name: "Security"
    });

    Position.create({
        name: "Clinic Doctor"
    });

    Position.create({
        name: "Driver"
    });
}

export default PositionCreate;
