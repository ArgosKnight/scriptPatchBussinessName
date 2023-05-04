import { Request, Response, NextFunction } from 'express';
import { ValidateFunction } from 'ajv';
export declare function validateSchemaMiddleware(schemaValidator: ValidateFunction): (req: Request, res: Response, next: NextFunction) => void;
