exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");

};

exports.teacherDashboard = (req, res) => {
    res.status(200).send("Teacher Content.");
};

exports.studentDashboard = (req, res) => {
    res.status(200).send("Student Content.");
};

exports.adminDashboard = (req, res) => {
    res.status(200).send("Admin Content.");
};
