const Department = require('../models/department');

// show all departments
exports.allDepartment = (req, res, next) => {
    Department.find()
        .then((departments) => {
            console.log(departments);
            res.render('department', {
                title: "ALL Department",
                departments: departments,
                path: '/department'
            });
        })
        .catch((e) => {
            console.log(e);
        });
};

exports.addDepartment = (req, res, next) => {
    const name = req.body.name;
    const department = new Department({
        name: name
    });
    department.save()
        .then((department) => {
            console.log(department);
            res.redirect('/department');
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.getDepartment = (req, res, next) => {
    const depId = req.params.departmentID;
    Department.findOne()
        .then((department) => {
            console.log(department);
            res.render('department', {
                department: department,
                path: '/department'
            });
        })
        .catch((e) => {
            console.log(e);
        })


}