import constant from '../helpers/Constant';
import departmentService from '../services/departmentService'
import { validationResult } from 'express-validator';

const index = async (req, res) => {
    try {
        const departments = await departmentService.getAll();
        return (departments)
            ? res.status(constant.HTTP_OK).json({ message: 'Success', data: departments })
            : res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: 'No department currently exists!' });
    } catch (error) {
        return res.status(constant.HTTP_SERVER_ERROR).json({ error_message: error.message });
    }
}

const show = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: errors.array()[0].msg })
        }

        const department = await departmentService.findById(req.params.id);
        return (department)
            ? res.status(constant.HTTP_OK).json({ message: 'Success', data: department })
            : res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: 'Department Id is invalid!' });
    } catch (error) {
        return res.status(constant.HTTP_SERVER_ERROR).json({ error_message: error.message });
    }
}

const create = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: errors.array()[0].msg })
        }

        const isExists = await departmentService.findByName(req.body.name);
        if (isExists) {
            return res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: 'Department is already exists!' });
        }

        const department = await departmentService.create(req.body);
        return (department)
            ? res.status(constant.HTTP_OK).json({ message: 'Success', data: department })
            : res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: 'Department Id is invalid!' });
    } catch (error) {
        return res.status(constant.HTTP_SERVER_ERROR).json({ error_message: error.message });
    }
}

const update = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: errors.array()[0].msg })
        }

        const isExists = await departmentService.findById(req.body.id);
        if (!isExists) {
            return res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: 'Department Id is invalid!' });
        }

        const isUpdateSuccess = await departmentService.update(req.body);
        return (isUpdateSuccess)
            ? res.status(constant.HTTP_OK).json({ message: 'Update department is successfully!' })
            : res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: 'Duplicate department name with another department!' });
    } catch (error) {
        return res.status(constant.HTTP_SERVER_ERROR).json({ error_message: error.message });
    }
}

const destroy = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: errors.array()[0].msg })
        }

        const isExists = await departmentService.findById(req.params.id);
        if (!isExists) {
            return res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: 'Department Id is invalid!' });
        }
        const isDestroySuccess = await departmentService.destroy(req.params.id);
        return (isDestroySuccess)
            ? res.status(constant.HTTP_OK).json({ message: 'Delete department is successfully!' })
            : res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: 'Delete department is failed!' });
    } catch (error) {
        return res.status(constant.HTTP_SERVER_ERROR).json({ error_message: error.message });
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}
