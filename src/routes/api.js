import express from 'express';
import DepartmentController from '../controllers/DepartmentController';
import departmentValidate from '../validations/department.validation';

const router = express.Router();

const apiRouter = (app) => {
    router.get('/v1/departments', DepartmentController.index);
    router.get('/v1/departments/show/:id', departmentValidate.getDetail(), DepartmentController.show);
    router.post('/v1/departments/create', departmentValidate.create(), DepartmentController.create);
    router.put('/v1/departments/update', departmentValidate.update(), DepartmentController.update);
    router.delete('/v1/departments/delete/:id', departmentValidate.destroy(), DepartmentController.destroy);

    app.use('/api', router);
}

module.exports = apiRouter
