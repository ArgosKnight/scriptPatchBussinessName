"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchemaMiddleware = void 0;
function validateSchemaMiddleware(schemaValidator) {
    return (req, res, next) => {
        const isValid = schemaValidator(req.body);
        if (isValid) {
            next();
        }
        else {
            res.status(400).json({ error: 'Invalid data' });
        }
    };
}
exports.validateSchemaMiddleware = validateSchemaMiddleware;
