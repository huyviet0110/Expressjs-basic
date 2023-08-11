import { param, body } from 'express-validator';

const getDetail = () => {
    return [
        param('id')
            .notEmpty().withMessage('Department Id is required!')
            .isInt().withMessage('Department Id is must be a number!')
    ];
}

const create = () => {
    return [
        body('name')
            .notEmpty().withMessage('Name is required!')
            .isLength({ min: 2, max: 255 }).withMessage('Name must be less than 2 and longer than 255 character!')
    ];
}

const update = () => {
    return [
        body('id')
            .notEmpty().withMessage('Department Id is required!')
            .isInt().withMessage('Department Id is must be a number!'),
        body('name')
            .notEmpty().withMessage('Department name is required!')
            .isLength({ min: 2, max: 255 }).withMessage('Department name must be less than 2 and longer than 255 character!')
    ];
}

const destroy = () => {
    return [
        param('id')
            .notEmpty().withMessage('Department Id is required!')
            .isInt().withMessage('Department Id is must be a number!')
    ];
}

module.exports = {
    getDetail,
    create,
    update,
    destroy
}