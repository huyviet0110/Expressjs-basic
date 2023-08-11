import { param, body } from 'express-validator';

export default class DepartmentValidate {
    static getDetail = () => {
        return [
            param('id')
                .notEmpty().withMessage('Department Id is required!')
                .isInt().withMessage('Department Id is must be a number!')
        ];
    }
    
    static create = () => {
        return [
            body('name')
                .notEmpty().withMessage('Name is required!')
                .isLength({ min: 2, max: 255 }).withMessage('Name must be longer than 2 and less than 255 character!'),
            body('description')
                .notEmpty().withMessage('Description is required!')
                .isLength({ min: 10 }).withMessage('Description must be longer than 10 character!')
        ];
    }
    
    static update = () => {
        return [
            body('id')
                .notEmpty().withMessage('Department Id is required!')
                .isInt().withMessage('Department Id is must be a number!'),
            body('name')
                .notEmpty().withMessage('Department name is required!')
                .isLength({ min: 2, max: 255 }).withMessage('Department name must be longer than 2 and less than 255 character!'),
            body('description')
                .notEmpty().withMessage('Description is required!')
                .isLength({ min: 10 }).withMessage('Description must be longer than 10!')
        ];
    }
    
    static destroy = () => {
        return [
            param('id')
                .notEmpty().withMessage('Department Id is required!')
                .isInt().withMessage('Department Id is must be a number!')
        ];
    }
}
