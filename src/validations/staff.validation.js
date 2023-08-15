import { param, body } from 'express-validator';
import constant from '../helpers/Constant'

export default class StaffValidate {
    static getDetail = () => {
        return [
            param('id')
                .notEmpty().withMessage('Staff id is required!')
                .isInt().withMessage('Staff id is must be a number!')
        ];
    }
    
    static create = () => {
        return [
            body('departmentId')
                .notEmpty().withMessage('Department Id is required!')
                .isInt().withMessage('Department Id is must a number!'),
            body('name')
                .notEmpty().withMessage('Name is required!')
                .isString().withMessage('Name must be a string!')
                .isLength({ min: 2, max: 100 }).withMessage('name must be less than 2 and longer than 100 character!'),
            body('email')
                .notEmpty().withMessage('Email is required!')
                .isEmail().withMessage('Email is not in correct format!'),
            body('password')
                .notEmpty().withMessage('Password is required!')
                .isString().withMessage('Password must be a string!')
                .isLength({ min: 6, max: 30 }).withMessage('password must be less than 6 and longer than 30 character!'),
            body('homeTown').optional()
                .isString().withMessage('HomeTown must be a string!')
                .isLength({ min: 2, max: 255 }).withMessage('HomeTown must be less than 2 and longer than 255 character!'),
            body('position')
                .notEmpty().withMessage('Position is required!')
                .isLength({ min: 2, max: 255 }).withMessage('Position must be less than 2 and longer than 255 character!'),
            body('gender').optional()
                .isInt().withMessage('Gender is must be a number!')
                .isIn([constant.MALE, constant.FEMALE]).withMessage('Gender is invalid!'),
            body('birthDate').optional()
                .isDate().withMessage('BirthDate is must be a date type!'),
            body('phoneNumber').optional()
                .isString({ min: 10, max: 20 }).withMessage('PhoneNumber must be less than 10 and longer than 20 character!'),
            body('address').optional()
                .isString({ min: 2, max: 255 }).withMessage('Address must be less than 2 and longer than 255 character!')
        ];
    }
    
    static update = () => {
        return [
            body('id')
                .notEmpty().withMessage('Staff id is required!')
                .isInt().withMessage('Staff id is must be a number!'),
            body('departmentId')
                .notEmpty().withMessage('Department Id is required!')
                .isInt().withMessage('Department Id is must a number!'),
            body('name')
                .notEmpty().withMessage('Name is required!')
                .isString().withMessage('Name must be a string!')
                .isLength({ min: 2, max: 100 }).withMessage('name must be less than 2 and longer than 100 character!'),
            body('email')
                .notEmpty().withMessage('Email is required!')
                .isEmail().withMessage('Email is not in correct format!'),
            body('password')
                .notEmpty().withMessage('Password is required!')
                .isString().withMessage('Password must be a string!')
                .isLength({ min: 6, max: 30 }).withMessage('password must be less than 6 and longer than 30 character!'),
            body('homeTown').optional()
                .isString().withMessage('HomeTown must be a string!')
                .isLength({ min: 2, max: 255 }).withMessage('HomeTown must be less than 2 and longer than 255 character!'),
            body('position')
                .notEmpty().withMessage('Position is required!')
                .isLength({ min: 2, max: 255 }).withMessage('Position must be less than 2 and longer than 255 character!'),
            body('gender').optional()
                .isInt().withMessage('Gender is must be a number!')
                .isIn([constant.MALE, constant.FEMALE]).withMessage('Gender is invalid!'),
            body('birthDate').optional()
                .isDate().withMessage('BirthDate is must be a date type!'),
            body('phoneNumber').optional()
                .isString({ min: 10, max: 20 }).withMessage('PhoneNumber must be less than 10 and longer than 20 character!'),
            body('address').optional()
                .isString({ min: 2, max: 255 }).withMessage('Address must be less than 2 and longer than 255 character!')
        ];
    }
    
    static destroy = () => {
        return [
            param('id')
                .notEmpty().withMessage('Staff Id is required!')
                .isInt().withMessage('Staff Id is must be a number!')
        ];
    }
    
    static getStaffByDepartment = () => {
        return [
            param('departmentId')
                .notEmpty().withMessage('department Id is required!')
                .isInt().withMessage('department Id is must be a number!')
        ];
    }
}
