const { body, validationResult } = require('express-validator');
const createProductValidation = [
    body('name').isString().trim().isLength({ min: 2 }).withMessage(''),
    body('price').isFloat({ gt: 0 }).withMessage(''),
    body('quantity').isInt({ min: 0 }).withMessage(''),
    body('category').optional().isString(),
];
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
module.exports = { createProductValidation, validate };