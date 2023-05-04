import express from 'express'

import { validateCompany } from './company-validate'
import { updateCompanyBusinessName } from './update-by-patch-company-business-name';
import { aricoreDb } from './app';
import { validateSchemaMiddleware } from './validate-schema-middleware';


export const router = express.Router()


router.patch('/company/:companyId/business-name', validateSchemaMiddleware(validateCompany), async (req, res) => {
    const { companyId } = req.params;
    const { businessName } = req.body;
    try {
      const updatedCompany = await updateCompanyBusinessName(aricoreDb, companyId, businessName);
      res.json(updatedCompany);
    } catch (error: any) {
      res.status(500).json({ message: error.message});
    }
});
