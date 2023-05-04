import { Request, Response, NextFunction } from 'express';
import { ValidateFunction } from 'ajv';

export function validateSchemaMiddleware(schemaValidator: ValidateFunction): (req: Request, res: Response, next: NextFunction) => void {
  return (req: Request, res: Response, next: NextFunction) => {
    const isValid = schemaValidator(req.body);
    if (isValid) {
      next();
    } else {
      res.status(400).json({ error: 'Invalid data' });
    }
  };
}

