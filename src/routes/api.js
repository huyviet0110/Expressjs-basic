import express from 'express';
import DepartmentController from '../controllers/DepartmentController';
import departmentValidate from '../validations/department.validation';
import StaffController from '../controllers/StaffController';
import StaffValidate from '../validations/staff.validation';

const router = express.Router();

const apiRouter = (app) => {
    router.get('/v1/departments', DepartmentController.index);
    router.get('/v1/departments/show/:id', departmentValidate.getDetail(), DepartmentController.show);
    router.post('/v1/departments/create', departmentValidate.create(), DepartmentController.create);
    router.put('/v1/departments/update', departmentValidate.update(), DepartmentController.update);
    router.delete('/v1/departments/delete/:id', departmentValidate.destroy(), DepartmentController.destroy);

    router.get('/v1/staffs', StaffController.index);
    router.get('/v1/staffs/show/:id', StaffValidate.getDetail(), StaffController.show);
    router.post('/v1/staffs/create', StaffValidate.create(), StaffController.create);
    router.put('/v1/staffs/update', StaffValidate.update(), StaffController.update);
    router.delete('/v1/staffs/delete/:id', StaffValidate.destroy(), StaffController.destroy);
    router.get('/v1/get-staffs-by-department/:departmentId', StaffValidate.getStaffByDepartment(), StaffController.getStaffByDepartment);

    app.use('/api', router);
}

module.exports = apiRouter
