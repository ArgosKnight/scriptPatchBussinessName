"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const company_validate_1 = require("./company-validate");
const update_by_patch_company_business_name_1 = require("./update-by-patch-company-business-name");
const app_1 = require("./app");
const validate_schema_middleware_1 = require("./validate-schema-middleware");
exports.router = express_1.default.Router();
exports.router.patch('/company/:companyId/business-name', (0, validate_schema_middleware_1.validateSchemaMiddleware)(company_validate_1.validateCompany), async (req, res) => {
    const { companyId } = req.params;
    const { businessName } = req.body;
    try {
        const updatedCompany = await (0, update_by_patch_company_business_name_1.updateCompanyBusinessName)(app_1.aricoreDb, companyId, businessName);
        res.json(updatedCompany);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
