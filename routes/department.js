const path = require('path');

const express = require('express');

const departmentController = require('../controller/department.controller');

const router = express.Router();

router.get('/department', departmentController.allDepartment);
router.post('/adddepartment', departmentController.addDepartment);
router.get('/department/:departmentID', departmentController.getDepartment);

module.exports = router;