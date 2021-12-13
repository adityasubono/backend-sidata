const db = require("../../app/models");
const User = db.user;

function UserCreate() {
    User.create({
        username: "admin",
        password: "admin123",
        email: "admin@gmail.com",
        roles: "admin"
    });
}

export default UserCreate;
