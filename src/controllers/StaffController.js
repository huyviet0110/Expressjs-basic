import { validationResult } from 'express-validator';
import constant from '../helpers/Constant';
import staffService from '../services/staffService';
import departmentService from '../services/departmentService';
const bcrypt = require('bcrypt');

export default class StaffController {
    static index = async (req, res) => {
        try {
            const staffs = await staffService.getAll();
            return staffs
                ? res.status(constant.HTTP_OK).json({ message: 'Success', data: staffs })
                : res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: 'Currently, There is no staff!' });
        } catch (error) {
            return res.status(constant.HTTP_SERVER_ERROR).json({ error_message: error.message });
        }
    }
    
    static show = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: errors.array()[0].msg });
            }
    
            const staff = await staffService.findById(req.params.id);
            return staff
                ? res.status(constant.HTTP_OK).json({ message: 'Success', data: staff })
                : res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: 'Staff id is invalid!' });
        } catch (error) {
            return res.status(constant.HTTP_SERVER_ERROR).json({ error_message: error.message });
        }
    }
    
    static create = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: errors.array()[0].msg });
            }
    
            const isExists = await staffService.findByEmail(req.body.email);
            if (isExists) {
                return res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: 'Staff email is already exists!' });
            }
    
            req.body.password = bcrypt.hashSync(req.body.password, constant.SALT_LENGTH);
            const staff = await staffService.create(req.body);
            return (staff)
                ? res.status(constant.HTTP_OK).json({ message: 'Success', data: staff })
                : res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: 'Create staff is failed!' });
        } catch (error) {
            return res.status(constant.HTTP_SERVER_ERROR).json({ error_message: error.message });
        }
    }
    
    static update = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: errors.array()[0].msg });
            }
    
            const isExists = await staffService.findById(req.body.id);
            if (!isExists) {
                return res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: 'Staff Id is invalid!' });
            }
    
            req.body.password = bcrypt.hashSync(req.body.password, constant.SALT_LENGTH);
            const isUpdateSuccess = await staffService.update(req.body);
            return (isUpdateSuccess)
                ? res.status(constant.HTTP_OK).json({ message: 'Update staff is successfully!' })
                : res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: 'Duplicate email with another staff!' });
        } catch (error) {
            return res.status(constant.HTTP_SERVER_ERROR).json({ error_message: error.message });
        }
    }
    
    static destroy = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: errors.array()[0].msg });
            }
    
            const isExists = await staffService.findById(req.params.id);
            if (!isExists) {
                return res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: 'Staff id is invalid!' });
            }
    
            const isDeleteSuccess = await staffService.destroy(req.params.id);
            return isDeleteSuccess
                ? res.status(constant.HTTP_OK).json({ message: 'Delete staff is sucessfully!' })
                : res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: 'Delete staff is failed!' });
        } catch (error) {
            return res.status(constant.HTTP_SERVER_ERROR).json({ error_message: error.message });
        }
    }
    
    static getStaffByDepartment = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: errors.array()[0].msg });
            }
    
            const isDepartmentExists = await departmentService.findById(req.params.departmentId);
            if (!isDepartmentExists) {
                return res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: 'Department id is invalid!' });
            }
    
            const staffs = await staffService.getStaffByDepartment(req.params.departmentId);
            return staffs
                ? res.status(constant.HTTP_OK).json({ message: 'Success', data: staffs })
                : res.status(constant.HTTP_EXPECTATION_FAILED).json({ error_message: 'Currently, there is no staff!' });
        } catch (error) {
            return res.status(constant.HTTP_SERVER_ERROR).json({ error_message: error.message });
        }
    }
}
